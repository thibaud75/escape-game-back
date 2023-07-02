const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  lastname: { type: String, required: true },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", usersSchema);
