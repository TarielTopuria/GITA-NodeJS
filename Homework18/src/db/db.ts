import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Db connection is successful");
  } catch {
    console.log("Connection error");
  }
};

export default connectDb;