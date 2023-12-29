import createCar from "./controllers/CreateCar";
import getCar from "./controllers/GetCar";
import getCarByUser from "./controllers/GetUserCars";
import registerUser from "./controllers/RegisterUser";
import loginUser from "./controllers/UserLogin";
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

export default router;
