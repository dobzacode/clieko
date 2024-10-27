import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

import { Config } from './types';

const baseConfig: Pick<Config, 'migrations'> & {
  dialect: 'postgresql';
} = {
  dialect: 'postgresql',
  migrations: {
    prefix: 'timestamp',
  },
};

export const createDatabaseConfig = (url: string): Config => {
  return defineConfig({
    ...baseConfig,
    schema: resolve(__dirname, './schema.ts'),
    out: resolve(__dirname, '../migrations'),
    dbCredentials: {
      url,
    },
  });
};

export default defineConfig({
  ...baseConfig,
  schema: './src/schema.ts',
  out: './migrations',
});
