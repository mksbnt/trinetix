import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ExpertiseComponent} from './expertise.component';

const routes: Routes = [
  { path: '', component: ExpertiseComponent }
];

@NgModule({
  declarations: [ExpertiseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ExpertiseModule { }
