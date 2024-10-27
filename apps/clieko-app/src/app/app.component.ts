import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  imports: [HlmButtonDirective],
  selector: 'app-root',
  template: `<button hlmBtn variant="outline">Hello from {{ title }}</button>`,
})
export class AppComponent {
  title = 'sparta';
}
