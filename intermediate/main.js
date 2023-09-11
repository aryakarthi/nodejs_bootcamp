// console.log("Hello world!");

// console.log(global);

// const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log("Directory Path :", __dirname);
// console.log("File Path :", __filename);

// const { add, sub, mul, div } = require("./math");

// const path = require("node:path");

// console.log("Path :",path);

// console.log("Directory Path :", path.dirname(__filename));
// console.log("Base Name :", path.basename(__filename));
// console.log("Extension Name :", path.extname(__filename));
// console.log("Path Object :", path.parse(__filename));

// console.log("Add :",add(1, 2));
// console.log("Sub :",sub(5, 3));
// console.log("Mul :",mul(3, 4));
// console.log("Div :",div(9, 3));

const fs = require("node:fs");
const path = require("node:path");

// ? To read text file
fs.readFile(path.join(__dirname, "files", "nodejs.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ? To write text file
// fs.writeFile(path.join(__dirname, "files", "hello.txt"), "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });

// ? To rename text file
// fs.rename(
//   path.join(__dirname, "files", "hello.txt"),
//   path.join(__dirname, "files", "greet.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File renamed successfully");
//   }
// );

// ? To delete text file
// fs.unlink(path.join(__dirname, "files", "greet.txt"), (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully");
// });

// # callback hell

// fs.readFile(
//   path.join(__dirname, "files", "nodejs.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     fs.writeFile(path.join(__dirname, "files", "copy.txt"), data, (err) => {
//       if (err) throw err;
//       console.log("File written successfully");
//       fs.appendFile(
//         path.join(__dirname, "files", "copy.txt"),
//         "\n\n - Copied from nodejs.txt!",
//         (err) => {
//           if (err) throw err;
//           console.log("File appended successfully");
//           fs.rename(
//             path.join(__dirname, "files", "copy.txt"),
//             path.join(__dirname, "files", "nodejs_copy.txt"),
//             (err) => {
//               if (err) throw err;
//               console.log("File renamed successfully");
//               fs.unlink(
//                 path.join(__dirname, "files", "nodejs_copy.txt"),
//                 (err) => {
//                   if (err) throw err;
//                   console.log("File deleted successfully");
//                 }
//               );
//             }
//           );
//         }
//       );
//     });
//   }
// );

// # stream

// const readStream = fs.createReadStream(
//   path.join(__dirname, "files", "large.txt"),
//   { encoding: "utf-8" }
// );

// const writeStream = fs.createWriteStream(
//   path.join(__dirname, "files", "new_large.txt")
// );

// readStream.on("data", (dataChunk) => {
//   writeStream.write(dataChunk);
// });

// # pipe

// readStream.pipe(writeStream);

// # make and remove directory

// ? make
// if(!fs.existsSync("./new")){
//   fs.mkdir("./new",(err) => {
//     if (err) throw err;
//     console.log("Directory created successfully");
//   });
// }

// ? remove
// if(fs.existsSync("./new")){
//   fs.rmdir("./new",(err) => {
//     if (err) throw err;
//     console.log("Directory deleted successfully");
//   });
// }

// ? To display the error message and exit
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
