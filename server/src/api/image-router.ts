import express, { Request, Response } from "express";
import { imageRepository } from "../repositories/image-repository";

export const imageRouter = express.Router();

imageRouter.post("/upload", imageRepository.upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No files were uploaded.");
    }

    res.json({ filename: req.file.filename });
});
