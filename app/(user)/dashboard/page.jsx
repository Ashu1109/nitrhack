import Image from "next/image";
import Doctor from "@/app/assets/doctor.png";
const page = () => {
  return (
    <div
      className={
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#27c2e6] to-blue-500 h-[100vh] w-[100vw] flex justify-center items-center"
      }
    >
      {/* <Image src={Doctor} alt={"img"} width={400} /> */}
    </div>
  );
};

export default page;
