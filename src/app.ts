import mongooseConnection from "./connectDB/mongooseConnection";
import router from "./routes";

require("dotenv").config();
mongooseConnection();

const express = require("express");
const app = express();

app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("Sucess"));
