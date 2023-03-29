const mongoose = require("mongoose");

const blogpost = mongoose.model(
  "blogpost",
  {
    title: String,
    content: String,
    publish_date: Date,
  },
  "blogpost"
);

const getAll = async () => {
  return blogpost.find({}).sort({ publish_date: -1 });
};

const getOne = async () => {
  return blogpost.findOne({ _id: id });
};

const create = async (data) => {
  let blog_post = blogpost(data);
  return blog_post.save();
};

const updateOne = async (id, data) => {
  return blogpost.updateOne({ _id: id }, data);
};
module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
};
