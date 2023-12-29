import { Request, Response } from "express";
import { ModelCar } from "../interfaces/interfaces";
const cloudinary = require("../upload/cloudinary");
import Car from "../models/Cars";
export default async function createCar(
  req: Request,
  res: Response
): Promise<Response<ModelCar>> {
  const { name, brand, model, price, localization, km } = req.body;

  try {
    let uploadRes;

    if (req.file) {
      // Wrap the upload process in a Promise to wait for it to complete
      uploadRes = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "image" }, // Adjust resource type as needed
            (error, response) => {
              if (error) {
                console.error("Error uploading to Cloudinary:", error);
                reject(error);
              } else {
                resolve(response);
              }
            }
          )
          .end(req.file?.buffer);
      });
    }

    if (!name || !brand || !model || !price || !localization || !km) {
      return res.status(400).json({ mensagem: "Please, check all fields." });
    }

    const newCar = new Car({
      name,
      brand,
      model,
      price,
      localization,
      km,
      photo: uploadRes ? uploadRes.secure_url : null,
    });

    await newCar.save();
    return res.json(newCar);
  } catch (err) {
    return res.status(500).json({ message: "Error", error: err });
  }
}
