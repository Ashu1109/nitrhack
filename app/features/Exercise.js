"use client";
import Cr from "./Cr";
import Er from "./Er";
const Exercise=()=>{
    const carouselImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  const exercises = [
    { name: 'Exercise 1', description: 'Description 1', image: 'exercise1.jpg' },
    { name: 'Exercise 2', description: 'Description 2', image: 'exercise2.jpg' },
    // Add more exercises here
  ];

  return (
    <div className="container mx-auto">
      <Cr images={carouselImages} />
      <Er exercises={exercises} />
    </div>
  );
}
export default Exercise;
