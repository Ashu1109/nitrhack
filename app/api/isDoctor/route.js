import dbConnect from "@/app/database";
import User from "@/app/database/models/User";
import { getAuth } from "@clerk/nextjs/server";
dbConnect();
export async function isDoctor(req) {
  try {
    const { userId } = getAuth(req);
    const { role } = req.json();
    const data = await User.updateOne(
      {
        externalUserId: userId,
      },
      {
        role: role,
      }
    );
    return new Response({ data }).status(200);
  } catch (error) {
    return new Response({ error }).status(400);
  }
}
