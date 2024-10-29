import { pgTable, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  lastname: text('last_name'),
  firstname: text('first_name'),
  username: text('username'),
});
