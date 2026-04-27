import multer from "multer";
import path from "path";
import fs from "fs";

const createMulter = (folderName = "others") => {

  const storage = multer.diskStorage({

        destination: (req, file, cb) => {
        const uploadPath = path.join("assets", folderName);

        // auto create folder if not exists
        fs.mkdirSync(uploadPath, { recursive: true });

        cb(null, uploadPath);
        },

        filename: (req, file, cb) => {
        const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);

        cb(
            null,
            `${file.fieldname}-${uniqueSuffix}${path.extname(
            file.originalname
            )}`
        );
        },
  });

  const fileFilter = (req, file, cb) => {
    
        const allowedTypes = /jpeg|jpg|png|webp/;
        const ext = path.extname(file.originalname).toLowerCase();

        if (allowedTypes.test(ext)) {
        cb(null, true);
        } else {
        cb(new Error("Only images are allowed (jpeg, jpg, png, webp)"));
            }
  };

  return multer({
    storage,
    fileFilter,
  });
};

export default createMulter;