import mongooseConnection from "./connectDB/mongooseConnection";
import router from "./routes";
var cors = require("cors");
require("dotenv").config();
mongooseConnection();

const express = require("express");
const app = express();

app.use(express.json());
app.use(router);
app.use(cors);

app.listen(4000, () => console.log("Sucess"));
