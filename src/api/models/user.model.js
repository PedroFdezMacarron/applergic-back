const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  photourl: { type: String },
  role: { type: String },
  contactName: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  insuranceCompany: { type: String },
  intolerances: [ {type: Schema.Types.ObjectId, ref: 'component'}],
  diaryProducts: [{ id:{type: Schema.Types.ObjectId, ref: 'product'} , notes:{type: String} } ]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
