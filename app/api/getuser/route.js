import dbConnect from "@/app/database";
import Assessment from "@/app/database/models/Assessment";
import User from "@/app/database/models/User";
import { NextResponse } from "next/server";
export async function GET(req) {
    await dbConnect();

    try {
        const data = await Assessment.find();
        console.log("data :",data);
        // Check if the update operation was successful
        if (data) {
            return NextResponse.json({
                success: true,
                data,
            });
        } else {
            return NextResponse.json({ error: "Failed", data });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" });
    }
}
