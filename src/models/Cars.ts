// Modelo do banco de dados

const db = require("../connectDB/mongooseConnection"); // se conecta ao nosso banco

const CarSchema = new mongoose.Schema({
  // sempre que um novo carro é criado, ele seguirá esses padrões
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Car = db.model("Cars", CarSchema);

module.exports = Car;
