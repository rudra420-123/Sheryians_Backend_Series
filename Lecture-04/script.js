// 1. Introduction to Express Js
// 2. Setting up a basic Express Application
//    -- npm i express
//    -- npm i nodemon -g
//    -- nodemon script.js / npx nodemon script.js (To run the code)
// 3. Routing
// 4. Middleware
// 5. Request and response handling
// 6. Error handling

// const express = require('express');
// const app = express();
// app.get('/', function(req, res){
//     res.send('Hello World!');
// });
// app.get('/about', function(req, res){
//     res.send('About Us');
// });
// app.listen(3000);

// const express = require("express");
// const app = express();

// // Middleware starts
// app.use(function (req, res, next) {
//   console.log("Middleware allowed");
//   next();
// });
// // Middleware ends

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// // Routing starts
// app.get("/about", function (req, res) {
//   res.send("About Us");
// });
// // Routing ends

// // Error Handling starts
// app.get("/profile", function (req, res,next) {
//   return next(new Error("Something went wrong!"));
// });
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Somthing broke!");
// });
// // Error Handling ends

// app.listen(3000);