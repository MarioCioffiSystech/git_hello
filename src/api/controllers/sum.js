function simpleSum(req, res) {
  const p1 = parseInt(req.query.p1);
  const p2 = parseInt(req.query.p2);
  const sum = p1 + p2;
  // res.send("Sum is: " + sum);
  res.json({ response: sum });
}

export { simpleSum };
