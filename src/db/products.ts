import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        "enum": ["Pizza", "Burger", "Napój gazowany", "Napój niegazowany"],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const ProductModel = mongoose.model('product', ProductSchema)


export const createProduct = (productData: Record<string, any>) => ProductModel.create(productData);
export const getProductById = (productId: string) => ProductModel.findById(productId);
export const updateProduct = (productId: string, updatedData: Record<string, any>) => ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });
export const deleteProduct = (productId: string) => ProductModel.findByIdAndDelete(productId);
export const getAllProducts = () => ProductModel.find({});