import React from "react";
import { IProduct } from "../@types/product";
import { BACKEND_URL } from "../services/constants";

export const Product = ({
    product,
    onEdit
}: {
    product: IProduct;
    onEdit: (product: IProduct) => void;
}) => {
    return (
        <div className="card has-background-grey-dark">
            {product.image && (
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={`${BACKEND_URL}/${product.image}`} alt="Placeholder" />
                    </figure>
                </div>
            )}
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
                            <button className="button is-primary" onClick={() => onEdit(product)}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
