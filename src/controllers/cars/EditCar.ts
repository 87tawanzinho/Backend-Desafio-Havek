import { Request, Response } from "express";
import Car from "../../models/Cars";
const cloudinary = require("../../upload/cloudinary");

export default async function editCar(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, brand, model, price, localization, km, photo } = req.body;

  const { carId } = req.params;

  try {
    let car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

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

    // Update car properties if provided in the request
    car.name = name !== undefined ? name : car.name;
    car.brand = brand !== undefined ? brand : car.brand;
    car.model = model !== undefined ? model : car.model;
    car.price = price !== undefined ? price : car.price;
    car.localization =
      localization !== undefined ? localization : car.localization;
    car.km = km !== undefined ? km : car.km;
    car.photo = uploadRes ? uploadRes.secure_url : car.photo;

    await car.save();

    return res.json(car);
  } catch (err) {
    console.error("Error updating car:", err);
    return res.status(500).json({ message: "Error updating car", error: err });
  }
}
