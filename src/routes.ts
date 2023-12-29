import createCar from "./controllers/CreateCar";
import getCar from "./controllers/GetCar";
import registerUser from "./controllers/RegisterUser";
import loginUser from "./controllers/UserLogin";
import { storage } from "./multerConfig";
import multer from "multer";
const upload = multer({ storage: storage });
const express = require("express");
const router = express.Router();

//user
router.post("/createUser", registerUser);
router.post("/loginUser", loginUser);
// cars
router.post("/createCar", upload.single("file"), createCar);
router.get("/", getCar);

export default router;
