// Authentication
// Authorization
// Cookies
// Sessions
// -- Setting Cookies
// -- Use of bcrypt for password encryption and decryption
//    -- Hash (Encryption of my password)
//    -- Salt (Encrypted String for security purpose)
// -- Use of JWT for authentication and authorization

// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// Setting Cookies
// app.get("/", (req, res) => {
//   res.cookie("fullName", "Rudra Prasad Nayak");
//   res.send("done");
// });
// app.get("/read", (req, res) => {
//   console.log(req.cookies)
//   res.send("read page");
// });

// Encryption of password using bcrypt
// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, function(err, salt) {
//     // console.log(salt)
//     bcrypt.hash("Rudra@123", salt, function(err, hash) {
//       console.log(hash)
//       // $2b$10$YyPmYJbb1DQ1qRNBafVzU.Mz5ruO.NPy1M/FEZEmHyzEv51CDRI6K
//     });
//   });
// });

// Decryption of password using bcrypt
// app.get("/", (req, res) => {
// bcrypt.compare("Rudra@123", "$2b$10$YyPmYJbb1DQ1qRNBafVzU.Mz5ruO.NPy1M/FEZEmHyzEv51CDRI6K", function(err, result) {
//   console.log(result)
// });
// });

// Use of JWT for encryption
// app.get("/", (req, res) => {
//   let token = jwt.sign({email:"dipu13562@gmail.com"}, "secret")
//   console.log(token);
//   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcHUxMzU2MkBnbWFpbC5jb20iLCJpYXQiOjE3MzU0Nzc1ODV9.Mnd9bOWW7Sc-Mk5bFOMzYU5y-h_yD54yEIBczCe8wac
//   res.cookie("token", token);
//   res.send("done");
// });

// Use of JWT for decryption
// app.get("/read", (req, res) => {
//   let data= jwt.verify(req.cookies.token, "secret");
//   console.log(data)
//   // { email: 'dipu13562@gmail.com', iat: 1735477986 }
//   res.send("done");
// });

// app.listen(3000);