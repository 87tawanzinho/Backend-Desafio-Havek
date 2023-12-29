import { Request, Response } from "express";

import Car from "../../models/Cars";
export default async function deleteCar(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await Car.deleteOne({ _id: id });
    return res.json({ message: "Deleted with successfuly" });
  } catch (error) {
    return res.json({ message: "Error, please check." + error });
  }
}
