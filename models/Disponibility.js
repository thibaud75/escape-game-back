const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const disponibilitySchema = mongoose.Schema({
  disponibility: [
    {
      date: { type: String },
      users: [Object],
    },
  ],
  gameId: { type: String, required: true },
  gameName: { type: String, required: true },
  userId: { type: String, required: true },
  id: { type: String },
});

disponibilitySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Disponibility", disponibilitySchema);
