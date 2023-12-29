import createCar from "./controllers/cars/CreateCar";
import deleteCar from "./controllers/cars/DeleteCar";
import editCar from "./controllers/cars/EditCar";
import getCar from "./controllers/cars/GetCar";
import getCarByUser from "./controllers/cars/GetUserCars";
import registerUser from "./controllers/user/RegisterUser";
import loginUser from "./controllers/user/UserLogin";
import multer from "multer";
import { verifyToken } from "./controllers/verifyToken";
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});
const express = require("express");
const router = express.Router();

//user
router.post("/createUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/userCars/:id", getCarByUser);
// cars
router.post("/createCar", verifyToken, upload.single("photo"), createCar);
router.get("/", getCar);
router.delete("/user/:userId/car/:carId", verifyToken, deleteCar);
router.put("/editCar/:carId/:userId", verifyToken, editCar);
export default router;
