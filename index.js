import express from "express";

const port = 8000;
const app = express();

app.all("/hello", (req, res, next) => {
  console.log("All");
  next();
});

const cb = (req, res, next) => {
  console.log("CallBack");
  next();
};
app.get("/hello", cb, (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
