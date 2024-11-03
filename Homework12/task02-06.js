const http = require("http");
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "data.json");
const htmlFilePath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/get_data") {
    if (fs.existsSync(dataFilePath)) {
      fs.readFile(dataFilePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Error reading data.json" }));
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "data.json file not found" }));
    }
  } else if (req.method === "GET" && req.url === "/get_random_number") {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ randomNumber }));
  } else if (req.method === "GET" && req.url === "/html") {
    if (fs.existsSync(htmlFilePath)) {
      fs.readFile(htmlFilePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Error reading index.html" }));
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "index.html file not found" }));
    }
  } else if (req.method === "GET" && req.url === "/current-time") {
    const currentTime = new Date().toISOString();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ currentTime }));
  } else if (req.method === "GET" && req.url === "/api") {
    const usersData = [
      { id: 1, name: "Tato1", type: "User", age: 25 },
      { id: 2, name: "Tato2", type: "User", age: 27 },
      { id: 3, name: "Tato3", type: "User", age: 29 },
      { id: 4, name: "Tato4", type: "User", age: 31 },
      { id: 5, name: "Tato5", type: "User", age: 33 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(usersData));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
