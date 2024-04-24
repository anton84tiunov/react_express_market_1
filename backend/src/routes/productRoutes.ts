import express from 'express';
import { createProduct, getAllProducts} from '../controllers/ProductController'

const router = express.Router();

// Маршрут для создания нового продукта
router.post('/create', createProduct);

// Маршрут для получения всех продуктов
router.post('/get_all', getAllProducts);

export default router;
