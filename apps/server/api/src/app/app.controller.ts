import { AuthorizationGuard } from '@clieko-workspace/authorization';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthorizationGuard)
  @Get()
  getFirstUser() {
    return this.appService.getFirstUser();
  }
}
