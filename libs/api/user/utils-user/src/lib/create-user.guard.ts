import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CreateUserGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const secret = this.configService.get<string>('CREATE_USER_SECRET');

    if (!secret) {
      throw new UnauthorizedException('Missing secret');
    }

    const request = context.switchToHttp().getRequest();
    console.log(request.body);
    const sessionToken = request.body.session_token;

    if (!sessionToken) {
      throw new UnauthorizedException('Missing session token');
    }

    try {
      jwt.verify(sessionToken, secret);

      return true;
    } catch (err) {
      Logger.error(err);
      throw new UnauthorizedException('Invalid session token');
    }
  }
}
