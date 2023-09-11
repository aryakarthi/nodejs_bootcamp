// const { format } = require("date-fns");
// const { v4: id } = require("uuid");

// const datetime = format(new Date(), "yyyy-MM-dd | HH:mm:ss");

// console.log(datetime);
// console.log(id());

const logEvents = require("./logEvents");

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("log", (msg) => {
  logEvents(msg);
});

emitter.emit("log", "Event Emitted");
