const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const productModel = require("../models/productModel");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgColor, panelColor, textColor } = req.body;

    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgColor,
      panelColor,
      textColor,
    });
    req.flash('success', 'Product Created Successfully')
    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
