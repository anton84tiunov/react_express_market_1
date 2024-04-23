import express from 'express';
import { createUser, getAllUsers } from '../controllers/UserController';

const router = express.Router();


// Маршрут для создания нового пользователя
router.post('/users', createUser);

// Маршрут для получения всех пользователей
    router.get('/users', getAllUsers);


export default router;

















// import express from 'express';
// import { AppDataSource } from '../data-source';
// import { User } from '../models/User';

// const router = express.Router();

// // Маршрут для создания нового пользователя
// router.post('/users', async (req, res) => {
//     try {
//         const newUser = new User();
//         newUser.firstName = req.body.firstName;
//         newUser.lastName = req.body.lastName;
//         newUser.age = req.body.age;
//         newUser.email = req.body.email;
//         newUser.password = req.body.password;

//         await AppDataSource.manager.save(newUser);
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error('Ошибка при создании пользователя:', error);
//         res.status(500).json({ error: 'Ошибка при создании пользователя' });
//     }
// });

// // Маршрут для получения всех пользователей
// router.get('/users', async (req, res) => {
//     try {
//         const users = await AppDataSource.manager.find(User);
//         res.json(users);
//     } catch (error) {
//         console.error('Ошибка при получении пользователей:', error);
//         res.status(500).json({ error: 'Ошибка при получении пользователей' });
//     }
// });

// export default router;