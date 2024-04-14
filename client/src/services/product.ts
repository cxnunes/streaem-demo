import axios from "axios";
import { IProduct, IProductCatalogItem } from "../@types/product";
import { BACKEND_URL } from "./constants";

export const postProduct = async (product: IProductCatalogItem) => {
    const response = await axios.post<IProduct>(`${BACKEND_URL}/api/product`, product);
    return response.data;
};

export const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>(`${BACKEND_URL}/api/product`);
    return response.data;
};

export const updateProduct = async (product: IProduct) => {
    const response = await axios.put<IProduct>(`${BACKEND_URL}/api/product/${product.id}`, product);
    return response.data;
};
