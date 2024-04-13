import React, { useEffect, useState } from "react";
import { IProduct } from "../@types/product";
import { fetchProducts } from "../services/product";
import { Product } from "./product";

export const MyProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    const handleFetchProducts = async () => {
        const products = await fetchProducts();
        setProducts(products);
        setLoading(false);
    };

    useEffect(() => {
        handleFetchProducts();
    }, []);

    return (
        <div className="catalog">
            <div className="columns is-centered">
                <div className="column is-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="products">
                            {products.map((product, idx) => (
                                <div className="mb-4">
                                    <Product key={idx} product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
