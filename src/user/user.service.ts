import { Injectable } from '@nestjs/common';
import {  CreateUserDTO  } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from  './interface/user.interface';
import { LoginUserDTO } from './dto/login-user.dto';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){

    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser =  new this.userModel(createUserDTO);
        return await newUser.save();
    }

    async findUserByEmail(email: string): Promise<any>{

        return await this.userModel.find({ email: email }).exec();
    }

    async existUser(loginUserDto: LoginUserDTO): Promise<any> {
        return await this.userModel.find({
            email: loginUserDto.email,
        }).exec();
    }

    async getList(): Promise<any> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async findUserById( userId: string): Promise<User> {
        return await this.userModel.find({ _id: mongoose.Types.ObjectId(userId) }).exec();
    }
}
