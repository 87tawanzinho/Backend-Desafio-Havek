import createCar from "./controllers/cars/CreateCar";
import deleteCar from "./controllers/cars/DeleteCar";
import editCar from "./controllers/cars/EditCar";
import getCar from "./controllers/cars/GetCar";
import getCarByUser from "./controllers/cars/GetUserCars";
import registerUser from "./controllers/user/RegisterUser";
import loginUser from "./controllers/user/UserLogin";
import multer from "multer";
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
router.post("/createCar", upload.single("photo"), createCar);
router.get("/", getCar);
router.delete("/user/:userId/car/:carId", deleteCar);
router.put("/editCar/:carId/:userId", editCar);
export default router;
