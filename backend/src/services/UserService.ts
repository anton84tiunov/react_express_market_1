import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService {

    async createUser(userData: User): Promise<User> {
        return await UserRepository.save(userData);
    }

    async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }
}
