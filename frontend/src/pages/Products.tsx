import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

const Products: React.FC = () => {

    const [products_cat, setProduct_cat] = useState<ProductCategory[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.post('http://localhost:5000/product/get_all')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch products:', error);
            });
            axios.post('http://localhost:5000/product_cat/get_all')
            .then(response => {
                console.log(response.data);
                setProduct_cat(response.data);
            })
    }, []);
    
    return (
        <div>
            <h1>Products Page</h1>
            <ul>
            {products.map(product => (
                <li key={product.id}>name : {product.name}, description : {product.description}, category:  {product.category.id}</li>
            ))}
        </ul>
        <ul>
            {products_cat.map(product_cat => (
                <li key={product_cat.id}>name : {product_cat.name}, description : {product_cat.description}</li>
            ))}
        </ul>
        </div>
    );
};

export default Products;


