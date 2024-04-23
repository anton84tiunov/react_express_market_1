import express from 'express';
import { createProductCategory, getAllProductCategories } from '../controllers/ProductCategoryController';

const router = express.Router();

// Маршрут для создания новой категории продукта
router.post('/product_cat', createProductCategory);

// Маршрут для получения всех категорий продуктов
router.get('/product_cat', getAllProductCategories);

export default router;

