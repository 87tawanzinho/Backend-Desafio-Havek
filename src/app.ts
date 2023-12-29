import mongooseConnection from "./connectDB/mongooseConnection";
import router from "./routes";

var cors = require("cors");
require("dotenv").config();
mongooseConnection();

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("Sucess"));
