import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  hasBackdrop: boolean = true;
  mode: string =  "over";

  constructor() { }

  ngOnInit(): void {
  }

}
