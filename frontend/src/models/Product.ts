import { ProductCategory } from "./ProductCategory";
import { User } from "./User";

export interface Product {
    id: number;
    name: string;
    category: ProductCategory;
    user_created: User;
    price: number;
    description: string;
    created_at: Date;
}