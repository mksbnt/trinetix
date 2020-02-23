import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CaseStudiesComponent} from './case-studies.component';

const routes: Routes = [
  { path: '', component: CaseStudiesComponent }
];

@NgModule({
  declarations: [CaseStudiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CaseStudiesModule { }
