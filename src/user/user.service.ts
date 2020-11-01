import { Injectable } from '@nestjs/common';
import {  CreateUserDTO  } from './dto/create-user.dto';
@Injectable()
export class UserService {

    constructor(){}

    async createUser(createUserDTO: CreateUserDTO): Promise<any> {
        // const newUserr = await this.customerModel(createCustomerDTO);
        // return newCustomer.save();
    }
}
