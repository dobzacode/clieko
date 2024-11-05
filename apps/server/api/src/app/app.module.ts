import { DrizzleModule } from '@api/core/drizzle';

import { TrackModule } from '@api/track/feature-track';
import { UserModule } from '@api/user/feature';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppLoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    DrizzleModule,
    UserModule,
    TrackModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
