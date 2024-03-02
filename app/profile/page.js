"use client";
import Image from "next/image";
import ProfileImg from "./uploads/profile.jpg"
const Profile = () => {
  return (
    <div className="flex bg-gradient-to-r from-cyan-300 to-blue-400 max-h-full">
      <div className=" w-40 flex-1 items-center p-2 h-full  bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 ">
      <Image src={ProfileImg} className=" rounded-full items-center justify-center  mt-5" width={100} height={50}/>
      <h2 className=" font-bold text-lg">Sachin kumar</h2>
      </div>
      <div className=" w-[80vw]   ">sir</div>
    </div>
  );
};

export default Profile;
