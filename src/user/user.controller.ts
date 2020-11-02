import { Controller, Req } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
// import { AuthService } from '../auth/auth.service';
import { LoginUserDTO } from './dto/login-user.dto';

@Controller('user')
export class UserController {
    
    constructor( private userService: UserService){}

    @Post('/create')
    async addCustomer(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        // email check if user exist
        const userExist = await this.userService.findUserByEmail(createUserDTO.email);
        if ( userExist ) {
            return res.status(HttpStatus.CONFLICT).json({
                message: `User already exist with email - ${ createUserDTO.email}`,
                error: true,
            });
        }
        const customer = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: "User has been created successfully",
            ...customer
        })
    }

    @Get('/list')
    async getList() {
        return  this.userService.getList();
    }
}
