// 1. Initialize a project with npm
//    -- npm init
// 2. Express install
//    -- npm i express
// 3. Setting up parser for form
//    -- app.use(express.json());
//    -- app.use(express.urlencoded({ extended: true }));
// 4. Setting up ejs for ejs pages
//    -- npm i ejs
//    -- app.set("view engine", "ejs")
//    -- setup ejs as a view engine (On folder name: "views", inside views create "a.ejs" files)
// 5. Setting up public static files
//    -- const path = require('path');
//    -- app.use(express.static(path.join(__dirname,'/public')))
//    -- setup ejs as a public (On folder name: "public", inside public create "assets, js, css" folders)
// 6. Dynamic Routing
//    -- dynamic routing
//    -- How to get data coming from frontend at backend route

const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

// Dynamic Routing starts
app.get("/profile/:username", function (req, res) {
  res.send(`${req.params.username} is the user of this profile.`);
});
app.get("/profile/:username/:age", function (req, res) {
  res.send(`${req.params.username} is ${req.params.age} years old.`);
});
// Dynamic Routing ends

app.listen(3000);
