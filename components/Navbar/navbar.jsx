
import { MdLocalHospital } from "react-icons/md";
import Link from "next/link"
import { Button } from "../ui/button";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div
      className={
        "  bg-[#2770e6] text-black  h-[10vh] flex justify-between items-center px-10"
      }
    >
      <Link
        href={"/dashboard"}
        className={" flex gap-3 text-slate-300 items-center text-xl "}
      >
        <MdLocalHospital color="red" size={40} />
        Hack4Health
      </Link>
      <div className={" flex gap-3 "}>
        <div className={"px-10 flex gap-2 "}>
          <Link href={"/dashboard"}>
            <Button
              className={
                " flex justify-center items-center gap-2 text-white/60 hover:text-black"
              }
              variant="new_Button"
            >
              <FaHome size={"20"} /> Home
            </Button>
          </Link>
          <Link href={"/About"}>
            <Button
              className={
                " flex justify-center items-center gap-2 text-white/60 hover:text-black"
              }
              variant="new_Button"
            >
              <FaCircleInfo size={20} />
              About
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              className={
                " flex justify-center items-center gap-2 text-white/60 hover:text-black"
              }
              variant="new_Button"
            >
              <IoCall size={20} />
              Contact
            </Button>
          </Link>
          <Link href={"/profile"}>
            <Button
              className={
                " flex justify-center items-center gap-2 text-white/60 hover:text-black"
              }
              variant="new_Button"
            >
              <TbReport size={20} />
              Profile
            </Button>
          </Link>
        </div>
        <Link href={"/appointment"}>
          <Button className={" uppercase"} variant="link_plain">
            Make Appointment
          </Button>
        </Link>
      </div>
      <UserButton sign />
    </div>
  );
};

export default Navbar;
