import { Request, Response } from "express";
import Car from "../../models/Cars";
import User from "../../models/User";
const cloudinary = require("../upload/cloudinary");

export default async function createCar(
  req: Request,
  res: Response
): Promise<Response> {
  const { userId, name, brand, model, price, localization, km, photo } =
    req.body;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: "User Not Found" });
  }

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
      owner: userId,
      photo: uploadRes ? uploadRes.secure_url : null,
    });

    await newCar.save();
    user.cars.push(newCar._id);
    await user.save();
    return res.json(newCar);
  } catch (err) {
    console.error("Error creating car:", err);
    return res.status(500).json({ message: "Error creating car", error: err });
  }
}
