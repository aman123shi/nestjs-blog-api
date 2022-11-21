import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/user/dto/create_user.dto';
import { UserEntity } from '@app/user/user.entity';
import { UserResponseInterface } from '@app/user/types/user.interface';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body('user') user: CreateUserDto,
  ): Promise<UserResponseInterface> {
    let userEntity: UserEntity = await this.userService.createUser(user);
    return this.userService.buildUserResponse(userEntity);
  }
}
