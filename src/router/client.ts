import express from "express";
import {
    createClientEndpoint,
    deleteClientEndpoint,
    getAllClientsEndpoint,
    getClientByIdEndpoint,
    getClientCategoriesEndpoint,
    updateClientEndpoint
} from "../controllers/client";
import {getProductCategoriesEndpoint} from "../controllers/product";

export default (router: express.Router) => {
    router.get('/products/categories', getClientCategoriesEndpoint);
    router.post('/clients', createClientEndpoint);
    router.get('/clients/:id', getClientByIdEndpoint);
    router.put('/clients/:id', updateClientEndpoint);
    router.delete('/clients/:id', deleteClientEndpoint);
    router.get('/clients', getAllClientsEndpoint);
}