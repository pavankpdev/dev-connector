const mongoose = require("mongoose");
// Create user schema
const Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const UserModel = mongoose.model("users", Schema);

exports.UserModel = UserModel;
