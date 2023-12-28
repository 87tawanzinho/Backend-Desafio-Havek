// Arquivo para se conectar ao banco.
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECT_URL); // se conectando ao MongoDB
