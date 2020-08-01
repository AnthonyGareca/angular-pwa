import { Component, OnInit } from '@angular/core';


import {CourseService} from '../../services/course.service'
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  studentId = "pOnk5GMS0cqpTsOFXYT3";
  taskList = [];
  courseId = "";
  constructor(private courseService: CourseService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.courseService.getCoursesByStudentId(this.studentId).subscribe(coursesSnapshot => {
      this.courseId = coursesSnapshot[0].payload.doc.id;
      this.taskService.getTaskByCourseId(this.courseId).subscribe(tasksSnapshot => {
        tasksSnapshot.forEach(data => {
          this.taskService.getDeliveredTask(this.studentId, data.payload.doc.id).subscribe(taskSnapshot => {
            let delivered = false;
            if(typeof taskSnapshot !== 'undefined' && taskSnapshot.length > 0){
              delivered = true;
            }
            this.taskList.push({
              delivered: delivered,
              id: data.payload.doc.id,
              data: data.payload.doc.data()
            });
          });
        });
      });
    });
  }

}
