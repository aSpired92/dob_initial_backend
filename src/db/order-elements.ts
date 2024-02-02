import mongoose from "mongoose";

const OrderElementSchema = new mongoose.Schema({
    product: {
        "type": mongoose.Types.ObjectId,
        "ref": "product"
    },
    quantity: {
        "type": Number,
    },
})

export const OrderElementModel = mongoose.model('order_element', OrderElementSchema)