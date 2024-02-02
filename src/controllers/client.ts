import { Request, Response } from 'express';
import { createClient, deleteClient, getAllClients, getClientById, updateClient } from "../db/clients";

// Create a new client
export const createClientEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const clientData = req.body;
        const createdClient = await createClient(clientData);
        res.status(201).json(createdClient);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a client by ID
export const getClientByIdEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const clientId = req.params.id;
        const client = await getClientById(clientId);
        if (!client) {
            res.status(404).json({ error: 'Client not found' });
            return;
        }
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a client
export const updateClientEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const clientId = req.params.id;
        const updatedData = req.body;
        const updatedClient = await updateClient(clientId, updatedData);
        if (!updatedClient) {
            res.status(404).json({ error: 'Client not found' });
            return;
        }
        res.status(200).json(updatedClient);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a client
export const deleteClientEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const clientId = req.params.id;
        const deletedClient = await deleteClient(clientId);
        if (!deletedClient) {
            res.status(404).json({ error: 'Client not found' });
            return;
        }
        res.status(200).json(deletedClient);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all clients
export const getAllClientsEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const clients = await getAllClients();
        res.status(200).json(clients);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};
