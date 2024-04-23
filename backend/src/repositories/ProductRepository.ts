import { AppDataSource } from '../data-source';
import { Product } from '../models/Product';


export const ProductRepository = AppDataSource.manager.getRepository(Product);

