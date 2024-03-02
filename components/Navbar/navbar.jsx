
import { MdLocalHospital } from "react-icons/md";
import Link from "next/link"
import { Button } from "../ui/button";
const Navbar = () => {
    return (
        <div className={"  bg-[#2770e6] text-black  h-[10vh] flex justify-between items-center px-10"}>
            <div className={" flex gap-3 text-slate-300 items-center text-xl "}><MdLocalHospital color="red" size={40} />Hack4Health</div>
            <div className={" flex gap-3"}>
                <Link href={"/"}>
                    <Button variant="secondary">Home</Button>
                </Link>
                <Link href={"/"}>
                    <Button variant="secondary">About</Button>
                </Link>
                <Link href={"/"}>
                    <Button variant="secondary">Contact</Button>
                </Link>
                <Link href={"/"}>
                    <Button variant="secondary">History</Button>
                </Link>
                <Link href={"/"}>
                    <Button className={" uppercase"} variant="link-plain">Make Appointment</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
