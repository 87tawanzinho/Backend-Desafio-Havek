import { Request, Response } from "express";
import { ModelCar } from "../interfaces/CarInterface";
import Car from "../models/Cars";
export default async function createCar(
  req: Request,
  res: Response
): Promise<Response<ModelCar>> {
  const { name, brand, model, photo } = req.body;

  if (!name || !brand || !model || !photo) {
    return res.status(400).json({ mensagem: "Please, check all fields." });
  }
  try {
    const newCar = new Car({
      name,
      brand,
      model,
      photo,
    });

    await newCar.save();
    return res.json(newCar);
  } catch (error) {
    return res.json({ message: "Error" + error });
  }
}
