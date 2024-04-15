import { IProduct } from "../../@types/product";
import { IProductRepository } from "../../repositories/product-repository";
import { productService } from "../product-service";

const mockProducts: IProduct[] = [
    { id: "1", category: "category", name: "name", description: "description", price: 1 },
    { id: "2", category: "category", name: "name", description: "description", price: 1 },
    { id: "3", category: "category", name: "name", description: "description", price: 1 }
];

const mockProductRepository: IProductRepository = {
    createProduct: jest.fn(),
    getProduct: jest.fn(),
    getProducts: jest.fn().mockResolvedValue(mockProducts),
    updateProduct: jest.fn(),
    deleteProduct: jest.fn()
};

describe("Product Service", () => {
    it("should return a list of products", async () => {
        const products = await productService({
            productRepository: mockProductRepository
        }).getProducts();

        expect(products.length).toBe(3);
    });
});
