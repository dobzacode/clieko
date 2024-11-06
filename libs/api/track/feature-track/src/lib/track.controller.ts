import { AuthorizationGuard } from '@api/core/authorization';
import { TrackService } from '@api/track/data-access-track';

import { Controller, Get, Query, UseGuards } from '@nestjs/common';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @UseGuards(AuthorizationGuard)
  @Get()
  async getTrack(@Query('url') trackUrl: string) {
    const result = await this.trackService.getTrack(trackUrl);
    const data = await result.json();
    return data;
  }
}
