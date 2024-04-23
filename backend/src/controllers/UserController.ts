import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { User } from "../models/User";

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const newUser = await userService.createUser(req.body as User);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Ошибка при создании пользователя:', error);
        res.status(500).json({ error: 'Ошибка при создании пользователя' });
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
        res.status(500).json({ error: 'Ошибка при получении пользователей' });
    }
};


