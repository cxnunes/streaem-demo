import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../@types/product";
import { updateProduct } from "../services/product";
import { Upload } from "./upload";

export type Props = {
    product: IProduct;
    refreshProducts: () => void;
};

export const EditProduct: FC<Props> = ({ product, refreshProducts }) => {
    const [name, setName] = useState<string | null>(product.name);
    const [description, setDescription] = useState<string | null>(product.description);
    const [price, setPrice] = useState<number | null>(product.price);
    const [category, setCategory] = useState<string | null>(product.category);
    const [image, setImage] = useState<string | null>(product.image);

    useEffect(() => {
        setName(null);
        setDescription(null);
        setPrice(null);
        setCategory(null);
        setImage(null);
    }, []);

    useEffect(() => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setImage(product.image);
    }, [product]);

    const [errors, setErrors] = useState<string[]>([]);

    const validateName = (name: string) => name.length > 0;

    const validateCategory = (category: string) =>
        ["Electronics", "Clothing", "Books"].includes(category);

    const validateDescription = (description: string) =>
        description.length > 0 && description.length < 1000;

    const onChangeName = (name: string) => {
        if (!validateName(name)) {
            setErrors((prev) => [...prev, "Name is required"]);
            return;
        }
        setName(name);
    };

    const onChangeCategory = (category: string) => {
        if (!validateCategory(category)) {
            setErrors((prev) => [...prev, "Invalid category"]);
            return;
        }
        setCategory(category);
    };

    const onChangeDescription = (description: string) => {
        if (!validateDescription(description)) {
            setErrors((prev) => [...prev, "Description must be between 1 and 1000 characters"]);
            return;
        }
        setDescription(description);
    };

    const onChangePrice = (price: number) => {
        setPrice(price);
        if (price < 0 || price > 500) {
            setErrors((prev) => [...prev, "Price must be greater than 0 and less than 500"]);
            return;
        }
    };

    const handleUpdateProduct = async () => {
        if (!name || !category || !description || !price || !image) {
            setErrors((prev) => [...prev, "All fields are required"]);
            return;
        }
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
                            onChange={(e) => onChangeName(e.target.value)}
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
                            onChange={(e) => onChangeCategory(e.target.value)}
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
                            onChange={(e) => onChangeDescription(e.target.value)}
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
                            onChange={(e) => onChangePrice(Number(e.target.value))}
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
                {errors.length > 0 && (
                    <div className="notification is-danger mt-2">
                        {errors.map((error, idx) => (
                            <p key={idx}>{error}</p>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};
