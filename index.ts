import express from "express";

console.log("Hello via Bun!");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
