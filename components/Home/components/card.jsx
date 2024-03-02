import { cn } from "@/lib/utils";
import React from "react";
const Card = ({ isColor = false, icon: Icon, title }) => {
    return (
        <div
            className={cn(
                "flex flex-col  justify-start items-center min-h-[30vh]   gap-2 p-9 rounded-xl  "
                , isColor ? " bg-blue-100" : "bg-[#3a8df3] ")}
        >
            <Icon size={60} className={cn(isColor ? "text-black " : "  text-white/80")} />
            <div className={cn("break-words text-center p-2 w-[12vw] text-xl font-semibold ", isColor ? " text-blue-600" : "text-white/80")}>{title}</div>
        </div>
    );
};

export default Card;
