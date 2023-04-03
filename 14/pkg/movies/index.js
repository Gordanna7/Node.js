const mongoose = require("mongoose");

const Movie = mongoose.model(
  "movie",
  {
    title: String,
    year: Number,
  },
  "movies" //vo mongodb kolekcija
);

const create = async (data) => {
  let movie = new Movie(data);
  return movie.save();
};

const getAll = async () => {
  return Movie.find({});
};

const getOne = async (id) => {
  return Movie.findOne({ _id: id });
};

const updateOne = async (id, data) => {
  return Movie.updateOne({ _id: id }, data);
};

const deleteOne = async (id) => {
  return Movie.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
};
