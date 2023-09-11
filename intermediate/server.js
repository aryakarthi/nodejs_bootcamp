const http = require("node:http");
const PORT = 3000;
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("404 Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
