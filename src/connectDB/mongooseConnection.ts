// Arquivo para se conectar ao banco.
require("dotenv").config();
const mongoose = require("mongoose");

export default async function mongooseConnection() {
  try {
    await mongoose.connect(process.env.CONNECT_URL);
    return console.log("connected");
  } catch (err) {
    return console.log("Error, please check" + err);
  }
}
