// CarouselComponent.jsx
"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Cr = ({ images }) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Cr;
