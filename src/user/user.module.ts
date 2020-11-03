import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from  './interface/user.interface';
import { UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports :[
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers:[UserController],
  providers:[UserService],   
  exports:[ UserService] 
})
export class UserModule {

    constructor(private userService: UserService) {}
}
