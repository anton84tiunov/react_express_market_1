import express from 'express';
import { createProductCategory, getAllProductCategories } from '../controllers/ProductCategoryController';

const router = express.Router();

// Маршрут для создания новой категории продукта
router.post('/create', createProductCategory);

// Маршрут для получения всех категорий продуктов
router.post('/get_all', getAllProductCategories);

export default router;

