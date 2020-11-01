import { Controller } from '@nestjs/common';
import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ProductService } from  './product.service';

@Controller('product')
export class ProductController {

    constructor( private productService: ProductService){}

    @Get('list')
    async getProductList(){
        return this.getProductList();    
    }
}
