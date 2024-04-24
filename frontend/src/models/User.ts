import { Product } from "./Product";
import { ProductCategory } from "./ProductCategory";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    product_cat: ProductCategory[];
    product: Product[];
}