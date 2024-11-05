import * as drizzle from '@api/core/drizzle';
import { schema } from '@api/core/drizzle';
import { CreateUserDto } from '@api/user/interface-user';

import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UserService {
  constructor(
    @Inject(drizzle.DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof drizzle.schema>
  ) {}

  async createUser(userInfo: CreateUserDto) {
    const newUser = await this.db.insert(schema.user).values(userInfo);
    return newUser;
  }
}
