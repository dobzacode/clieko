import { pgTable, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  lastname: text('last_name'),
  firstname: text('first_name'),
  username: text('username'),
});

export const track = pgTable('track', {
  id: text('id').primaryKey(),
  bpm: text('bpm').notNull(),
  s3_key: text('s3_key').notNull(),
});
