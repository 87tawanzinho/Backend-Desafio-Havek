import { Request, Response } from "express";
import Car from "../../models/Cars";
import User from "../../models/User";

export default async function deleteCar(req: Request, res: Response) {
  const { userId, carId } = req.params;

  try {
    if (!userId || !carId) {
      return res
        .status(400)
        .json({ message: "User ID and Car ID are required" });
    }

    const car = await Car.findOne({ _id: carId, owner: userId });

    if (!car) {
      return res
        .status(404)
        .json({ message: "Car not found for the specified user" });
    }

    await User.findByIdAndUpdate(userId, { $pull: { cars: carId } });

    await Car.deleteOne({ _id: carId, owner: userId });

    return res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting car:", error);
    return res.status(500).json({ message: "Error, please check." });
  }
}
