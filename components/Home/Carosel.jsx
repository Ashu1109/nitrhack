"use client";
import Image from "next/image";
import Img1 from "@/app/assets/hospital.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Carosel = () => {
  return (
    <div>
      <Carousel
        className=""
        useKeyboardArrows
        showArrows={false}
        showStatus={false}
        swipeable
        transitionTime={800}
        autoPlay
        showThumbs={false}
        infiniteLoop
      >
        <div className="">
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
        <div>
          <img className="p-2 rounded-2xl" src={Img1} alt="Photo" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosel;
