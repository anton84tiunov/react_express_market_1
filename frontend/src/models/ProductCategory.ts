import { Product } from "./Product";
import { User } from "./User";

export interface ProductCategory {
    id: number;
    name: string;
    description: string;
    userr_created: User;
    product: Product[];
}