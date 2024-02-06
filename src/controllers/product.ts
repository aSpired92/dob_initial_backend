import { Request, Response } from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductCategories,
    updateProduct
} from "../db/products";

// Create a new product
export const createProductEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const productData = req.body;
        const createdProduct = await createProduct(productData);
        res.status(201).json(createdProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a product by ID
export const getProductByIdEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const product = await getProductById(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a product
export const updateProductEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;
        const updatedProduct = await updateProduct(productId, updatedData);
        if (!updatedProduct) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a product
export const deleteProductEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = req.params.id;
        const deletedProduct = await deleteProduct(productId);
        if (!deletedProduct) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all products
export const getAllProductsEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getProductCategoriesEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(getProductCategories());
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}