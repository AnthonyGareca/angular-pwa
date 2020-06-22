import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./../students/students.module').then(m => m.StudentsModule),
  },
  {
    path: 'teachers',
    loadChildren: () => import('./../teachers/teachers.module').then(m => m.TeachersModule),
  },
  {
    path: 'parents',
    loadChildren: () => import('./../parents/parents.module').then(m => m.ParentsModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./../about/about.module').then(m => m.AboutModule),
  },
]

@NgModule({
  declarations: [
    ShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    ShellComponent,
  ]
})
export class CoreModule { }
