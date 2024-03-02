import dbConnect from "@/app/database";
import Assessment from "@/app/database/models/Assessment";
import { getAuth } from "@clerk/nextjs/server";
dbConnect();
export async function POST(req) {
  const { formData } = await req.json();
  console.log(formData);
  const { userId } = getAuth(req);
  const assessment = new Assessment({
    externalUserId: userId,
    firstName: formData.firstName,
    lastName: formData.lastName,
    age: formData.age,
    familyIncome: formData.familyIncome,
    cgpa: formData.cgpa,
    majorIncidence: formData.major,
    gender: formData.gender,
    year: formData.year,
  });
  console.log(assessment);
  const save = await assessment.save();
  console.log(save);
  return new Response(userId, { status: 200 });
}
