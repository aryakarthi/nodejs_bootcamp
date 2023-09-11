const { format } = require("date-fns");
const { v4: id } = require("uuid");

const fs = require("node:fs");
const fsPro = require("node:fs").promises;
const path = require("node:path");

const logEvents = async (msg) => {
  const datetime = `${format(new Date(), "yyyy-MM-dd | HH:mm:ss")}`;
  const logData = `${datetime}\t${id()}\t${msg}\n`;
  console.log(logData);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPro.mkdir(path.join(__dirname, "logs"));
    }
    await fsPro.appendFile(
      path.join(__dirname, "logs", "logData.txt"),
      logData
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
