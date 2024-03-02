"use client"
import { Button } from "@/components/ui/button";
import axios from "axios"
import { useUser } from "@clerk/clerk-react";
export default function Home() {
  const { user } = useUser();
  console.log(user)
  const handleClickPatient = async () => {
    const data = await axios.post("/api/Patient", { userId: user.id })
    console.log(data)
  }
  const handleClickDoctor = async () => {
    const data = await axios.post("/api/Doctor", { userId: user.id })
    console.log(data)
  }
  return <div className={"flex justify-center items-center w-[100vw] h-[90vh] gap-5"}>
    <Button onClick={handleClickPatient}>
      Patient
    </Button>
    <Button onClick={handleClickDoctor}>
      Doctor
    </Button>
  </div>
}
