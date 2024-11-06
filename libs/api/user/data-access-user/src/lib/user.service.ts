import * as drizzle from '@api/core/drizzle';
import { schema } from '@api/core/drizzle';
import { CreateUserDto } from '@api/user/interface-user';

import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UserService {
  constructor(
    @Inject(drizzle.DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof drizzle.schema>
  ) {}

  async getUserById(id: string) {
    const [user] = await this.db
      .select()
      .from(schema.user)
      .where(eq(schema.user.id, id));

    return user;
  }

  async createUser(userInfo: CreateUserDto) {
    const newUser = await this.db.insert(schema.user).values(userInfo);
    return newUser;
  }
}
