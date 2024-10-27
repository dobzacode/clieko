import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').unique(),
});
