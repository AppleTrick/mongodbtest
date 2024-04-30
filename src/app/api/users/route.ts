import User from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest) => {
  try {
    connectToDb();
    const users = await User.find();
    console.log(users);
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    throw new Error("유저목록을 가지고 오는 것을 실패함");
  }
};
