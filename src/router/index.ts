import express from "express";
import client from "./client";
import product from "./product";
import order from "./order";

const router = express.Router()

export default (): express.Router => {
    client(router)
    product(router)
    order(router)
    return router
}