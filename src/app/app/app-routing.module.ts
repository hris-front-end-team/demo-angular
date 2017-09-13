import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { OtherPageComponent } from '../other-page/other-page.component';
import { MainPageComponent } from '../main-page/main-page.component';

export const appRoutes: Routes = [
  { path: 'rapid-entry/:id', redirectTo: 'other' },

  { path: 'main', component: MainPageComponent },
  { path: 'other', component: OtherPageComponent },

  { path: '**', component: MainPageComponent, },
];
