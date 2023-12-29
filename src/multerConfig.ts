import multer from "multer";
export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/public`);
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();
    callback(null, `${time}_${file.originalname}`); // 321312312_fatura.pdf
  },
}); // salva no disco
