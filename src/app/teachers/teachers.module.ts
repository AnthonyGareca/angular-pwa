import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomComponentsModule } from '../components/custom-components.module';
import { MaterialDependenciesModule } from '../components/material-dependencies.module';

import { TeachersComponent } from './teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
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
        path: 'students',
        component: StudentsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TeachersComponent,
    SubjectsComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    CustomComponentsModule,
    MaterialDependenciesModule,
    RouterModule.forChild(routes),
  ]
})
export class TeachersModule { }
