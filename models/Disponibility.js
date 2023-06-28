const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const disponibilitySchema = mongoose.Schema({
  disponibility: { type: [Object], required: false },
  gameId: { type: String, required: true },
  userId: { type: String, required: false },
});

disponibilitySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Disponibility", disponibilitySchema);
