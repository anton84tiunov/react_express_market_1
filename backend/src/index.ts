import "reflect-metadata";
import express from 'express';
import { AppDataSource } from './data-source';
import UserRoutes from './routes/UserRoutes';
import ProductRoutes from './routes/productRoutes';
import ProductCategoryRoutes from './routes/productCategoryRoutes';
import { UserService } from './services/UserService'; // Импортируем UserService

async function startServer() {
    try {
        await AppDataSource.initialize(); // Инициализируем источник данных
        console.log('Источник данных успешно инициализирован');

        const app = express();
        app.use(express.json());
        console.log('app.use(express.json());');

        // Использование маршрутов
        app.use(UserRoutes);
        app.use(ProductRoutes);
        app.use(ProductCategoryRoutes);

        const port = 3000;
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    } catch (error) {
        console.error('Ошибка инициализации источника данных:', error);
    }
}

startServer(); // Запускаем сервер