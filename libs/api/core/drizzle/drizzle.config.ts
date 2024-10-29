import { ConfigService } from '@nestjs/config';
import type { Config } from 'drizzle-kit';

const configService = new ConfigService();

export default {
  schema: './src/schema.ts',
  out: './src/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: configService.get<string>('DATABASE_URL') ?? '',
  },
} satisfies Config;
