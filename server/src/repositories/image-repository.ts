import multer from "multer";
import path from "path";

const publicPath = path.join(process.cwd(), "public");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, publicPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

export interface IImageRepository {
    upload: multer.Multer;
}

export const imageRepository = {
    upload: multer({ storage: storage })
};
