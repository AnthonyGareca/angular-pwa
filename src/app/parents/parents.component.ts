import { Component, OnInit } from '@angular/core';
import { RouteItem } from '../model/RouteItem';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  title: string =  "Parents";
  routeItems: RouteItem[] = [
    new RouteItem('Dashboard', 'dashboard'),
    new RouteItem('Task', 'tasks'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
