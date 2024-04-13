import express from "express";
import { productCatalogRouter } from "./api/product-catalog-router";
import { productRouter } from "./api/product-router";
import { imageRouter } from "./api/image-router";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.get("/health", (req, res) => {
    res.send("Hello World");
});

app.use("/api/product-catalog", productCatalogRouter);
app.use("/api/product", productRouter);
app.use("/api/image", imageRouter);
