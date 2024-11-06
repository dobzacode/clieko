import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-landing',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'main',
  },
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
