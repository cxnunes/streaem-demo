import express, { Request, Response } from "express";
import { productRepository } from "../repositories/product-repository";
import { productService } from "../services/product-service";

export const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
    const products = await productService({ productRepository }).getProducts();
    res.send(products);
});

productRouter.post("/", async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await productService({ productRepository }).createProduct(product);
    res.send(createdProduct);
});

productRouter.get("/:id", async (req: Request, res: Response) => {
    const product = await productService({ productRepository }).getProduct(req.params.id);
    res.send(product);
});

productRouter.put("/:id", async (req: Request, res: Response) => {
    const product = req.body;
    const updatedProduct = await productService({ productRepository }).updateProduct(
        req.params.id,
        product
    );
    res.send(updatedProduct);
});

productRouter.delete("/:id", async (req: Request, res: Response) => {
    await productService({ productRepository }).deleteProduct(req.params.id);
    res.send(true);
});
