const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const ironMan = {
    fname: "Tony",
    lname: "Stark",
  };

  // ? To send text msg as a response
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello, world!");

  // ? To send json as a response
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(ironMan));

  // ? To send html page as a response
  // res.writeHead(200, { "Content-Type": "text/html" });
  // const html = fs.readFileSync("./index.html", "utf-8");
  // res.end(html);

  // ? using stream and pipe
  // res.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream(__dirname + "/index.html").pipe(res);

  // ? HTML Template
  // res.writeHead(200, { "Content-Type": "text/html" });
  // let html = fs.readFileSync("./index.html", "utf-8");
  // html = html.replace("{{fname}}", ironMan.fname);
  // res.end(html);

  // ? HTML Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ironMan));
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
