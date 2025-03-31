const mongoose = require("mongoose");
const config = require("config");
const dotenv = require("dotenv");
dotenv.config();

// const dbgr = require('debug')('development:mongoose');

mongoose
  // Using Config
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  // Using .env
  // .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  // .then(() => dbgr("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

module.exports = mongoose.connection;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ MongoDB connected");
//     } catch (error) {
//         console.error("❌ MongoDB connection error:", error);
//         process.exit(1);  // Stop the server if the database connection fails
//     }
// };

// module.exports = connectDB;
