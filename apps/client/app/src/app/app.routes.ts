import { Route } from '@angular/router';
import { LandingComponent } from '@client/landing';
import { ProfilComponent } from '@client/profil';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
];
