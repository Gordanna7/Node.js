const blogpost = require("../models/blogpost");
const create = async (req, res) => {
  try {
    let data = {
      ...req.body,
      publish_date: new Date(),
    };
    await blogpost.create(data);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};

const update = async (req, res) => {
  try {
    let data = {
      ...req.body,
    };
    await blogpost.updateOne(req.params.id, data);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};

module.exports = {
  create,
  update,
};
