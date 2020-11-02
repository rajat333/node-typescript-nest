import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    constructor( private userService: UserService){}

    @Post('/create')
    async addCustomer(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const customer = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: "User has been created successfully",
            customer
        })
    }

    @Get('/list')
    async getList() {
        return  this.userService.getList();
    }
}
