import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
    userId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    productId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    quantity: Number,
    created_at: { type: Date, default: Date.now }
});