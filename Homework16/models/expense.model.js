const { default: mongoose } = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("expenseModel", expenseSchema);
