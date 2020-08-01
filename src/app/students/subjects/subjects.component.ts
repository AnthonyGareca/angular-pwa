import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  studentId = "pOnk5GMS0cqpTsOFXYT3";
  courseId = "";
  subjectList = [];
  constructor(private courseService: CourseService, private subjectService: SubjectService) { 
    
  }
  

  ngOnInit(): void {
    this.courseService.getCoursesByStudentId(this.studentId).subscribe(coursesSnapshot => {
      this.courseId = coursesSnapshot[0].payload.doc.id;
      this.subjectService.getSubjectByCourseId(this.courseId).subscribe(coursesSnapshot => {
        coursesSnapshot.forEach(data => {
          this.subjectList.push({
            id: data.payload.doc.id,
            data: data.payload.doc.data()
          });
        });
      });
    });
  }

}
