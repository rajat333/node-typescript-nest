import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginUserDTO } from './user/dto/login-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Res() res,  @Body() loginDto: LoginUserDTO) {
    const user = await this.authService.login(loginDto);
    if ( ! user) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'You are not authorised',
      });
    }
    return res.status(HttpStatus.ACCEPTED).json({
      ...user
    })
  }
}
