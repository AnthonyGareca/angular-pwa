
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {TaskResponse} from '../../model/taskresponse'
import {TaskService} from '../../services/task.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  myForm: FormGroup;
  studentId = localStorage.getItem("studentId");
  task_id = ""
  task=null
  constructor(
    public formBuilder: FormBuilder,
    private activatedroute:ActivatedRoute, 
    private taskService: TaskService
    ) { 
  }

  ngOnInit(): void {
    this.task_id =this.activatedroute.snapshot.paramMap.get("id");

    this.taskService.getTaskById(this.task_id).subscribe(taskSnapshot => {
      this.taskService.getDeliveredTask(this.studentId, this.task_id).subscribe(deliveredTaskSnapshot => {
        let delivered = false;
          if(typeof deliveredTaskSnapshot !== 'undefined' && deliveredTaskSnapshot.length > 0){
            delivered = true;
          }
          this.task = taskSnapshot.payload.data();
          this.task.delivered = delivered
          this.createMyForm(this.task.questions)
      })
    });
  }

  saveTask(): void {
    console.log(this.task)
  }

  private createMyForm(questions){
    this.myForm = new FormGroup({});
    let responses = []
    for (let question of questions) {
      this.myForm.addControl(question.id, new FormControl('', Validators.required))
    }
    if(this.task.delivered){
      this.taskService.getResponses(this.task_id, this.studentId).subscribe(responsesSnapshot => {
        responsesSnapshot.forEach(data => {
          let taskresponse = data.payload.doc.data() as TaskResponse
          this.myForm.get(taskresponse.question).setValue(taskresponse.response)
          this.myForm.get(taskresponse.question).disable()
        });
      });
    }
  }

  async onSubmit() {
    for (let question of this.task.questions) {
      this.taskService.saveResponse({
        "course": this.task.courseId,
        "question": question.id,
        "questionnaire": this.task_id,
        "response": this.myForm.get(question.id).value,
        "student": localStorage.getItem("studentId"),
      })
    }
    this.taskService.delivereTask({"questionnaireId": this.task_id, "studentId": localStorage.getItem("studentId")});
  }
}
