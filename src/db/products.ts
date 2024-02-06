import mongoose from "mongoose";

const ProductCategories: ProductCategory[] = [
    {
        name: 'Pizza',
        id: 1,
    },
    {
        name: 'Burger',
        id: 2,
    },
    {
        name: 'Napój gazowany',
        id: 3,
    },
    {
        name: 'Napój niegazowany',
        id: 4,
    },
]

interface ProductCategory {
    name: string,
    id: number
}


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Object,
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

export const getProductCategories = () => {
    return ProductCategories
};