import dbConnect from "@/app/database";
import Assessment from "@/app/database/models/Assessment";
import { getAuth } from "@clerk/nextjs/server";
import axios from "axios";
dbConnect();
export async function POST(req) {
  const { formData } = await req.json();
  console.log(formData);
  const { userId } = getAuth(req);
  const arr = {
    "gender": (formData.gender == "male" ? 1 : 0),
    "age": parseInt(formData.age),
    "income": parseInt(formData.familyIncome),
    "incedence": (formData.majorIncidence.length > 0 ? 1 : 0),
    "cgpa": parseFloat(formData.cgpa),
    "year": parseInt(formData.year)
  }
  const resp = await axios.post(
    "https://b3ac-210-212-2-133.ngrok-free.app/api/predict",
    arr
  );
  console.log("resp:",resp.data)
  // console.log(arr)
  const assessment = new Assessment({
    externalUserId: userId,
    firstName: formData.firstName,
    lastName: formData.lastName,
    age: formData.age,
    familyIncome: formData.familyIncome,
    cgpa: formData.cgpa,
    majorIncidence: formData.majorIncidence,
    gender: formData.gender,
    year: formData.year,
    depression: resp.data.depression * 100,
    anxiety: resp.data.anxiety * 100,
    adhd: resp.data.adhd * 100,
    doctor: resp.data.doctor * 100
  });
  console.log("assessment :",assessment);
  const save = await assessment.save();
  console.log("save :",save);
  return new Response(assessment, { status: 200 });
}
