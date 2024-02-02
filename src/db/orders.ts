import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
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

export const OrderModel = mongoose.model('product', OrderSchema)