import { User } from "./User";

export interface ProductCategory {
    id: number;
    name: string;
    description: string;
    user_created: User;
}