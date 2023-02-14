function simplePost(req, res) {
  const myBody = JSON.stringify(req.body);
  console.log("<<<", myBody);
  res.send("Express <<< " + myBody);
}

export { simplePost };
