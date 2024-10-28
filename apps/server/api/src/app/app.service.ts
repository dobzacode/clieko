import * as drizzle from '@api/core/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class AppService {
  constructor(
    @Inject(drizzle.DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof drizzle.schema>
  ) {}

  async getFirstUser() {
    const existingUser = await this.db.query.user.findFirst({});
    return existingUser;
  }
}
