import app from "../api/api.js";

const port = 3000;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log("Running on " + hostname + ":" + port);
});

// import http from "http";

// const port = 3000;
// const hostname = "localhost";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end("Hello");
// });

// server.listen(port, hostname, () => {
//   console.log("Running on " + hostname + ":" + port);
// });
