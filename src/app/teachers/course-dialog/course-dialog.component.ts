import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  courseForm = new FormGroup({
    courseName: new FormControl(''),
    courseDescription: new FormControl(''),
    courseSubjects: new FormControl(),
  });

  courseName = '';
  courseDescription = '';
  subjects = new FormControl();

  subjectList = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Object,
    private firebase: FirebaseService) { }

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

  saveCourse() {
    const data = {
      name: this.courseName,
      description: this.courseDescription,
      subjects: this.subjects.value,
    };
    console.log(data)
    this.firebase.create('courses', data);
  }

}
