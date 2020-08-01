import { Component, OnInit } from '@angular/core';

import { RouteItem } from '../model/RouteItem';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  title: string =  "Student!";
  routeItems: RouteItem[] = [
    new RouteItem('Subjects', 'subjects'),
    new RouteItem('Tasks', 'tasks')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
