import React from "react";
import img1 from "@/app/assets/hospital.jpg"
import Image from "next/image";
const Blog = () => {
    return (
        <div
            className={
                "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff] to-blue-300 min-h-[20vh]  w-[100vw]  flex  flex-col items-center justify-center"
            }
        >
            <div className={"flex  justify-center items-center gap-2 text-3xl text-slate-900/80  font-extrabold  pt-10"}>Partners</div>
            <div className={"flex justify-center items-center gap-5 p-10"}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Image src={img1} alt={"img"} width={200} height={200} key={index} className={"rounded-lg"} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
