// 1. mongodb Install
// 2. mongoose Install
//    -- npm i mongoose
// 3. mongodb connection
// 4. schema
// 5. model
// 6. crud
// 7. ORM --> Object Relational mapping
// 8. ODM --> Object Document mapping

const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a new user
app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "John",
    email: "john.doe@example.com",
    username: "Doe",
  });
  res.send(createduser);
});

// Read all users
app.get("/read", async (req, res) => {
  let allusers = await userModel.find();
  res.send(allusers);
});

// Update a user
app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "Doe" },
    { name: "Rudra Prasad Nayak" },
    { new: true }
  );
  res.send(updateduser);
});

// Delete a user
app.get("/delete", async (req, res) => {
  let deletedusers = await userModel.findOneAndDelete();
  res.send(deletedusers);
});

app.listen(3000);
