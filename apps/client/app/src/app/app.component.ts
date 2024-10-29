import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@clieko-workspace/header';
import { HlmButtonDirective } from '@client/shared/ui/ui-button-helm';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective, HeaderComponent],
  selector: 'app-root',
  host: {
    class:
      'section-px flex flex-col main-gap min-h-screen h-full bg-background',
  },
  templateUrl: './app.component.html',
})
export class AppComponent {}
