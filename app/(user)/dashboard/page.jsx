import Image from "next/image";
import Doctor from "@/app/assets/doctor.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <div
      className={
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#27c2e6] to-blue-500 h-[90vh] w-[100vw]  flex items-center"
      }
    >
      <div className={"text-5xl  ml-20"}>
        <div className={" text-white "}>
          <span className={" font-extrabold"}>TAKE</span> CARE{" "}
          <span className={" font-extrabold"}>OF YOUR</span>
        </div>
        <div className={" text-white"}>
          HEALTH <span className={" font-extrabold"}>NOW</span>.
        </div>
        <div className={" flex gap-7 py-5 text-black"}>
          <Link href={"/sign-in"}>
            <Button
              variant={"outline"}
              className=" text-lg text-white bg-sky-600"
            >
              Features
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button variant={"outline"} className=" text-lg  bg-blue-100">
              Assessment
            </Button>
          </Link>
        </div>
      </div>

      <div className={" absolute  top-60 right-24"}>
        <Image src={Doctor} alt={"img"} width={700} />
      </div>
    </div>
  );
};

export default page;
