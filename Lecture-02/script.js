// 1. Introduction to Node js
// 2. Installing Node.js and npm
//      -- node & npm
//      -- working with node & npm
//      -- npm init
//      -- node basic usage
// 3. Working with modules
// 4. File system operations
// 5. Understanding HTTP module

// const fs = require("fs");

// fs.writeFile('het.txt', 'Ta kaise ho aap log ?', function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("Done");
//     }
// })

// fs.appendFile('het.txt', ' Ache hai hum', function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("Done");
//     }
// })

// fs.rename("het.txt", "hey.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Renamed");
//   }
// });

// fs.copyFile("hey.txt", "./copy.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Copied");
//   }
// });

// fs.unlink("./copy.txt", function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Removed");
//   }
// });

// fs.rm("./copy", {recursive:true}, function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Removed");
//   }
// });

// fs.readFile("hey.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// const http=require('http');

// const server = http.createServer(function(req, res){
//     res.end('Hello World!');
// });
// server.listen(3000);
