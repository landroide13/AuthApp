import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {PricesComponent} from '../app/components/prices/prices.component';
import {ProtectedComponent} from '../app/components/protected/protected.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
