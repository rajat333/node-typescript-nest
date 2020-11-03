import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from  './interface/product.interface';
@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ){}

    async listAllProducts(): Promise<CreateProductDTO[]> {
        return await this.productModel.find().exec();
    }

    async uploadProduct(createProduct: CreateProductDTO): Promise<CreateProductDTO> {
        const product  = new this.productModel(createProduct);
        return product.save();
    }

}
