import axios from "axios";
import { IProduct, IProductCatalogItem } from "../@types/product";

export const postProduct = async (product: IProductCatalogItem) => {
    const response = await axios.post<IProduct>("http://localhost:3001/api/product", product);
    return response.data;
};

export const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>("http://localhost:3001/api/product");
    return response.data;
};
