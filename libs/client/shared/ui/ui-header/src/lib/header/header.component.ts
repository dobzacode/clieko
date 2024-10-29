import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginComponent } from '@client/shared/ui/login';
import { LogoutComponent } from '@client/shared/ui/logout';
import { SignupComponent } from '@client/shared/ui/signup';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, LoginComponent, LogoutComponent, SignupComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;
}
