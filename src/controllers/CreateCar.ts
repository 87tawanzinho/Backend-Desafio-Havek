import { Request, Response } from "express";
import { ModelCar } from "../interfaces/interfaces";
import Car from "../models/Cars";
export default async function createCar(
  req: Request,
  res: Response
): Promise<Response<ModelCar>> {
  const { name, brand, model, price, localization, km } = req.body;
  if (!req.file || !req.file.filename) {
    return res.status(400).json({ message: "Please, upload a valid file." });
  }

  const { filename: photo } = req.file;
  if (!name || !brand || !model || !photo || !price || !localization || !km) {
    return res.status(400).json({ mensagem: "Please, check all fields." });
  }
  try {
    const newCar = new Car({
      name,
      brand,
      model,
      price,
      localization,
      km,
      photo,
    });

    await newCar.save();
    return res.json(newCar);
  } catch (error) {
    return res.json({ message: "Error" + error });
  }
}
