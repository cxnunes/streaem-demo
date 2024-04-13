import axios from "axios";
import { IProductCatalogItem } from "../@types/product";

export const fetchProductCatalog = async () => {
    const response = await axios.get<IProductCatalogItem[]>(
        "http://localhost:3001/api/product-catalog"
    );
    return response.data;
};
