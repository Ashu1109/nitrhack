"use client";
import Image from "next/image";
// import file1 from "./uploads/file.pdf"
import { FaPhone } from "react-icons/fa";
import ProfileImg from "./uploads/profile.jpg";
import { IoMdHome } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import PieChart from "./Piechart"
import axios from "axios";
import { WorkflowExecutor } from "@io-orkes/conductor-javascript";
import {
  OrkesApiConfig,
  orkesConductorClient,
} from "@io-orkes/conductor-javascript";
import { UserProfile } from "@clerk/nextjs";

const config = {
  keyId: "de70c6bb-b56e-4790-99ae-29009750dbd8", // optional
  keySecret: "zceoDIjzsjtpMWESupsOMv80B0VFBGGADsn052uHuxUAcSY1", // optional
  refreshTokenInterval: 0, // optional (in milliseconds) defaults to 30 minutes (30 * 60 * 1000). 0 no refresh
  serverUrl: "https://play.orkes.io/api",
};

const clientPromise = orkesConductorClient(config);

const Profile = ({ params }) => {
  const data = async () => {
    const client = await clientPromise;
    const excutor = new WorkflowExecutor(client);
    const data_final = await excutor.getExecution(
      "1dade930-f739-4a2e-93ed-fdd411c35d75"
    );
    return data_final;
  };

  const [display, setDisplay] = useState(false);
  const [arr, setArr] = useState([
    {
      firstName: "Sachin",
      lastName: "kumar",
      phone: "7845961235",
      mail: "sachin@123.com",
      Address1: "Jamshedpur",
      Address2: "Jharkhand",
      gender: "Male",
      age: 20,
      year: 1,
      last: "28:02:2024",
      next: "2:03:2024",
      Staus: "Average",
    },
  ]);

  // useEffect(() => {
  //   const get = async () => {
  //     try {
  //       const data = await axios.get("/api/getuser");
  //       setArr(data.data.data.reverse());

  //       console.log(arr, data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   get();
  // }, []);
  useEffect(() => {
    data()
      .then((res) => setArr(res.data.data))
      .catch((err) => console.log(err));
  });
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
        <div className=" pt-4 pl-2"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-blue-500 p-5 font-extrabold">
        Patient details
      </h1>
      <UserProfile />

      <div className="flex w-full p-4 flex-col gap-2 ">
        <div className=" p-4 w-full border-2 border-black rounded-xl ">
          <h1 className="text-xl pt-4 font-bold">Overview :</h1>
          <div className="flex flex-col  pt-1 items-center gap-3">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className=" text-gray-800 text-xl">Gender:</h1>
                <span className=" text-gray-400 text-md">
                  {arr[0].gender}
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className=" text-gray-800 text-xl">Age:</h1>
                <span className=" text-gray-400 text-md">{arr[0].age}</span>
              </div>
              <div className="flex flex-col">
                <h1 className=" text-gray-800 text-xl">Year</h1>
                <span className=" text-gray-400 text-md">{arr[0].year} </span>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className=" text-gray-800 text-xl">Last visit</h1>
                <span className=" text-gray-400 text-md">
                  {/* {arr[0].last} */}
                  02/03/2024
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-800 text-xl">Next visit</h1>
                <span className=" text-gray-400 text-md">
                  {/* {arr[0].next} */}
                  05/03/2024
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className=" text-gray-800 text-xl">Status:</h1>

                {/* {arr[0].Staus} */}


                {arr[0].doctor < 40 && <span className=" text-green-500  text-md">Good</span>}
                {arr[0].doctor <= 65 && arr[0].doctor >= 40 && <span className=" text-yellow-500  text-md">average</span>}
                {arr[0].doctor >= 65 && <span className=" text-red-500  text-md">Severe</span>}

              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 w-full border-2 border-black rounded-xl ">
          <div className=" w-[20dh]">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
