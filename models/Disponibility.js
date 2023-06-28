const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const disponibilitySchema = mongoose.Schema({
  disponibility: { type: [Object], required: true },
  gameId: { type: Number, required: true },
  userId: { type: String, required: true },
});

disponibilitySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Disponibility", disponibilitySchema);
