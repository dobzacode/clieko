import * as drizzle from '@api/core/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class TrackService {
  constructor(
    @Inject(drizzle.DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof drizzle.schema>
  ) {}

  async getTrack(trackUrl: string) {
    const presignedUrl = await fetch(
      `https://oaic34s37b.execute-api.eu-central-1.amazonaws.com/track?url=${trackUrl}`
    );
    return presignedUrl;
  }
}
