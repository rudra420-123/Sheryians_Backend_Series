const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    userName: "Rudra",
    email: "rudra@gmail.com",
    age: 20,
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postData: "First post",
    user: "6774ee446537c4ac80bca6c6",
  });
  let user = await userModel.findOne({ _id: "6774ee446537c4ac80bca6c6" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
