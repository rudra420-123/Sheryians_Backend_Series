// 1. Form handling
// 2. Session and Cookies

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/about", function (req, res) {
  res.send("About Us");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("Something went wrong!"));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Somthing broke!");
});

app.listen(3000);
