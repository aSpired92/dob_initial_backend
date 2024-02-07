import express from "express";
import {
    createClientEndpoint,
    deleteClientEndpoint,
    getAllClientsEndpoint,
    getClientByIdEndpoint,
    getClientCategoriesEndpoint,
    updateClientEndpoint
} from "../controllers/client";

export default (router: express.Router) => {
    router.get('/clients/categories', getClientCategoriesEndpoint);
    router.get('/clients/:id', getClientByIdEndpoint);
    router.put('/clients/:id', updateClientEndpoint);
    router.delete('/clients/:id', deleteClientEndpoint);
    router.post('/clients', createClientEndpoint);
    router.get('/clients', getAllClientsEndpoint);
}