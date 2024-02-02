import express from "express";
import {
    createProductEndpoint,
    deleteProductEndpoint,
    getAllProductsEndpoint,
    getProductByIdEndpoint,
    updateProductEndpoint
} from "../controllers/product";

export default (router: express.Router) => {
    router.post('/products', createProductEndpoint);
    router.get('/products/:id', getProductByIdEndpoint);
    router.put('/products/:id', updateProductEndpoint);
    router.delete('/products/:id', deleteProductEndpoint);
    router.get('/products', getAllProductsEndpoint);
}