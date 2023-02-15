// console.log("hi world");
// console.log(5 != 5);
// console.log(typeof 25);

// const chovek = {
//   name: "John",
//   surname: "Doe",
// };

// console.log(chovek);

// student = {
//   ime: "Pero",
//   prezime: "Nakov",
//   age: 25,
// };

// console.log(student);

// const testFn2 = (b, a = 25) => {
//   return a + b;
// };

// console.log(testFn2(50, 20));

// const testFn3 = (o = {}) => {
//   o.ime = "Stefan";
//   console.log(o);
// };

// const s = { ime: "nanka", prezime: "nankaaa" };
// testFn3(s);
// console.log(s);

// let uchenik = {
//   ime: "marko",
//   ocena: 4,
// };

// let uchenik2 = uchenik;
// console.log(uchenik);
// console.log(uchenik2);

// const convert = (type, value) => {
//   switch (type) {
//     case "c2f":
//       return (value * 9) / 5 + 32;
//     case "f2c":
//       return (value - 32) * 5 / 9;
//   }
// };

// zadaca

const prvuchenik = {
  ime: "Stefan",
  prezime: "Petrovski",
  ocneka: 5,
};

const vtoruchenik = {
  ime: "Filip",
  prezime: "Stefanovski",
  ocenka: 4,
};

if (prvuchenik.ocneka > vtoruchenik.ocenka) {
  console.log(
    prvuchenik.ime +
      prvuchenik.prezime +
      " e podobar od " +
      vtoruchenik.ime +
      vtoruchenik.prezime
  );
} else if (prvuchenik.ocenka < vtoruchenik.ocenka) {
  console.log(
    vtoruchenik.ime +
      vtoruchenik.prezime +
      " e podobar od " +
      prvuchenik.ime +
      prvuchenik.prezime
  );
} else if (prvuchenik.ocneka === vtoruchenik.ocenka) {
  console.log(prvuchenik.ime + " ima isto znaenje kako i " + vtoruchenik.ime);
} else {
  console.log("ucenkik not found");
}
