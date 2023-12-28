// Modelo do banco de dados (Users.ts)
import mongoose, { Schema, Document } from "mongoose";
import { ModelUser } from "../interfaces/interfaces";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<ModelUser>("User", UserSchema);

export default User;
