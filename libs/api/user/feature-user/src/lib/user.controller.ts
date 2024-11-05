import { UserService } from '@api/user/data-access';
import { CreateUserDto } from '@api/user/interface-user';
import { CreateUserGuard } from '@api/user/utils-user';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(CreateUserGuard)
  @Post()
  createUser(
    @Req()
    request: Request & { body: { user: CreateUserDto } }
  ) {
    return this.userService.createUser(request.body.user);
  }
}
