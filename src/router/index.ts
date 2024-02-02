import express from "express";
import client from "./client";

const router = express.Router()

export default (): express.Router => {
    client(router)
    return router
}