"use server"
import { auth } from '@clerk/nextjs';
import dbConnect from "@/app/database"
import Assessment from "@/app/database/models/Assessment";
import { handleError } from "../utils"


export const addAssessment = async ({ firstName, lastName, age, year, familyIncome, majorIncidence, cgpa, gender }) => {
    console.log("hello add assessment called")
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId;
    console.log(userId);
    try {
        await dbConnect();
        const newAssessment = await Assessment.create({ userId, firstName, lastName, age, year, familyIncome, majorIncidence, cgpa, gender })
        return JSON.parse(JSON.stringify(newAssessment))
    }
    catch (error) {
        handleError(error);
    }
}