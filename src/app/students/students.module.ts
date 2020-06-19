import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
  }
];

@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentsModule { }
