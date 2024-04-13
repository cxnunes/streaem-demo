import { IProductCatalogRepository } from "../repositories/product-catalog-repository";

export interface IProductCatalogServiceDeps {
    productCatalogRepository: IProductCatalogRepository;
}

export const productCatalogService = (deps: IProductCatalogServiceDeps) => {
    return {
        getProductCatalog: async () => {
            return deps.productCatalogRepository.getProductCatalog();
        }
    };
};
