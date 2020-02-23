import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DevelopmentComponent } from './development.component';

const routes: Routes = [
  { path: '', component: DevelopmentComponent }
];

@NgModule({
  declarations: [DevelopmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class DevelopmentModule { }
