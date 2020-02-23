import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'services/all', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        m => m.HomeModule
      ),
  },
  {
    path: 'case-studies',
    loadChildren: () =>
      import('./pages/case-studies/case-studies.module').then(
        m => m.CaseStudiesModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then(
        m => m.ServicesModule
      ),
  },
  {
    path: 'expertise',
    loadChildren: () =>
      import('./pages/expertise/expertise.module').then(
        m => m.ExpertiseModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(
        m => m.AboutModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        m => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
