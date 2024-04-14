import React, { FC, useState } from "react";
import { IProduct } from "../@types/product";
import { updateProduct } from "../services/product";
import { Upload } from "./upload";

export type Props = {
    product: IProduct;
    refreshProducts: () => void;
};

export const EditProduct: FC<Props> = ({ product, refreshProducts }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [image, setImage] = useState(product.image);

    const handleUpdateProduct = async () => {
        await updateProduct({
            ...product,
            name,
            description,
            price,
            category,
            image
        });
        refreshProducts();
    };

    return (
        <div>
            <h1 className="title">Edit Product</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateProduct();
                }}
            >
                <div className="field mt-2">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Name"
                            defaultValue={product.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field mt-2">
                    <label className="label">Category</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Category"
                            defaultValue={product.category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field mt-2">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            placeholder="Description"
                            defaultValue={product.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field mt-2">
                    <label className="label">Price</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Price"
                            defaultValue={product.price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className="field mt-2">
                    <Upload image={image} setImage={setImage} />
                </div>
                <div className="field mt-2">
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
