import { Request, Response } from "express";
import { ProductCategoryService } from "../services/ProductCategoryService";
import { ProductCategory } from "../models/ProductCategory";

const productCategoryService = new ProductCategoryService();

export const createProductCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const newProductCategoryData: ProductCategory = req.body;
        // Установка user_id из запроса
        newProductCategoryData.user_created = req.body.user_id;
        const newProductCategory = await productCategoryService.createProductCategory(newProductCategoryData);
        res.status(201).json(newProductCategory);
    } catch (error) {
        console.error('Ошибка при создании категории продукта:', error);
        res.status(500).json({ error: 'Ошибка при создании категории продукта' });
    }
}

export const  getAllProductCategories =  async (req: Request, res: Response): Promise<void> => {
    try {
        const productCategories = await productCategoryService.getAllProductCategories();
        console.log(productCategories);
        res.json(productCategories);
    } catch (error) {
        console.error('Ошибка при получении категорий продуктов:', error);
        res.status(500).json({ error: 'Ошибка при получении категорий продуктов' });
    }
}

