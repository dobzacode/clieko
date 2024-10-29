import { drizzleProvider } from '@api/core/drizzle';
import { UserService } from '@api/user/data-access';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, ...drizzleProvider],
  exports: [],
})
export class UserModule {}
