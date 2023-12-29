import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function loginUser(req: Request, res: Response) {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ mensagem: "Please, check all fields." });
  }

  const user = await User.findOne({ name: name });

  if (!user) {
    return res.status(404).json({ msg: "Not exist." });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(422).json({ msg: "password is not valid." });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        cars: user.cars,
      },
      secret
    );

    return res
      .status(200)
      .json({ msg: "Authentication with sucessfully", token: token });
  } catch (error) {
    return res.json({ message: "Error" + error });
  }
}
