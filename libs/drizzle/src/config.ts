import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import { resolve } from 'path';

dotenv.config({
  path: '.env',
});

export default {
  schema: resolve(__dirname, './schema.ts'),
  out: resolve(__dirname, '../migrations'),
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config;
