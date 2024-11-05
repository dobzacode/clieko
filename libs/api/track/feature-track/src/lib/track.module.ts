import { drizzleProvider } from '@api/core/drizzle';
import { TrackService } from '@api/track/data-access-track';
import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';

@Module({
  controllers: [TrackController],
  providers: [TrackService, ...drizzleProvider],
  exports: [],
})
export class TrackModule {}
