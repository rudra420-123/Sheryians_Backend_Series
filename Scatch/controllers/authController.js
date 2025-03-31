const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { fullName, email, password } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user) {
      req.flash("error", "User already exists");
      return res.redirect('/');
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.send(err.message);
        } else {
          let user = await userModel.create({
            fullName,
            email,
            password: hash,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User Created Sucessfully");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });
  if (!user) {
    req.flash("error", "Email or Password is incorrect");
    return res.redirect('/');
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token);
      // req.flash("success", "Login successfully");
      return res.redirect('/shop')
    } else {
      req.flash("error", "Email or Password is incorrect");
      return res.redirect('/');
    }
  });
};

module.exports.logoutUser = async function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
};
