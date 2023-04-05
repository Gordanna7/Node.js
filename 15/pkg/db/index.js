const mongoose = require("mongoose");

const init = () => {
  const dsn =
    "mongodb+srv://gordannaa4:gordannaa7@js.xxbsjc1.mongodb.net/Movies?retryWrites=true&w=majority";

  mongoose.connect(dsn);
};

module.exports = {
  init,
};
