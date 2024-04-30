import User from "./model";
import { connectToDb } from "./utils";

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("유저 정보를 가지고 오는데 실패 하였습니다. ");
  }
};
