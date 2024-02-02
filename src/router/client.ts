import express from "express";
import {
    createClientEndpoint,
    deleteClientEndpoint,
    getAllClientsEndpoint,
    getClientByIdEndpoint,
    updateClientEndpoint
} from "../controllers/client";

export default (router: express.Router) => {
    router.post('/clients', createClientEndpoint);
    router.get('/clients/:id', getClientByIdEndpoint);
    router.put('/clients/:id', updateClientEndpoint);
    router.delete('/clients/:id', deleteClientEndpoint);
    router.get('/clients', getAllClientsEndpoint);
}