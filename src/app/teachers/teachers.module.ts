import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TeachersModule { }
