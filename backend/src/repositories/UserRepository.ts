import { AppDataSource } from '../data-source';
import { User } from "../models/User";

export const UserRepository = AppDataSource.manager.getRepository(User);


