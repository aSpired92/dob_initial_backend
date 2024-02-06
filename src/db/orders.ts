import mongoose, {ClientSession} from "mongoose";
import assert from "assert";
import {OrderElementModel} from "./order-elements";

const OrderSchema = new mongoose.Schema({
    number: {
      type: String
    },
    client: {
        type: mongoose.Types.ObjectId,
        ref: "client"
    }
})

export const OrderModel = mongoose.model('order', OrderSchema)


export const createOrder = async (orderData: Record<string, any>, elements: Array<Record<string, any>>) => {
    const session = await mongoose.startSession();

    await session.withTransaction(async () => {

        const order = new OrderModel(orderData);
        await order.save({ session });

        elements.forEach(elementData => {
            elementData.order = order._id
            let element = new OrderElementModel(elementData)
            element.save({ session });
        })
    });

    await session.endSession();

};
export const getOrderById = (orderId: string) => OrderModel.findById(orderId);
export const updateOrder = (orderId: string, updatedData: Record<string, any>) => OrderModel.findByIdAndUpdate(orderId, updatedData, { new: true });
export const deleteOrder = (orderId: string) => OrderModel.findByIdAndDelete(orderId);
export const getAllOrders = () => OrderModel.find({});