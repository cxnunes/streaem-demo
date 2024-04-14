import axios from "axios";
import { IProductCatalogItem } from "../@types/product";
import { BACKEND_URL } from "./constants";

export const fetchProductCatalog = async () => {
    const response = await axios.get<IProductCatalogItem[]>(`${BACKEND_URL}/api/product-catalog`);
    return response.data;
};
