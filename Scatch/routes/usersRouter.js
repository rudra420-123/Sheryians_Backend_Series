const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res) => {
  res.send("usersRouter");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
