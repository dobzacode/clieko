import * as schema from '@clieko/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class AppService {
  constructor(
    @Inject(schema.DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>
  ) {}

  async getFirstUser() {
    const existingUser = await this.db.query.user.findFirst({});
    return existingUser;
  }
}
