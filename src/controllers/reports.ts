import { Request, Response } from 'express';
import {
    Filters,
    generateReportData,
} from "../db/reports";

export const generateReportDataEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const filters: Filters = {
            client: req.query.client,
            dateFrom: req.query.dateFrom,
            dateTo: req.query.dateTo
        }
        res.status(200).json(await generateReportData(filters));
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}

