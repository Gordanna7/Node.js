const movies = require("../pkg/movies");

const getAll = async (req, res) => {
  try {
    let data = await movies.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};

const getOne = async (req, res) => {
  try {
    let data = await movies.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};

const create = async (req, res) => {
  try {
    let data = req.body;
    await movies.create(data);
    res.send(data).status(201);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};
const updateOne = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    await movies.updateOne(id, data);
    res.send(data).status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};
const partialUpdateOne = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    await movies.updateOne(id, data);
    res.send(data).status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};
const deleteOne = async (req, res) => {
  try {
    await movies.remove(req.params.id);
    res.send("").status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("intertnal srv err");
  }
};

module.exports = {
  getAll,
  create,
  updateOne,
  getOne,
  partialUpdateOne,
  deleteOne,
};
