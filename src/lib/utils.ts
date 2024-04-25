import mongoose from "mongoose";

let connection = global.mongoose;
const DB_URI = process.env.MONGODB_URI || "";

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection?.isConnected) {
      return;
    }
    const db = await mongoose.connect(DB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
