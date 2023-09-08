// # To use fs

// const fs = require("node:fs");

// # To use promise based fs

// const fs = require("node:fs/promises");

// console.log("1");

// # To read file synchronously

// const fileContents = fs.readFileSync("./sample.txt", "utf-8");

// console.log(fileContents);

// console.log("2");

// # To read file asynchronously

// fs.readFile("./sample.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("3");

// # To read file asynchronously using promise

// console.log("start");

// fs.readFile("./sample.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("end");

// # To read file asynchronously using async and await

// async function readFile() {
//   try {
//     const data = await fs.readFile("./sample.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile();

// # To write file synchronously

// fs.writeFileSync("./greet.txt", "Hello Arya");

// fs.writeFile("./greet.txt", " Hello Karthi", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File is written!");
//   }
// });

// * Use {flag:"a"} to append data to file

// # To read and write file using stream

// const readStream = fs.createReadStream("./original.txt", {
//   encoding: "utf-8",
//   highWaterMark: 8,
// });

// const writeStream = fs.createWriteStream("./copy.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// # To write file using pipe instead of readStream.on()

// readStream.pipe(writeStream);