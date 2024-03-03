import dbConnect from "@/app/database";
import User from "@/app/database/models/User";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  await dbConnect();

  try {
    const userId = await req.json(); // Assuming userId is sent in the request body
    console.log(userId.userId);
    const data = await User.updateOne(
      {
        externalUserId: userId.userId,
      },
      {
        role: "doctor",
      }
    );

    // Check if the update operation was successful
    if (data.ok === 1) {
      return NextResponse.json({
        message: "User role updated successfully",
        data,
      });
    } else {
      return NextResponse.json({ error: "Failed to update user role", data });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
