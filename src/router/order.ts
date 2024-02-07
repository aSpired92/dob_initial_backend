import express from "express";
import {
    createOrderEndpoint,
    deleteOrderEndpoint,
    getAllOrdersEndpoint,
    getOrderByIdEndpoint,
    updateOrderEndpoint
} from "../controllers/order";

export default (router: express.Router) => {
    router.get('/orders/:id', getOrderByIdEndpoint);
    router.put('/orders/:id', updateOrderEndpoint);
    router.delete('/orders/:id', deleteOrderEndpoint);
    router.post('/orders', createOrderEndpoint);
    router.get('/orders', getAllOrdersEndpoint);
}