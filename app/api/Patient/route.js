import dbConnect from "@/app/database";
import User from "@/app/database/models/User";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  await dbConnect();

  try {
    const userId = await req.json;
    const data = await User.updateOne(
      {
        externalUserId: userId.userId,
      },
      {
        role: "patient",
      }
    );
    return NextResponse.json({
      message: "User role updated successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
