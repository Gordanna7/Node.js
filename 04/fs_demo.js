const fs = require("fs");
const path = require("path");

// //create a folder in the filestystem
// fs.mkdir(path.join(__dirname, "/test1"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder is created");
// });

//CREATE AND WRITE IN FILE

// fs.writeFile(
//   path.join(__dirname, "test1", "hello.txt"),
//   "Hello World!!",
//   (err) => {
//     if (err) throw err;
//     console.log("File was created");
//   }
// );

//APEND FILE

// fs.appendFile(
//   path.join(__dirname, "test1", "hello.txt"),
//   " I LOVE NODEJS!!!",
//   (err) => {
//     if (err) throw err;
//     console.log("file was appended to..");
//   }
// );

//READ FILE
// fs.readFile(
//   path.join(__dirname, "test1", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//RENAME A FILE
fs.rename(
  path.join(__dirname, "test1", "hello.txt"),
  path.join(__dirname, "test1", "hello _renamed.txt"),
  (err) => {
    if (err) throw err;
    console.log("file has been renamed");
  }
);
