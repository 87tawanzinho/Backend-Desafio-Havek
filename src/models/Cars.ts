// Modelo do banco de dados (Cars.ts)
import mongoose, { Schema, Document } from "mongoose";
import { ModelCar } from "../interfaces/interfaces";

const CarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  localization: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Car = mongoose.model<ModelCar>("Car", CarSchema);

export default Car;
