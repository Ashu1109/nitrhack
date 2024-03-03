import React from "react";
import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.png";
import p4 from "@/public/p4.png";
import Image from "next/image";
const Blog = () => {
  return (
    <div
      className={
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff] to-blue-300 min-h-[20vh]  w-[100vw]  flex  flex-col items-center justify-center"
      }
    >
      <div
        className={
          "flex  justify-center items-center gap-2 text-3xl text-slate-900/80  font-extrabold  pt-10"
        }
      >
        Partners
      </div>
      <div className={"flex justify-center items-center gap-5 p-10"}>
        <Image
          src={p1}
          alt={"img"}
          width={200}
          height={200}
          className={"rounded-lg"}
        />
        <Image
          src={p2}
          alt={"img"}
          width={200}
          height={200}
          className={"rounded-lg"}
        />
        <Image
          src={p3}
          alt={"img"}
          width={200}
          height={200}
          className={"rounded-lg"}
        />
        <Image
          src={p4}
          alt={"img"}
          width={200}
          height={200}
          className={"rounded-lg"}
        />
      </div>
    </div>
  );
};

export default Blog;
