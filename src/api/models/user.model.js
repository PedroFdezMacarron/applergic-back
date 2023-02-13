const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  photourl: { type: String },
  role: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
