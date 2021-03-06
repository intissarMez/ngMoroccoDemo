import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
