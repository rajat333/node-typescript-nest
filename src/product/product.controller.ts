import { Controller, UseGuards, Req } from '@nestjs/common';
import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ProductService } from  './product.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDTO } from './dto/create-product.dto';


@Controller('product')
export class ProductController {

    constructor( private productService: ProductService){}

    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    async uploadProduct( @Body() createProductDto: CreateProductDTO, @Req() req: any){
        return this.productService.uploadProduct(createProductDto);
    }

    @Get('/list')
    @UseGuards(AuthGuard('jwt'))
    async getProductList(@Res() res) {
       const list =  await this.productService.listAllProducts()
       res.status(HttpStatus.OK).json(list)
    }
}
