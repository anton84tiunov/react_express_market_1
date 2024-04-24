import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";
import { Product } from "../models/Product";

const productService = new ProductService();

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const newProductData: Product = req.body;
        // Установка user_id и category_id из запроса
        newProductData.user_created = req.body.user_id;
        newProductData.category = req.body.category_id;
        const newProduct = await productService.createProduct(newProductData);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Ошибка при создании продукта:', error);
        res.status(500).json({ error: 'Ошибка при создании продукта' });
    }
}

export const  getAllProducts =  async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await productService.getAllProducts();
        console.log(products);
        res.json(products);
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({ error: 'Ошибка при получении продуктов' });
    }
    

}


















