import mongoose, { Schema, Document, Model } from "mongoose";

interface IExpense extends Document {
  type: string;
  cost: number;
  quantity?: number;
}

const expenseSchema: Schema<IExpense> = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const ExpenseModel: Model<IExpense> = mongoose.model<IExpense>("Expense", expenseSchema);

export default ExpenseModel;
