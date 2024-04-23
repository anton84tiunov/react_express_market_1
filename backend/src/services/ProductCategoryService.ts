import { ProductCategoryRepository } from "../repositories/ProductCategoryRepository";
import { ProductCategory } from "../models/ProductCategory";

export class ProductCategoryService {

    createProductCategory = async (productCategoryData: ProductCategory): Promise<ProductCategory> => {
        return await ProductCategoryRepository.save(productCategoryData);
    }

    getAllProductCategories = async (): Promise<ProductCategory[]> => {
        return await ProductCategoryRepository.find();
    }
}
