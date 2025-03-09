const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cookieParser= require("cookie-parser");
const path = require("path");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/db");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
