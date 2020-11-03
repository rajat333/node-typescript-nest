import { Controller, UseGuards, Req } from '@nestjs/common';
import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ProductService } from  './product.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDTO } from './dto/create-product.dto';


@Controller('product')
export class ProductController {

    constructor( private productService: ProductService){}

    @Get('list')
    @UseGuards(AuthGuard())
    async getProductList( @Body() createProductDto: CreateProductDTO, @Req() req: any){
        console.log('>>>>>>>>>>>>user ', req.user);
        return this.productService.uploadProduct(createProductDto);
        // return req.user
    }
}
