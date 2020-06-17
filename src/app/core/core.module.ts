import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./../about/about.module').then(m => m.AboutModule),
  },
]

@NgModule({
  declarations: [
    ShellComponent,
    TopBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    ShellComponent,
    RouterModule,
  ]
})
export class CoreModule { }
