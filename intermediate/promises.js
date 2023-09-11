const path = require("node:path");
const fsPro = require("node:fs").promises;

const fileCrud = async () => {
  try {
    const data = await fsPro.readFile(
      path.join(__dirname, "files", "nodejs.txt"),
      "utf8"
    );
    console.log(data);

    // await fsPro.writeFile(path.join(__dirname, "files", "copy.txt"), data);
    // console.log("File written successfully");

    // await fsPro.appendFile(path.join(__dirname, "files", "copy.txt"), "\n\n - Copied from nodejs.txt");
    // console.log("File appended successfully");

    // await fsPro.rename(path.join(__dirname, "files", "copy.txt"),path.join(__dirname, "files", "nodejs_copy.txt") );
    // console.log("File renamed successfully");

    // await fsPro.unlink(path.join(__dirname, "files", "nodejs_copy.txt"));
    // console.log("File deleted successfully");

  } catch (err) {
    console.error(err);
  }
};

fileCrud();
