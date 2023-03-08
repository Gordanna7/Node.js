// let operacija = "minus";

// if (operacija == "minus") {
//   console.log("odzemanje");
// } else if (operacija == "plus") {
//   console.log("dodavanje");
// } else if (operacija == "mnozenje ") {
//   console.log("mnozenje");
// } else if (operacija == "delenje") {
//   console.log("delenje");
// }

// // let text = "Zdravo jas sum Gordana";
// // let zbor = "zdravo";

// // let rezultat = text.toLowerCase().search("zdravo");
// // if (rezultat === false) {
// //   console.log("not found");
// // } else {
// //   console.log("pozicijata na koja se naogja zborot vo stringot e" + rezultat);
// // }
// switch (operacija) {
//   case "plus":
//     console.log("dodavanje");
//     break;
//   case "minus":
//     console.log("odzemanje");
//     break;
//   case "mnozenje":
//     console.log("mnozenje");
//     break;
//   case "delenje":
//     console.log("delenje");
//     break;
// }

// let result = {
//   plus: () => {
//     console.log("dodavanje");
//   },
//   minus: () => {
//     console.log("odzemanje");
//     return "ova e mnozenje";
//   },
//   mnozenje: () => {
//     console.log("mnozenje");
//   },
//   delenje: () => {
//     console.log("delenje");
//   },
// };

// let rezultat = result[operacija]();
// console.log(rezultat);

// const student = {
//   ime: "Pero",
//   prezime: "Perovski",
//   "horoskopski znak": "vodolija",
//   apsolvent: false,
//   godinanastudii: 10,
//   akcija: () => {
//     console.log("kaj si");
//     return "peroo";
//   },
// };

// console.log(student.ime, student["ime"]);

// let prop = "prezime";
// console.log(student[prop], student.prop);

// console.log(student["horoskopski znak"]);
// console.log(student.apsolvent);
// console.log(student.godinanastudii);
// console.log(student.akcija());

const { NOTFOUND } = require("dns");
const fs = require("fs");
const http = require("http");
const url = require("url");
const fileRead = (filename) => {
  return new Promise((succes, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return succes(data);
    });
  });
};

const render = async (page, data) => {
  let content = await fileRead(`./${page}.html`);
  return content.replace("{{res}}", data);
};

const pages = {
  "/home": (req, res) => {
    res.end("HOME");
  },
  "/users": (req, res) => {
    res.end("users");
  },
  "/plus": async (req, res) => {
    let result = `${Number(req.query.a) + Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/minus": async (req, res) => {
    let result = `${Number(req.query.a) - Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/delenje": async (req, res) => {
    let result = `${Number(req.query.a) / Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/mnozenje": async (req, res) => {
    let result = `${Number(req.query.a) * Number(req.query.b)}`;
    res.end(await render("index", result));
  },
};

const server = http.createServer((req, res) => {
  let [path, _] = req.url.split("?");
  if (pages[path]) {
    req.query = url.parse(req.url, true).query;
    pages[path](req, res);
  } else {
    res.writeHead(404, "NOTFOUND");
    res.end("this page does not exist");
  }
  console.log("test server");
  console.log(req, url);
  console.log(url.parse(req.url, true).query);
});
console.log("sever is started..");
server.listen(8080);
