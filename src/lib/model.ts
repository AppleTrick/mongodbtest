import mongoose, { Schema } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
