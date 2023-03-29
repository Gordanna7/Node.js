const mongoose = require("mongoose");
const express = require("express");
const pages = require("./handlers/pages");
const callbacks = require("./handlers/callbacks");

const dsn =
  "mongodb+srv://gordannaa4:gordannaa7@js.xxbsjc1.mongodb.net/blogpostExercise?retryWrites=true&w=majority";

mongoose.connect(dsn);

const app = express();
app.set("view engine, ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", pages.main);
app.get("/form_add_post", pages.formAdd);
app.get("/form_edit_post", pages.formEdit);

app.post("/post/add", callbacks.create);
app.put("/post/edit/:id", callbacks.update);
app.delete("/post/delete/:id", callbacks.remove);
app.listen(8080, (er) => {
  if (err) return console.log(err);
  console.log("server succs started");
});
