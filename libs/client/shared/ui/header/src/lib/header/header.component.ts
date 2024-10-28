import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '@clieko-workspace/login';
import { LogoutComponent } from '@clieko-workspace/logout';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, LoginComponent, LogoutComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
