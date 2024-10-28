import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { environment } from './environment.local';

bootstrapApplication(AppComponent, {
  providers: [
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
            uri: `${environment.apiServerUrl}/api/*`,
            tokenOptions: {
              authorizationParams: { audience: environment.auth.audience },
            },
          },
        ],
      },
    }),
  ],
});
