import createCar from "./controllers/CreateCar";
import getCar from "./controllers/GetCar";
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
// cars
router.post("/createCar", upload.single("photo"), createCar);
router.get("/", getCar);

export default router;
