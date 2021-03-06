import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
  
    MongooseModule.forRoot('mongodb://localhost/userapp', { useNewUrlParser: true }),
  
    ProductModule,
  
    CartModule,
  
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
