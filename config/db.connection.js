const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  try {
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
