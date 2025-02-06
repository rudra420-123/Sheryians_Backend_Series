const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Protected Route
app.get("/profile", isLoggedIn, (req, res) => {
  res.send("Profile Page");
});

// Registation Functionality
app.post("/register", async (req, res) => {
  const { name, username, email, password, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).send({ message: "User already registered !!!" });
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email: email, userId: user._id }, "RRR");
      res.cookie("token", token);
      res.send("registered !!!");
    });
  });
});

// Login Functionality
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(500).send({ message: "Something went wrong !!!" });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userId: user._id }, "RRR");
      res.cookie("token", token);
      res.status(200).send("You Have Login Successfully !!!");
    } else {
      res.redirect("/login");
    }
  });
});

// Logout Functionality
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// isLoggedIn Middleware Functionality (Protected Route)
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.send("You must be loggged in !!!");
  } else {
    let data = jwt.verify(req.cookies.token, "RRR");
    req.user = data;
    next();
  }
}

app.listen(3000);