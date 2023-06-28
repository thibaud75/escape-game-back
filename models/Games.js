const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const gamesSchema = mongoose.Schema({
  name: { type: String, required: false, unique: true },
  petitDesc: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  capacity: { type: [Number], required: false },
  disponibility: { type: mongoose.Schema.Types.Mixed, required: true },
  image: { type: String, required: false },
});

gamesSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Games", gamesSchema);
