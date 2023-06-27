const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false },
  password: { type: String, required: false },
  lastname: { type: String, required: false },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", usersSchema);
