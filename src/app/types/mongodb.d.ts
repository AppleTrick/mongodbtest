import { Connection, Mongoose, MongoClient } from "mongoose";

declare global {
  var mongoose: {
    promise: Promise<Connection> | null;
    isConnected: Connection | null;
  };
}
