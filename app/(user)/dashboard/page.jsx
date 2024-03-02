import Blog from "@/components/Home/Blog";
import Carosel from "@/components/Home/Carosel";
import Home from "@/components/Home/Home";
import Service from "@/components/Home/Service";
import Footer from "@/components/Home/footer";

const page = () => {
  return (
    <>
      <Home />
      <Service />
      <Carosel />
      <Blog />
      <Footer />
    </>
  );
};

export default page;
