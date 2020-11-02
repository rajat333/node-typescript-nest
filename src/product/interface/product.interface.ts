import { Document } from 'mongoose';

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly make: number;
}

