import { IProduct } from "../@types/product";

const storage: IProduct[] = [];

export interface IProductRepository {
    createProduct(product: IProduct): Promise<IProduct>;
    getProduct(id: string): Promise<IProduct | undefined>;
    getProducts(): Promise<IProduct[]>;
    updateProduct(id: string, product: IProduct): Promise<IProduct>;
    deleteProduct(id: string): Promise<void>;
}

export const productRepository: IProductRepository = {
    createProduct: async (product: IProduct) => {
        storage.push(product);
        return product;
    },
    getProduct: async (id: string) => {
        return storage.find((product) => product.id === id);
    },
    getProducts: async () => {
        return storage;
    },
    updateProduct: async (id: string, product: IProduct) => {
        const index = storage.findIndex((product) => product.id === id);
        storage[index] = product;
        return product;
    },
    deleteProduct: async (id: string) => {
        const index = storage.findIndex((product) => product.id === id);
        storage.splice(index, 1);
    }
};
