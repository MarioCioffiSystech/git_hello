import express from "express";

const app = express();

// convert req.body in json
app.use(express.json());

app.get("/simpleGet", (req, res) => {
  res.send("Hello from Express");
});

app.get("/simpleSum", (req, res) => {
  const p1 = parseInt(req.query.p1);
  const p2 = parseInt(req.query.p2);
  const sum = p1 + p2;
  // res.send("Sum is: " + sum);
  res.json({ response: sum });
});

app.post("/simplePost", (req, res) => {
  const myBody = JSON.stringify(req.body);
  console.log("<<<", myBody);
  res.send("Express <<< " + myBody);
});

const port = 3000;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log("Running on " + hostname + ":" + port);
});

// export default app;
