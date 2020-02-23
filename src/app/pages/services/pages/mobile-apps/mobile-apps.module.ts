import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MobileAppsComponent } from './mobile-apps.component';

const routes: Routes = [
  { path: '', component: MobileAppsComponent }
];

@NgModule({
  declarations: [MobileAppsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MobileAppsModule { }
