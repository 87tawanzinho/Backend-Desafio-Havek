import multer from "multer";
import path from "path";
export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve("uploads")); // gera o path da maneira correta
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();
    callback(null, `${time}_${file.originalname}`); // 321312312_fatura.pdf
  },
}); // salva no disco
