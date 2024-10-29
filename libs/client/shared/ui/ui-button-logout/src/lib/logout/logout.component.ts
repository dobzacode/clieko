import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';

@Component({
  selector: 'lib-logout-button',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}
