import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './parents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: ParentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
    ],
  },
];


@NgModule({
  declarations: [
    ParentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ParentsModule { }
