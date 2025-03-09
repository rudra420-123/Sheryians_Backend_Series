const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
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
