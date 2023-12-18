import { Schema, model } from "mongoose";

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        unique: true},
        price: { type: Number, required: [true, "Price is required"] },
        image: { type: String, required: [true, "image is required"] },
        description: {type: Boolean, required: [false, "Description is required"] },
        stock: { type: Number, required: [true, "Stock from is required"] }
    },

    
)

const ProductModel = model('Product', ProductSchema);

export default ProductModel;