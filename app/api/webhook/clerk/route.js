import { Webhook } from "svix";
import { headers } from "next/headers";

import User from "@/app/database/models/User";
import dbConnect from "@/app/database";
export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook

  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  await dbConnect();
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please addCLERK_ WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;
  console.log(eventType);
  if (eventType === "user.created") {
    try {
      const user = new User({
        externalUserId: payload.data.id,
        username: payload.data.first_name,
        email: payload.data.email_addresses[0].email_address,
      });
      console.log(user);
      const save = await user.save();
      console.log(save);
    } catch (error) {
      console.log(error);
    }
  }

  if (eventType === "user.updated") {
    await User.update({
      where: {
        externalUserId: payload.data.id,
      },
      data: {
        username: payload.data.username,
        imageUrl: payload.data.image_url,
      },
    });
  }

  if (eventType === "user.deleted") {
    await User.delete({
      where: {
        externalUserId: payload.data.id,
      },
    });
  }

  return new Response("", { status: 200 });
}
