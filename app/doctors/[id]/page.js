"use client";
import Image from "next/image";
import ProfileImg from "./uploads/profile.jpg";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your_publishable_key");

const handlePayment = async () => {
  const response = await fetch("/your-server-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Include any necessary payment data here
    }),
  });

  const session = await response.json();

  // Redirect the user to Stripe Checkout
  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error(error);
    }
  }
};

import { PiRocket } from "react-icons/pi";
const Doctor = ({ params }) => {
  const { id } = params;
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await stripePromise;
      setStripe(stripe);
    };

    initializeStripe();
  }, []);
  const arr = [
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 500,
    },
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 500,
    },
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 400,
    },
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 400,
    },
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 400,
    },
    {
      Name: "Sachin kumar",
      Edu: "MBBS,MD",
      Exp: 12,
      Phone: "7845961235",
      mail: "sachin@123.com",
      rating: 4.2,
      price: 300,
    },
  ];
  return (
    <div className=" flex p-8 gap-4 min-h-[100dvh] bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div className=" p-4 border-2 h-[50dvh] border-black rounded-xl ">
        <div className="flex flex-col gap-4 text-center justify-center items-center">
          <Image
            className=" overflow-hidden rounded-[100%]"
            src={ProfileImg.src}
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold">{arr[id].Name}</h1>
        </div>
        <h1 className="text-xl pt-4 font-bold">Details:</h1>
        <div className="flex pt-1 items-center gap-3">
          <MdOutlineCastForEducation className="text-2xl text-cyan-900" />
          <h1 className="text-xl font-semibold text-gray-800">{arr[id].Edu}</h1>
        </div>
        <div className="flex pt-1 items-center gap-3">
          <PiRocket className="text-2xl text-cyan-900" />
          <h1 className="text-xl font-semibold text-gray-800">
            {arr[id].Exp}
            <span> Years</span>
          </h1>
        </div>
        <div className="flex pt-1 items-center gap-3">
          <h1 className="text-xl pl-9 font-semibold text-gray-800">
            {arr[id].rating}
          </h1>
          <FaStar className="text-2xl text-yellow-400" />
        </div>
        <div className="flex pt-1 items-center gap-3">
          <FaPhone className="text-2xl text-cyan-900" />
          <h1 className="text-xl font-semibold text-gray-800">
            {arr[id].Phone}
          </h1>
        </div>
        <div className="flex pt-1 items-center gap-3">
          <HiOutlineMail className=" text-2xl font-extrabold text-cyan-900" />
          <h1 className="text-xl font-semibold text-gray-800">
            {arr[id].mail}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className=" p-4 border-2 border-black rounded-xl ">
          <h1 className="text-xl font-semibold text-gray-800">
            What people say about {arr[id].Name} ...
          </h1>
          <div className="flex gap-2 ">
            <div className=" flex bg-gradient-to-r from-blue-500 to-sky-600 flex-col p-2 border-2 border-black rounded-xl">
              <h1 className="text-xl font-bold text-black">Sachin </h1>
              <p className="text-lg font-semibold text-gray-800">
                &quot;Dr. {arr[id].Name} offers compassionate care and expertise
                in treating depression, ADHD, and anxiety. With a holistic
                approach, they provide personalized treatment plans, guiding
                patients towards healing and empowerment. Dedicated to restoring
                mental well-being, Dr. {arr[id].Name} brings hope and relief to
                those seeking balance and resilience.&quot;
              </p>
            </div>
            <div className=" flex bg-gradient-to-r from-blue-500 to-sky-600 flex-col p-2 border-2 border-black rounded-xl">
              <h1 className="text-xl font-bold text-black">Sachin </h1>
              <p className="text-lg font-semibold text-gray-800">
                &quot;Dr. {arr[id].Name} offers compassionate care and expertise
                in treating depression, ADHD, and anxiety. With a holistic
                approach, they provide personalized treatment plans, guiding
                patients towards healing and empowerment. Dedicated to restoring
                mental well-being, Dr. {arr[id].Name} brings hope and relief to
                those seeking balance and resilience.&quot;
              </p>
            </div>
            <div className=" flex bg-gradient-to-r from-blue-500 to-sky-600 flex-col p-2 border-2 border-black rounded-xl">
              <h1 className="text-xl font-bold text-black">Sachin </h1>
              <p className="text-lg font-semibold text-gray-800">
                &quot;Dr. {arr[id].Name} offers compassionate care and expertise
                in treating depression, ADHD, and anxiety. With a holistic
                approach, they provide personalized treatment plans, guiding
                patients towards healing and empowerment. Dedicated to restoring
                mental well-being, Dr. {arr[id].Name} brings hope and relief to
                those seeking balance and resilience.&quot;
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md hover:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            Pay Now
            <div className="flex items-center">
              <LuIndianRupee />
              {arr[id].price}
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Doctor;
