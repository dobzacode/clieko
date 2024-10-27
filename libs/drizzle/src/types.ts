import { Config as DrizzleConfig } from 'drizzle-kit';
import { InferSelectModel } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

export type User = InferSelectModel<typeof schema.user>;

export type Config = DrizzleConfig;

export type Database = ReturnType<typeof drizzle>;

export type Repository = {
  getUsers: () => Promise<User[]>;
};
