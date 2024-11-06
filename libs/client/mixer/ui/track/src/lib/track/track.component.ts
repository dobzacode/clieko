import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HlmInputDirective } from '@client/shared/ui/ui-input-helm';
import { HlmLabelDirective } from '@client/shared/ui/ui-label-helm';

@Component({
  selector: 'lib-client-mixer-ui-track',
  standalone: true,
  imports: [CommonModule, HlmInputDirective, HlmLabelDirective],
  templateUrl: './track.component.html',
})
export class TrackComponent {}
