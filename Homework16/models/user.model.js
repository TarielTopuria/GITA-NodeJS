const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: Number,
    email: {
      type: String,
      required: true,
    },
    description: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModel", userSchema);
