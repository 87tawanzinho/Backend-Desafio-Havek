import { Request, Response } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
export default async function registerUser(req: Request, res: Response) {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !password || !email || !confirmPassword) {
    return res.status(400).json({ mensagem: "Please, check all fields." });
  }

  const user = await User.findOne({ name: name });

  if (user) {
    return res.status(500).json({ msg: "This name already in use" });
  }
  try {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      confirmPassword: passwordHash,
    });

    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    return res.json({ message: "Error" + error });
  }
}
