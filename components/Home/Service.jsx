import React from "react";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import Card from "./components/card";
const Service = () => {
    return (
        <div
            className={
                "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff] to-blue-300  w-[100vw]  flex items-start justify-center"
            }
        >
            <div>
                <div className={"flex  justify-center items-center gap-2 text-xl text-slate-900/80 p-10 pb-2  text-[#3991f3]"}><FaHeart color="#3991f3" />Services</div>
                <div className={"flex  justify-center items-center gap-2 text-3xl text-slate-900/80 p-1 font-extrabold "}>Our Features</div>
                <div className={"flex  justify-center items-center gap-4 p-10"}>
                    <Card icon={FaCheckCircle} title={"Appointment Scheduling"} />
                    <Card isColor icon={FaAddressBook} title={"Accurate Assessment"} />
                    <Card icon={FaBookMedical} title={"Structured Report"} />
                    <Card icon={GrYoga} title={"Exercise (YOGA)"} />
                </div>
            </div>
        </div>
    );
};

export default Service;
