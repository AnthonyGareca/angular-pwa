import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FirebaseService } from '../../services/firebase.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseList: Array<Object>;

  constructor(
    public dialog: MatDialog,
    private firebase: FirebaseService) {
      this.courseList = new Array();
    }

  ngOnInit(): void {
    this.getCourses();
  }

  openCourseDialog() {
    this.dialog.open(CourseDialogComponent);
  }

  // TODO: look for a better way to navigate if it es possible
  getQuestionnairesPath(id: string) {
    return `${id}/questionnaires`;
  }

  private getCourses() {
    this.firebase
    .getAll('courses')
    .subscribe(coursesSnapshot => {
      this.courseList = [];
      coursesSnapshot.forEach(data => {
        this.courseList.push(this.buildCourse(data));
      });
    });
  }

  private buildCourse(data) {
    const doc = data.payload.doc;
    const docData = doc.data()
    return {
      id: doc.id,
      name: docData.name,
      subjects: docData.subjects,
      subjectList: docData.subjects.map(({ name }) => name).join(', '),
      description: docData.description
    };
  }

}
