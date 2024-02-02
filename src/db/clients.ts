import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        "enum": ["Instytucja państwowa", "Firma prywatna", "Osoba fizyczna"],
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    }
})

const ClientModel = mongoose.model('client', ClientSchema)

export const createClient = (clientData: Record<string, any>) => ClientModel.create(clientData);
export const getClientById = (clientId: string) => ClientModel.findById(clientId);
export const updateClient = (clientId: string, updatedData: Record<string, any>) => ClientModel.findByIdAndUpdate(clientId, updatedData);
export const deleteClient = (clientId: string) => ClientModel.findByIdAndDelete(clientId);
export const getAllClients = () => ClientModel.find({});