import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialDependenciesModule } from './material-dependencies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialDependenciesModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class CustomComponentsModule { }
