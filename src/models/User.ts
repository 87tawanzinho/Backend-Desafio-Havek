// Modelo do banco de dados (Users.ts)
import mongoose, { Schema, Document, Types } from "mongoose";
import { ModelUser } from "../interfaces/interfaces";

const UserSchema: Schema = new Schema({
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
  cars: [{ type: Types.ObjectId, ref: "Car" }],
});

const User = mongoose.model<ModelUser>("User", UserSchema);

export default User;
