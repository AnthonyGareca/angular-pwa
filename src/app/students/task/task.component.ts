
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';


import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task_id = ""
  task=null
  constructor(private activatedroute:ActivatedRoute, private taskService: TaskService) { 

  }

  ngOnInit(): void {
    this.task_id =this.activatedroute.snapshot.paramMap.get("id");

    this.taskService.getTaskById(this.task_id).subscribe(taskSnapshot => {
      this.task = taskSnapshot.payload.data();
    });
  }

}
