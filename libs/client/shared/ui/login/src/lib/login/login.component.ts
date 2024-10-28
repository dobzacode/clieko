import { Component, inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';

@Component({
  selector: 'lib-login-button',
  imports: [HlmButtonDirective],
  templateUrl: './login.component.html',
  standalone: true,
})
export class LoginComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
  isAuthenticated$ = this.auth.isAuthenticated$;
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
