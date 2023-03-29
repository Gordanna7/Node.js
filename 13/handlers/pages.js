const blogpost = require("../models/blogpost");

const main = async (req, res) => {
  try {
    let data = await blogpost.getAll();
    return res.render("main", { data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal sever error");
  }
};

const formAdd = async (req, res) => {
  try {
    return res.render("form_add_post");
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};

const formEdit = async (req, res) => {
  try {
    let data = await blogpost.getOne(req.params.id);
    return res.render("form_edit_post", { data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = {
  main,
  formAdd,
  formEdit,
};
