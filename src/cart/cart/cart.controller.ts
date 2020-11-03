import { Controller, Get, Param, Res, HttpStatus, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/cart.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('cart')
export class CartController {
    constructor(
        private cartService: CartService,
        private userService: UserService,
    ){}

    @Post('/user')
    @UseGuards( AuthGuard('jwt'))
    async uploadProductToCart( @Req() req, @Body() createCartDto: CreateCartDTO, @Res() res){
        console.log('uploadProductToCart uploadProductToCart', req.user, createCartDto);
        const userCart = await this.cartService.addProductToCart(createCartDto);
        console.log('userCart userCart userCart', userCart);
        if ( userCart.error ){
            res.status(HttpStatus.CONFLICT).json({
                message:'Product Already exist in Cart',
            })
        }
        res.status(HttpStatus.OK).json(userCart.cartItem);
    }

    @Get('/user/:userId')
    @UseGuards( AuthGuard('jwt'))
    async getUserCart( @Param('userId') userId: string , @Res() res){
        const user = await this.userService.findUserById(userId);
        if( ! user ) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message:'User not found',
            })
        }
        const userCart = await this.cartService.getUserCart(userId);
        return res.status(HttpStatus.OK).json({
            cart: userCart,
        });
    }
}
