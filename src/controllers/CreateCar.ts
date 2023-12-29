import { Request, Response } from "express";
import Car from "../models/Cars";
const cloudinary = require("../upload/cloudinary");

export default async function createCar(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, brand, model, price, localization, km, photo } = req.body;

  try {
    let uploadRes;

    if (photo) {
      uploadRes = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "image" }, (error, response) => {
            if (error) {
              console.error("Error uploading to Cloudinary:", error);
              reject(error);
            } else {
              resolve(response);
            }
          })
          .end(Buffer.from(photo, "base64"));
      });
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
    console.error("Error creating car:", err);
    return res.status(500).json({ message: "Error creating car", error: err });
  }
}
