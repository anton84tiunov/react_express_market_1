import express from 'express';
import { createProduct, getAllProducts} from '../controllers/ProductController'

const router = express.Router();

// Маршрут для создания нового продукта
router.post('/products', createProduct);

// Маршрут для получения всех продуктов
router.get('/products', getAllProducts);

export default router;
