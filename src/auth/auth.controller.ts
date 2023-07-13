import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signIn')
  signIn() {
    return this.authService.signIn();
  }

  @Post('/singUp')
  signUp() {
    return this.authService.signUp();
  }
}
