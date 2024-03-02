"use client";
import Image from "next/image";
// import file1 from "./uploads/file.pdf"
import { FaPhone } from "react-icons/fa";
import ProfileImg from "./uploads/profile.jpg";
import { IoMdHome } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import PieChart from "./Piechart"
const Profile = ({params}) => {
  const {id}=params;
    
  const [display, setDisplay] = useState(false);
  
  const arr = [
    {
        "Name":"Sachin kumar",
        "Phone":"7845961235",
        "mail":"sachin@123.com",
        "Address1":"Jamshedpur",
        "Address2":"Jharkhand",
        "Gender":"Male",
        "Age":20,
        "Semester":1,
        "last":"28:02:2024",
        "next":"2:03:2024",
        "Staus":"Average"
    },
    {
        "Name":"Sachin kumar",
        "Phone":"7845961235",
        "mail":"sachin@123.com",
        "Address1":"Jamshedpur",
        "Address2":"Jharkhand",
        "Gender":"Male",
        "Age":20,
        "Semester":1,
        "last":"28:02:2024",
        "next":"2:03:2024",
        "Staus":"Average"
    },
    {
        "Name":"Sachin kumar",
        "Phone":"7845961235",
        "mail":"sachin@123.com",
        "Address1":"Jamshedpur",
        "Address2":"Jharkhand",
        "Gender":"Male",
        "Age":20,
        "Semester":1,
        "last":"28:02:2024",
        "next":"2:03:2024",
        "Staus":"Average"
    },
    {
        "Name":"Sachin kumar",
        "Phone":"7845961235",
        "mail":"sachin@123.com",
        "Address1":"Jamshedpur",
        "Address2":"Jharkhand",
        "Gender":"Male",
        "Age":20,
        "Semester":1,
        "last":"28:02:2024",
        "next":"2:03:2024",
        "Staus":"Average"
    },
    {
        "Name":"Sachin kumar",
        "Phone":"7845961235",
        "mail":"sachin@123.com",
        "Address1":"Jamshedpur",
        "Address2":"Jharkhand",
        "Gender":"Male",
        "Age":20,
        "Semester":1,
        "last":"28:02:2024",
        "next":"2:03:2024",
        "Staus":"Average"
    },
  ]
  
  if (display) {
    return (
      <div className=" h-[100dvh] flex-col bg-gradient-to-r flex gap-3  from-cyan-400 to-emerald-500">
        <div className=" flex justify-between items-center w-full ">
          <span className=" text-3xl pl-3 font-bold text-blue-700">
            All pdfs
          </span>
          <button
            type="button"
            onClick={() => {
              setDisplay(false);
            }}
            className="text-white bg-gradient-to-r from-blue-500 flex gap-2 mt-2 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <RxCross2 />
            Close
          </button>
        </div>
        <div className=" pt-4 pl-2">
          
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-blue-500 p-5 font-extrabold">
        Patient details
      </h1>
      <div className="flex">
        <div className="flex p-4 flex-col  gap-2 ">
          <div className=" p-4 border-2 border-black rounded-xl ">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
              <Image
                className=" overflow-hidden rounded-[100%]"
                src={ProfileImg.src}
                width={100}
                height={100}
              />
              <h1 className="text-3xl font-bold">{arr[id].Name}</h1>
            </div>
            <h1 className="text-xl pt-4 font-bold">Contact details :</h1>
            <div className="flex pt-1 items-center gap-3">
              <FaPhone className="text-2xl text-cyan-400" />
              <h1 className="text-xl font-semibold text-gray-400">
              {arr[id].Phone}
              </h1>
            </div>
            <div className="flex pt-1 items-center gap-3">
              <HiOutlineMail className=" text-2xl font-extrabold text-cyan-400" />
              <h1 className="text-xl font-semibold text-gray-400">
              {arr[id].mail}
              </h1>
            </div>
            <div className="flex pt-1 items-center gap-3">
              <IoMdHome className=" text-2xl font-extrabold text-cyan-400" />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-400">
                {arr[id].Address1}
                </h1>
                <h1 className="text-xl font-semibold text-gray-400">
                {arr[id].Address2}
                </h1>
              </div>
            </div>
          </div>
          <div className=" p-4 border-2 border-black rounded-xl ">
            <h1 className="text-3xl pb-2 pt-4 font-bold">Latest results : </h1>
            <div className="flex pt-1 items-center gap-3">
              <FaFile className="text-2xl text-cyan-400" />
              <h1 className="text-xl font-semibold text-gray-800">test.pdf</h1>
            </div>
            <div className="flex pt-1 items-center gap-3">
              <FaFile className="text-2xl text-cyan-400" />
              <h1 className="text-xl font-semibold text-gray-800">test2.pdf</h1>
            </div>
            <div className="flex pt-4 items-center gap-3">
              
              <button
                type="button"
                onClick={() => setDisplay(true)}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4 flex-col gap-2 ">
          <div className=" p-4 w-full border-2 border-black rounded-xl ">
            <h1 className="text-xl pt-4 font-bold">Overview :</h1>
            <div className="flex flex-col  pt-1 items-center gap-3">
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col">
                  <h1 className=" text-gray-800 text-xl">Gender:</h1>
                  <span className=" text-gray-400 text-md">{arr[id].Gender}</span>
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-gray-800 text-xl">Age:</h1>
                  <span className=" text-gray-400 text-md">{arr[id].Age}</span>
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-gray-800 text-xl">Semester:</h1>
                  <span className=" text-gray-400 text-md">{arr[id].Semester} </span>
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col">
                  <h1 className=" text-gray-800 text-xl">Last visit</h1>
                  <span className=" text-gray-400 text-md">{arr[id].last}</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-800 text-xl">Next visit</h1>
                  <span className=" text-gray-400 text-md">{arr[id].next}</span>
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-gray-800 text-xl">Status:</h1>
                  <span className=" text-gray-400 text-md">{arr[id].Staus}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4 w-full border-2 border-black rounded-xl ">
            <div className=" w-[20dh]"><PieChart /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
