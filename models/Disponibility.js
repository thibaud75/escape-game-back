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
  userId: { type: String, required: true },
});

disponibilitySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Disponibility", disponibilitySchema);
