const { default: mongoose } = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db connection is successful");
  } catch {
    console.log("Connection error");
  }
};
