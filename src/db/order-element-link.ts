import mongoose from "mongoose";

const OrderElementLinkSchema = new mongoose.Schema({
    order: {type: mongoose.Types.ObjectId, ref: "order"},
    element: {type: mongoose.Types.ObjectId, ref: "order_element"}
})

export const ClientModel = mongoose.model('client', OrderElementLinkSchema)