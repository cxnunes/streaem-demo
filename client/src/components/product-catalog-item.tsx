import React from "react";
import { IProductCatalogItem } from "../@types/product";
import { postProduct } from "../services/product";

export const ProductCatalogItem = ({ product }: { product: IProductCatalogItem }) => {
    const handleAddProduct = async () => {
        await postProduct(product);
    };

    return (
        <div className="card has-background-grey-dark">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{product.name}</p>
                        <p className="subtitle is-6 mt-2">{product.category}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{product.description}</p>
                    <div className="columns">
                        <div className="column is-6">
                            <p className="subtitle mt-2">{product.price} €</p>
                        </div>
                        <div className="column is-6">
                            <button className="button is-primary" onClick={handleAddProduct}>
                                Add to my products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
