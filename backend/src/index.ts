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

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*'); // Замените * на домен вашего приложения React в продакшн среде
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
          });
          
        // Использование маршрутов
        app.use("/user", UserRoutes);
        app.use("/product", ProductRoutes);
        app.use("/product_cat", ProductCategoryRoutes);

        const port = 5000;
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    } catch (error) {
        console.error('Ошибка инициализации источника данных:', error);
    }
}

startServer(); // Запускаем сервер