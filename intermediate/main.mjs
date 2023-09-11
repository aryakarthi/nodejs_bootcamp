// import { add, sub, mul, div } from "./math.js";

// console.log("Add :", add(1, 2));
// console.log("Sub :", sub(5, 3));
// console.log("Mul :", mul(3, 4));
// console.log("Div :", div(9, 3));

import { readFile } from "node:fs";

readFile("./files/nodejs.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ? To display the error message and exit
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
