import mongoose from "mongoose";

const OrderElementSchema = new mongoose.Schema({
    product: {
        "type": mongoose.Types.ObjectId,
        "ref": "product"
    },
    quantity: {
        "type": Number,
    },
    order: {
        "type": mongoose.Types.ObjectId,
        "ref": "order"
    }
})

export const OrderElementModel = mongoose.model('order_element', OrderElementSchema)

export const createOrderElement = (orderElementData: Record<string, any>) => OrderElementModel.create(orderElementData);
export const getOrderElementById = (orderElementId: string) => OrderElementModel.findById(orderElementId);
export const updateOrderElement = (orderElementId: string, updatedData: Record<string, any>) => OrderElementModel.findByIdAndUpdate(orderElementId, updatedData, { new: true });
export const deleteOrderElement = (orderElementId: string) => OrderElementModel.findByIdAndDelete(orderElementId);
export const getAllOrderElements = () => OrderElementModel.find({});