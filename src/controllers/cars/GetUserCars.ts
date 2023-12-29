import { Request, Response } from "express";
import User from "../../models/User";
import mongoose from "mongoose";

export default async function getCarByUser(req: Request, res: Response) {
  try {
    const { id } = req.params; // Use req.params para obter o parâmetro da URL

    // Certifique-se de validar o formato do ID antes de passá-lo para a consulta
    if (!isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid Id" });
    }

    // Use findById para encontrar um usuário pelo ID
    const user = await User.findById(id).populate("cars");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ userCars: user.cars });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error in the server" + error });
  }
}

function isValidObjectId(id: string) {
  // Use a função isValid do mongoose para validar o formato do ID
  return mongoose.Types.ObjectId.isValid(id);
}
