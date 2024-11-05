import { AuthorizationGuard } from '@api/core/authorization';
import { TrackService } from '@api/track/data-access-track';

import { Controller, Get, Query, UseGuards } from '@nestjs/common';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @UseGuards(AuthorizationGuard)
  @Get()
  getTrack(@Query('url') trackUrl: string) {
    return this.trackService.getTrack(trackUrl);
  }
}
