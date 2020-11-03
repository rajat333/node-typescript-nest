
import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findUserByEmail(email);
    if (user ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const existUser = await this.validateUser(user.email, user.password);
    if( ! existUser ) {
        return null;
    } else {
        const payload = { email:  existUser[0].email, userId: existUser[0]._id };
        return {
        access_token: this.jwtService.sign(payload),
        email: existUser[0].email,
        userId: existUser[0]._id,
        };
    }
  }
}