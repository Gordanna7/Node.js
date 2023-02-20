// const { b, c, test_funkcija } = require("./text_convert.js");

// console.log(b);
// console.log(c);
// console.log(test_funkcija(b, c));

// // const test_funkcija = require("./text_convert");

// // console.log(test_funkcija(20, 15));
const { firstletter, textStats } = require("./text_convert");
text1 = "zdravo svetu ova e samo tekst.";
console.log(firstletter(text1));
let primer =
  "Zdravo Zhivko. Kako si? Gledam deka te nema na predavanja. Si se zapushtil!";
console.log(textStats(primer));
