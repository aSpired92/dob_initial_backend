import express from "express";
import {
    createProductEndpoint,
    deleteProductEndpoint,
    getAllProductsEndpoint,
    getProductByIdEndpoint,
    getProductCategoriesEndpoint,
    updateProductEndpoint
} from "../controllers/product";

export default (router: express.Router) => {
    router.get('/products/categories', getProductCategoriesEndpoint);
    router.post('/products', createProductEndpoint);
    router.get('/products/:id', getProductByIdEndpoint);
    router.put('/products/:id', updateProductEndpoint);
    router.delete('/products/:id', deleteProductEndpoint);
    router.get('/products', getAllProductsEndpoint);
}