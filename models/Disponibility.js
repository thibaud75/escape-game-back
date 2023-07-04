const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Prenom: { type: String, required: true },
  Nom: { type: String, required: true },
  Date: { type: String, required: true },
});

const disponibilitySchema = mongoose.Schema({
  disponibility: [
    {
      users: [userSchema],
      date: { type: String },
    },
  ],
  gameId: { type: String, required: true },
  gameName: { type: String, required: true },
  userId: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("Disponibility", disponibilitySchema);
