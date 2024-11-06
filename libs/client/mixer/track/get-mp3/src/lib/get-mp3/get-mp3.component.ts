import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackService } from '@client/shared/data-access/data-access-track';

import { HlmInputDirective } from '@client/shared/ui/ui-input-helm';
import { HlmLabelDirective } from '@client/shared/ui/ui-label-helm';

@Component({
  selector: 'lib-get-mp3',
  standalone: true,
  imports: [CommonModule, HlmInputDirective, HlmLabelDirective, FormsModule],
  templateUrl: './get-mp3.component.html',
})
export class GetMp3Component {
  soundCloudUrl = '';
  presignedUrl: string | null = null;

  trackService = inject(TrackService);

  fetchPresignedUrl() {
    this.trackService.getTrack(this.soundCloudUrl).subscribe((url) => {
      this.presignedUrl = url.presigned_url;
    });
  }
}
