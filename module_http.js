const http = require("node:http");

const server = http.createServer((req, res) => {
  const ironMan = {
    fname: "Tony",
    lname: "Stark",
  };
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello, world!");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(ironMan));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
