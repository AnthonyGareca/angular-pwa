import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomComponentsModule } from '../components/custom-components.module';
import { MaterialDependenciesModule } from '../components/material-dependencies.module';

import { TeachersComponent } from './teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      {
        path: '',
        redirectTo: 'courses',
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'courses/:id/questionnaires',
        component: QuestionnairesComponent,
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
    CoursesComponent,
    CourseDialogComponent,
    QuestionnairesComponent,
  ],
  imports: [
    CommonModule,
    CustomComponentsModule,
    FormsModule,
    MaterialDependenciesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TeachersModule { }
