import { Request, Response } from "express";

import Car from "../models/Cars";
export default async function getCar(req: Request, res: Response) {
  const cars = await Car.find();
  return res.json({ cars });
}
