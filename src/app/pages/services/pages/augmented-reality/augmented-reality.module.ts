import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AugmentedRealityComponent } from './augmented-reality.component';

const routes: Routes = [
  { path: '', component: AugmentedRealityComponent }
];

@NgModule({
  declarations: [AugmentedRealityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AugmentedRealityModule { }
