import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  // TODO: research about FormGroup, FormControl and their implementation
  courseName = '';
  courseDescription = '';
  subjects = new FormControl();

  subjectList = [];

  constructor(
    private firebase: FirebaseService,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    ) { }

  ngOnInit(): void {
    this.firebase.getAll('subjects').subscribe(subjectsSnapshot => {
      this.subjectList = [];
      subjectsSnapshot.forEach(data => {
        this.subjectList.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data(),
        });
      });
    });
  }

  async saveCourse() {
    const data = {
      name: this.courseName,
      description: this.courseDescription,
      subjects: this.subjects.value,
    };
    await this.firebase.create('courses', data);
    this.dialogRef.close();
  }

}
