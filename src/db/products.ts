import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
      "type": String
    },
    category: {
        "type": String,
        "enum": ["Pizza", "Burger", "Napój gazowany", "Napój niegazowany"]
    },
    price: {
        "type": Number
    }
})

export const ProductModel = mongoose.model('product', ProductSchema)