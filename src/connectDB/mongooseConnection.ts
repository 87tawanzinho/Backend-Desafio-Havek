// Arquivo para se conectar ao banco.
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECT_URL, {}, (error) => {
  if (error) {
    console.log("Error in autentication" + error);
    return;
  }
  console.log("Connected in MONGODB. 😎");
}); // se conectando ao MongoDB

mongoose.Promise = global.Promise;

module.exports = mongoose;
