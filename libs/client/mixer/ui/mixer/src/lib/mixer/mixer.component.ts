import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetMp3Component } from '@client/mixer/track/get-mp3';

@Component({
  selector: 'lib-client-mixer-track-ui-mixer',
  standalone: true,
  imports: [CommonModule, GetMp3Component],
  templateUrl: './mixer.component.html',
  host: {
    class: 'main',
  },
})
export class MixerComponent {}
