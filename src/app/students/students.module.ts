import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomComponentsModule } from '../components/custom-components.module';
import { MaterialDependenciesModule } from '../components/material-dependencies.module';
import {MatChipsModule} from '@angular/material/chips';

import { StudentsComponent } from './students.component';
import { TasksComponent } from './tasks/tasks.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TaskComponent } from './task/task.component';
import { MatInputModule } from '@angular/material/input';

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
      {
        path: 'tasks/:id',
        component: TaskComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    StudentsComponent,
    SubjectsComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    CustomComponentsModule,
    MaterialDependenciesModule,
    MatInputModule,
    MatChipsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class StudentsModule { }
