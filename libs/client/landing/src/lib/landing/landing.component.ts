import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-landing',
  standalone: true,
  imports: [CommonModule],
  host: {
    class:
      'min-h-[calc(100vh-11.7rem)] flex flex-col items-center justify-center self-center',
  },
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
