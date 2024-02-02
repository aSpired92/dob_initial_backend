import express from "express";
import client from "./client";
import product from "./product";

const router = express.Router()

export default (): express.Router => {
    client(router)
    product(router)
    return router
}