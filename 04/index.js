// const path = require("path");

// // get the base filename

// console.log(__filename);
// console.log(path.basename(__filename));

// console.log(__filename.split("\\")[__filename.split("\\").length - 1]);

// //directory name

// console.log(path.dirname(__filename));
// console.log(__dirname);

// //file extension name
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);

// //concateneate paths
// // ../c4/hello.html

// console.log(path.join(__dirname, "test", "hello.html"));

const fs = require("fs");
const path = require("path");

// const fileWrite = () => {
//   return new Promise((succes, fail) => {
//     fs.writeFile(
//       path.join(__dirname, "test", "iminja.txt"),
//       "Pero, Stanko",
//       (err) => {
//         if (err) return fail(err);
//         return succes();
//       }
//     );
//   });
// };

// fileWrite();
// console.log("se izvirsi i ova");

const fileWrite = (filename, data) => {
  return new Promise((succes, fail) => {
    fs.writeFile(filename, data, (err) => {
      if (err) return fail(err);
      return succes();
    });
  });
};

fileWrite(path.join(__dirname, "test", "ocenki.txt"), "5, 3 ,53, 53, 53,5")
  .then(() => {
    // ako then e successed
    console.log("Success!");
    return fileWrite(
      path.join(__dirname, "test", "boi.txt"),
      "crvena, zholta, zelena"
    );
  })
  .then(() => {
    //then == success
    console.log("Success2");
    return fileWrite(
      path.join(__dirname, "test", "boi2.txt"),
      "plava, zholta, violetova"
    );
  })
  .catch((err) => {
    console.log(err);
  });

const fileRead = (filename) => {
  return new Promise((succes, fail) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return fail(err);
      return succes(data);
    });
  });
};

fileRead(path.join(__dirname, "test", "boi.txt"))
  .then((data) => {
    console.log(data);
    console.log("Success");
  })
  .catch((err) => {
    console.log("promise rejexted");
    console.log(err);
  });

(async () => {
  try {
    let ocenki = await fileRead(path.join(__dirname, "test", "ocenki.txt"));
    console.log("ocenki: ", ocenki);
  } catch (err) {
    console.log(err);
  }
})();

let imenik = [
  { ime: "Zlate Zlatevski", telefon: 09999999 },
  { ime: "Marko Markovski", telefon: 09999933299 },
  { ime: "Pero Perovski", telefon: 09333399 },
];

(async () => {
  try {
    let imenikData = JSON.stringify(imenik); //convert object to string
    console.log(imenikData);
    await fileWrite(path.join(__dirname, "test1", "imenik.txt"), imenikData);
    let dataString = await fileRead(
      path.join(__dirname, "test1", "imenik.txt")
    );
    let data = JSON.parse(dataString); //convert string to object
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
