import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '../Dtos/registerDto';
import { UserService } from 'src/user/user.service';

@Controller()
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }
}
