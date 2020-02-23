import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesNavigationComponent } from './components/services-navigation/services-navigation.component';

const routes: Routes = [
  { path: '', component: ServicesComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        loadChildren: () => import('./pages/all/all.module')
          .then(m => m.AllModule)
      },
      {
        path: 'mobile-apps',
        loadChildren: () => import('./pages/mobile-apps/mobile-apps.module')
          .then(m => m.MobileAppsModule)
      },
      {
        path: 'web-services',
        loadChildren: () => import('./pages/web-services/web-services.module')
          .then(m => m.WebServicesModule)
      },
      {
        path: 'augmented-reality',
        loadChildren: () => import('./pages/augmented-reality/augmented-reality.module')
          .then(m => m.AugmentedRealityModule)
      },
      {
        path: 'ui-ux-design',
        loadChildren: () => import('./pages/ui-ux-design/ui-ux-design.module')
          .then(m => m.UiUxDesignModule)
      },
      {
        path: 'development',
        loadChildren: () => import('./pages/development/development.module')
          .then(m => m.DevelopmentModule)
      },
    ]
  }
];

@NgModule({
  declarations: [ServicesComponent, ServicesNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ServicesModule { }
