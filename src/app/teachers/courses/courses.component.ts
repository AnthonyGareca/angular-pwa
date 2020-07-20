import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseList;

  constructor(public dialog: MatDialog,
    private firebase: FirebaseService) {
      this.courseList = [];
    }

  ngOnInit(): void {
    this.firebase
      .getAll('courses')
      .subscribe(coursesSnapshot => {
        this.courseList = [];
        coursesSnapshot.forEach(data => {
          this.courseList.push({
            id: data.payload.doc.id,
            data: data.payload.doc.data(),
          });
        });
        console.log(this.courseList)
      });
  }

  openCourseDialog() {
    this.dialog
      .open(
        CourseDialogComponent,
        { data: 'hi!' }
      );
  }

  // TODO: look for a better way to navigate if it es possible
  getQuestionnairesPath(id) {
    return `${id}/questionnaires`;
  }

}
