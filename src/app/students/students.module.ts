import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
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
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class StudentsModule { }
