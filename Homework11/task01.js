const https = require("https");
const fs = require("fs");

function fetchAndWriteUsers() {
  const options = {
    hostname: "jsonplaceholder.typicode.com",
    path: "/users",
    method: "GET",
    rejectUnauthorized: false,
  };

  const req = https.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const users = JSON.parse(data).map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }));

      fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
        if (err) throw err;
        console.log("Users data saved");
      });
    });
  });

  req.on("error", (err) => {
    console.error("Error:", err.message);
  });

  req.end();
}

fetchAndWriteUsers();
