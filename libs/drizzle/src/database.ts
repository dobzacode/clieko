import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import {} from 'postgres';
import * as schema from './schema';
import { Database } from './types';

export const createDatabase = (url: string): Database => {
  const connectionString = url;
  const pool = new Pool({
    connectionString,
  });
  const database = drizzle(pool, { schema });

  return database;
};
