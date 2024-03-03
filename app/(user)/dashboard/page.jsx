import Blog from "@/components/Home/Blog";
import Carosel from "@/components/Home/Carosel";
import Home from "@/components/Home/Home";
import Service from "@/components/Home/Service";
import Test from "@/components/Home/Test";
import Footer from "@/components/Home/footer";

const page = () => {
  return (
    <>
      <Home />
      <Service />
      <Carosel />
      <Blog />
      <Footer />
      <Test />
    </>
  );
};

export default page;
