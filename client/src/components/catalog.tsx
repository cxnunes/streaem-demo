import React, { useEffect, useState } from "react";
import { IProductCatalogItem } from "../@types/product";
import { fetchProductCatalog } from "../services/product-catalog";
import { ProductCatalogItem } from "./product-catalog-item";

export const Catalog = () => {
    const [products, setProducts] = useState<IProductCatalogItem[]>([]);
    const [loading, setLoading] = useState(true);

    const handleFetchProductCatalog = async () => {
        const products = await fetchProductCatalog();
        setProducts(products);
        setLoading(false);
    };

    useEffect(() => {
        handleFetchProductCatalog();
    }, []);

    return (
        <div className="catalog">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="products">
                    <div className="columns is-multiline">
                        {products.map((product, idx) => (
                            <div className="column is-3">
                                <div className="mb-4">
                                    <ProductCatalogItem key={idx} product={product} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
