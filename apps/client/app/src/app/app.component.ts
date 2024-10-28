import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HeaderComponent } from '@clieko-workspace/header';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
