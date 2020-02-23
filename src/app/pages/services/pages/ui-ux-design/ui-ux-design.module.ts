import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UiUxDesignComponent } from './ui-ux-design.component';

const routes: Routes = [
  { path: '', component: UiUxDesignComponent }
];

@NgModule({
  declarations: [UiUxDesignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class UiUxDesignModule { }
