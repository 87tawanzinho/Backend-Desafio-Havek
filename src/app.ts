import path from "path";
import mongooseConnection from "./connectDB/mongooseConnection";
import router from "./routes";

var cors = require("cors");
require("dotenv").config();
mongooseConnection();

const express = require("express");
const app = express();
app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(router);

app.listen(4000, () => console.log("Success"));
