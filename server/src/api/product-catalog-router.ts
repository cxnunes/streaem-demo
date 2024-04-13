import express, { Request, Response } from "express";
import { productCatalogService } from "../services/product-catalog-service";
import { productCatalogRepository } from "../repositories/product-catalog-repository";

export const productCatalogRouter = express.Router();

productCatalogRouter.get("/", async (req: Request, res: Response) => {
    const products = await productCatalogService({ productCatalogRepository }).getProductCatalog();
    res.send(products);
});
