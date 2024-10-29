import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginComponent } from '@clieko-workspace/login';
import { LogoutComponent } from '@clieko-workspace/logout';
import { SignupComponent } from '@clieko-workspace/signup';

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
