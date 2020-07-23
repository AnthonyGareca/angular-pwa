import { Component, OnInit } from '@angular/core';
import { RouteItem } from '../model/RouteItem';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  title: string =  "Teachers!";
  routeItems: RouteItem[] = [
    new RouteItem('Courses', 'courses'),
    new RouteItem('Subjects', 'subjects'),
    new RouteItem('Students', 'students'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
