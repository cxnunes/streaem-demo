import { IProductCatalogItem } from "../@types/product";
import axios from "axios";

export interface IProductCatalogRepository {
    getProductCatalog(): Promise<IProductCatalogItem[]>;
}

export const productCatalogRepository: IProductCatalogRepository = {
    getProductCatalog: async () => {
        const response = await axios.get<IProductCatalogItem[]>(
            "http://localhost:4001/productdata"
        );
        return response.data;
    }
};
