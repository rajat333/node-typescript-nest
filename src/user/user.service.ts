import { Injectable } from '@nestjs/common';
import {  CreateUserDTO  } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from  './interface/user.interface';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){

    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }

    async getList(): Promise<any> {
        const users = await this.userModel.find().exec();
        return users;
    }
}
