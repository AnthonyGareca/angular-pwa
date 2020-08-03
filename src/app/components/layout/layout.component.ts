import { Component, OnInit, Input } from '@angular/core';
import { RouteItem } from 'src/app/model/RouteItem';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  hasBackdrop: boolean = true;
  mode: string = "over";

  @Input()
  title: string;

  @Input()
  routeItems: RouteItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
