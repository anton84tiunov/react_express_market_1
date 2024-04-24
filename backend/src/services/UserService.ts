import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService {

    async createUser(userData: User): Promise<User> {
        return await UserRepository.save(userData);
    }

    async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }

    
    async checkCredentials(email: string, password: string): Promise<string> {
        // Находим пользователя по email
        const user = await UserRepository.findOne({ where: { email } });
        if (!user) {
            // Если пользователь не найден, возвращаем "Пользователь не существует"
            return "Пользователь не существует";
        }
        // Проверяем соответствие пароля
        const isPasswordMatch = user.password === password;
        if (!isPasswordMatch) {
            // Если пароль не совпадает, возвращаем "Неверный пароль"
            return "Неверный пароль";
        }
        // Если пользователь найден и пароль совпадает, возвращаем "Успешная авторизация"
        return "Успешная авторизация";
    }

    // Остальные методы...

}
