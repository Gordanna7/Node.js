const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  {
    email: String,
    pw: Number,
    full_name: String,
  },
  "users"
);
const create = async (data) => {
  let user = new User(data);
  return user.save();
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  create,
  getUserByEmail,
};
