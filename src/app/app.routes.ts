import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LegalPageComponent } from './components/legal-page/legal-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: LegalPageComponent, data: { page: 'privacy' } },
  { path: 'legal-notice', component: LegalPageComponent, data: { page: 'legal' } },
];
