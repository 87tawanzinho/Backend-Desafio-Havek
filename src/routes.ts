import createCar from "./controllers/CreateCar";
import getCar from "./controllers/GetCar";
const express = require("express");
const router = express.Router();

router.post("/create", createCar);
router.get("/", getCar);
router.post("/login", login);

export default router;
