import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environment.local';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.callbackUrl,
        audience: environment.auth.audience,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiServerUrl}/api`,
            tokenOptions: {
              authorizationParams: { audience: environment.auth.audience },
            },
          },
        ],
      },
    }),
    provideRouter(appRoutes),
  ],
};
