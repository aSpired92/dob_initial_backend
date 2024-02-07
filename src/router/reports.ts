import express from "express";
import {
    generateReportDataEndpoint
} from "../controllers/reports";


export default (router: express.Router) => {
    router.get('/reports', generateReportDataEndpoint);
}