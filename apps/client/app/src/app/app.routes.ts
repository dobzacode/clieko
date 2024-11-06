import { Route } from '@angular/router';
import { LandingComponent } from '@client/landing';
import { MixerComponent } from '@client/mixer/ui/mixer';
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
  {
    path: 'mixer',
    component: MixerComponent,
  },
];
