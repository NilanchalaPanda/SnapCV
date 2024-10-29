import mongoose from "mongoose";

export async function connectToDb() {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to MongoDB");
    return connection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", (err as Error).message);
    throw err;
  }
}
