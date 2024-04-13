import { IProduct, IProductCatalogItem } from "../@types/product";
import { IProductRepository } from "../repositories/product-repository";

export interface IProductServiceDeps {
    productRepository: IProductRepository;
}

export const productService = (deps: IProductServiceDeps) => {
    return {
        createProduct: async (item: IProductCatalogItem) => {
            const product: IProduct = {
                id: Math.random().toString(36),
                category: item.category,
                name: item.name,
                description: item.description,
                price: Number(item.price)
            };

            return deps.productRepository.createProduct(product);
        },
        getProduct: async (id: string) => {
            return deps.productRepository.getProduct(id);
        },
        getProducts: async () => {
            return deps.productRepository.getProducts();
        },
        updateProduct: async (id: string, product: IProduct) => {
            return deps.productRepository.updateProduct(id, product);
        },
        deleteProduct: async (id: string) => {
            return deps.productRepository.deleteProduct(id);
        }
    };
};
