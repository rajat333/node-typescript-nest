
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    make: Number,
    updated: Date,
    created_at: { type: Date, default: Date.now }
});