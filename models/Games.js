const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const gamesSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  petitDesc: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: [Number], required: true },
  image: { type: String, required: true },
  available: { type: Boolean, required: true },
});

gamesSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Games", gamesSchema);
