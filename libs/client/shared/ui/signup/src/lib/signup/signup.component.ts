import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';

@Component({
  selector: 'lib-signup-button',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
  isAuthenticated$ = this.auth.isAuthenticated$;
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
