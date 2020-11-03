import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { ProductSchema } from './schema/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports:[
        UserModule,
        AuthModule,
       MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
],
controllers:[ProductController],
providers:[ProductService],   
exports:[ ProductService] 
})
export class ProductModule {


}
