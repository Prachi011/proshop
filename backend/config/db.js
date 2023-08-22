import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
