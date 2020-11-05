import { Document } from 'mongoose';

export interface Cart extends Document {
    readonly userId: string;
    readonly productId: string;
    readonly quantity: string;
}