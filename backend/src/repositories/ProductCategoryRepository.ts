import { AppDataSource } from '../data-source';
import { ProductCategory } from "../models/ProductCategory";
    
export const ProductCategoryRepository = AppDataSource.manager.getRepository(ProductCategory);

