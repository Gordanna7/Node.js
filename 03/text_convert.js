// const b = 25;
// let c = 10;

// const test_funkcija = (a, b) => {
//   return a + b;
// };

// module.exports = {
//   b,
//   c,
//   test_funkcija,
// };

// // module.exports = test_funkcija;

const firstletter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const textStats = (text) => {
  if (typeof text !== "string") return;

  let output = {
    bukvi: 0,
    zborovi: 0,
    rechenici: 0,
    povekeod5: 0,
    pomalkuod5: 0,
    ednakvona5bukvi: 0,
  };

  output.bukvi = text.length;
  output.zborovi = text.split(" ").length;
  output.rechenici = text.split(".").length;

  let zborovi = text.split(" ");
  for (let zbor of zborovi) {
    if (zbor.length === 5) output.ednakvona5bukvi++;
    if (zbor.length > 5) output.povekeod5++;
    if (zbor.length < 5) output.pomalkuod5++;
  }
  return output;
};

module.exports = {
  firstletter,
  textStats,
};
