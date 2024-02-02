import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: {
        "type": String
    },
    category: {
        "type": String,
        "enum": ["Instytucja państwowa", "Firma prywatna", "Osoba fizyczna"]
    },
    city: {
        "type": String,
    },
    street: {
        "type": String,
    },
    number: {
        "type": String,
    },
    postCode: {
        "type": String
    }
})

export const ClientModel = mongoose.model('client', ClientSchema)