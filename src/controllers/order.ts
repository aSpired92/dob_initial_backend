import { Request, Response } from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../db/orders";

// Create a new order
export const createOrderEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderData = req.body.order;
        const elements = req.body.elements;
        const createdOrder = await createOrder(orderData, elements);
        res.status(201).json(createdOrder);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get an order by ID
export const getOrderByIdEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderId = req.params.id;
        const order = await getOrderById(orderId);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an order
export const updateOrderEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderId = req.params.id;
        const updatedData = req.body;
        const updatedOrder = await updateOrder(orderId, updatedData);
        if (!updatedOrder) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an order
export const deleteOrderEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await deleteOrder(orderId);
        if (!deletedOrder) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }
        res.status(200).json(deletedOrder);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all orders
export const getAllOrdersEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};
