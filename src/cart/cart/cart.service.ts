import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { Cart } from './interface/cart.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateCartDTO } from './dto/cart.dto';

@Injectable()
export class CartService {

    constructor(
        @InjectModel('Cart') private readonly cartModel: Model<Cart>,
        private userService: UserService,
    ){}

    async getUserCart(userId: string){
        return this.cartModel.find({ userId: mongoose.Types.ObjectId(userId)});
    }

    async addProductToCart(createCartDto: CreateCartDTO){
        console.log('cart service ');
        const productExist = await this.cartModel.find({ productId: mongoose.Types.ObjectId(createCartDto.productId) }).exec();
        if ( productExist ){ 
            return {
                error: true,
            }
        }
        const userCart = new this.cartModel(createCartDto);
        const cartItem =  await userCart.save();
        return { 
            error: false,
            cartItem,
        } 
    }
}
