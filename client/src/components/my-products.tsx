import React, { useEffect, useState } from "react";
import { IProduct } from "../@types/product";
import { fetchProducts } from "../services/product";
import { Product } from "./product";
import { EditProduct } from "./edit-product";

export const MyProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    const handleFetchProducts = async () => {
        const products = await fetchProducts();
        setProducts(products);
        setLoading(false);
    };

    const refreshProducts = () => {
        handleFetchProducts();
        setSelectedProduct(null);
    };

    const handleOnEdit = (product: IProduct) => {
        setSelectedProduct(product);
    };

    useEffect(() => {
        handleFetchProducts();
    }, []);

    return (
        <div className="catalog">
            <div className="columns">
                <div className="column is-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="products">
                            {products.length === 0 && <p>No products found</p>}
                            {products.map((product, idx) => (
                                <div className="mb-4" key={idx}>
                                    <Product product={product} onEdit={handleOnEdit} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="column is-6">
                    {selectedProduct && (
                        <EditProduct product={selectedProduct} refreshProducts={refreshProducts} />
                    )}
                </div>
            </div>
        </div>
    );
};
