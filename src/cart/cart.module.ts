import { Module } from '@nestjs/common';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '../../node_modules/@nestjs/mongoose';
import { CartSchema } from './cart/schema/cart.schema';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
