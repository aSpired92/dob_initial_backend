import {OrderModel} from "./orders";
import mongoose from "mongoose";


export interface Filters {
    client: string | any,
    dateFrom: string | any,
    dateTo: string | any
}

interface LooseObject {
    [key: string]: any
}


export const generateReportData = async (filters?: Filters) => {

    let match: LooseObject = {}

    let createdAt: LooseObject = {}

    console.log(filters)

    if (filters.client !== 'null') {
        match.client = new mongoose.Types.ObjectId(filters.client)
    }

    if (filters.dateFrom !== 'null') {
        createdAt.$gte = new Date(filters.dateFrom)
    }

    if (filters.dateTo !== 'null') {
        createdAt.$lte = new Date(filters.dateTo)
    }

    if (filters.dateFrom !== 'null' || filters.dateTo !== 'null') {
        match.createdAt = createdAt
    }


    console.log(match)

    const categories = await OrderModel.aggregate([
        {
            $match: match
        },
        {
            $unwind: "$elements"
        },
        {
            $lookup: {
                from: "products",
                localField: "elements.product",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        },
        {
            $group: {
                _id: "$product.category.name",
                totalQuantity: {$sum: "$elements.quantity"}
            }
        }
    ])


    const names = await OrderModel.aggregate([
        {
            $match: match
        },
        {
            $unwind: "$elements"
        },
        {
            $lookup: {
                from: "products",
                localField: "elements.product",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        },
        {
            $group: {
                _id: "$product.name",
                totalQuantity: {$sum: "$elements.quantity"}
            }
        },

    ])
    const total = await OrderModel.aggregate([
        {
            $match: match
        },
        {
            $unwind: "$elements"
        },
        {
            $lookup: {
                from: "products",
                localField: "elements.product",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        },
        {
            $group: {
                _id: null,
                totalQuantity: {$sum: "$elements.quantity"},
                totalValue: {$sum: {$multiply: ["$elements.quantity", "$product.price"]}}
            }
        }
    ]);
    const table = await OrderModel.aggregate([
        {
            $match: match
        },
        {
            $unwind: "$elements"
        },
        {
            $lookup: {
                from: "clients",
                localField: "client",
                foreignField: "_id",
                as: "client"
            }
        },
        {
            $unwind: "$client"
        },
        {
            $lookup: {
                from: "products",
                localField: "elements.product",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind: "$product"
        },
        {
            $group: {
                _id: {
                    clientName: "$client.name",
                    productName: "$product.name"
                },
                totalQuantity: {$sum: "$elements.quantity"},
                unitPrice: {$first: "$product.price"},
                totalValue: {$sum: {$multiply: ["$elements.quantity", "$product.price"]}}
            }
        },
        {
            $project: {
                clientName: "$_id.clientName",
                productName: "$_id.productName",
                totalQuantity: 1,
                unitPrice: {$toString: "$unitPrice"},
                totalValue: {$toString: "$totalValue"}
            }
        },
        {
            $group: {
                _id: "$clientName",
                data: {
                    $push: {
                        name: "$productName",
                        quantity: "$totalQuantity",
                        price: "$unitPrice",
                        total: "$totalValue"
                    }
                },
                totalSold: {$sum: "$totalQuantity"},
                totalPrice: {$sum: {$toDouble: "$totalValue"}}
            }
        },
        {
            $project: {
                _id: 0,
                clientName: "$_id",
                data: 1,
                totalItemsSold: 1,
                totalPrice: {$toString: "$totalPrice"}
            }
        }
    ]);

    return {
        categories: categories,
        names: names,
        total: total,
        table: table
    }
}