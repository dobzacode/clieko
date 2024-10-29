import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@clieko-workspace/header';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';
import { UserComponent } from './user.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HlmButtonDirective,
    HeaderComponent,
    UserComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
