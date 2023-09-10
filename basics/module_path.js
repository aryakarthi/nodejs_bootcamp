// # Built-in modules : path

// const path = require("node:path");

// ? To access file path
// console.log("filePath :", __filename);

// ? To access directory path
// console.log("dirPath :", __dirname);

// ? To access file name
// console.log("fileName :", path.basename(__filename));

// ? To access directory name
// console.log("dirName :", path.basename(__dirname));

// ? To access file extension
// console.log("fileExtension :", path.extname(__filename));

// ? To access directory extension
// console.log("dirExtension :", path.extname(__dirname));

// ? To access path object
// const pathObj = path.parse(__filename);
// console.log("pathObj :", pathObj);

// ? To check the given path is absolute or relative
// console.log("pathAbsolute :", path.isAbsolute(__filename));
// console.log("pathAbsolute :", path.isAbsolute("./data.json"));

// ? To concatenate multiple values to form a path
// console.log("pathJoin :", path.join(__dirname,"data.json"));
// console.log("pathResolve :", path.resolve(__dirname,"data.json"));

// ? join and resovle examples

// console.log(path.join("base", "sub", "data.txt"));
// console.log(path.join("/base", "sub", "data.txt"));
// console.log(path.join("/base", "//sub", "data.txt"));
// console.log(path.join("/base", "//sub", "../data.txt"));

// console.log(path.resolve("base", "sub", "data.txt"));
// console.log(path.resolve("/base", "sub", "data.txt"));
// console.log(path.resolve("/base", "//sub", "data.txt"));
// console.log(path.resolve("/base", "//sub", "../data.txt"));
