import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
@Injectable()
export class ProductService {

    constructor(){}

    async listAllProducts(): Promise<CreateProductDTO[]> {
        return [];
    }


}
