import createCar from "./controllers/CreateCar";
import getCar from "./controllers/GetCar";
import registerUser from "./controllers/RegisterUser";
import loginUser from "./controllers/UserLogin";
const express = require("express");
const router = express.Router();

//user
router.post("/createUser", registerUser);
router.post("/loginUser", loginUser);
// cars
router.post("/createCar", createCar);
router.get("/", getCar);

export default router;
