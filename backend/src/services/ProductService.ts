import { ProductRepository } from "../repositories/ProductRepository";
import { Product } from "../models/Product";

export class ProductService {

    async createProduct(ProductData: Product): Promise<Product> {
        return await ProductRepository.save(ProductData);
    }

    async getAllProducts(): Promise<Product[]> {
        return await ProductRepository.find();
    }
}
