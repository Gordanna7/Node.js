const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gordannaa4:gordannaa7@js.xxbsjc1.mongodb.net/JS?retryWrites=true&w=majority";

mongoose.connect(connectionString);
const Users = mongoose.model(
  "users",
  {
    _id: String,
    name: String,
    last_name: String,
    date_birth: Date,
  },
  "users"
);

Users.find({})
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

// let newUser = new Users({
//   _id: new mongoose.Types.ObjectId(),
//   name: "Pero",
//   last_name: "Perovski",
//   dob: new Date("1990-03-11"),
// });

// newUser.save();

Users.updateOne({ _id: "6421e8598da24fd0e9bd9bdf" }, { last_name: "Zlatevski" })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

Users.deleteOne({ _id: "6421e8598da24fd0e9bd9bdf" })
  .then((user) => {
    console.log(user.name + "succ deleted");
  })
  .catch((err) => {
    console.log(err);
  });
