import mongoose, {ClientSession} from "mongoose";

const OrderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Types.ObjectId,
        ref: "client"
    },
    elements: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
            required: true
        },
        quantity: {
            type: Number
        }
    }]
}, {timestamps: true})

export const OrderModel = mongoose.model('order', OrderSchema)


export const createOrder = async (client: Record<string, any>, elements: Array<Record<string, any>>) => {

    const order = new OrderModel({client: client, elements: elements})
    return order.save()
};
export const getOrderById = (orderId: string) => OrderModel.findById(orderId);
export const updateOrder = (orderId: string, updatedData: Record<string, any>) => OrderModel.findByIdAndUpdate(orderId, updatedData, {new: true});
export const deleteOrder = (orderId: string) => OrderModel.findByIdAndDelete(orderId);
export const getAllOrders = async () => {
    const orders = await OrderModel.find({}).populate('client').populate('elements.product')
    return orders
};