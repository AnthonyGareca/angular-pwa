import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MaterialDependenciesModule } from '../components/material-dependencies.module';

import { StudentsComponent } from './students.component';
import { TasksComponent } from './tasks/tasks.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'subjects',
      },
      {
        path: 'subjects',
        component: SubjectsComponent,
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
    SubjectsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    MaterialDependenciesModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class StudentsModule { }
