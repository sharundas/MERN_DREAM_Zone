import React from "react";
import { Carousel } from 'flowbite-react';
import { carouselImage } from "../constants";


export default function Carousels() {
  return (
    <div className="grid h-96 sm:grid-cols-2 grid-col gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
      {carouselImage.map(item => (
        <img
          key={item.id} // It's a good practice to include a unique key when mapping arrays in React
          src={item.image}
          alt={`House ${item.id}`}
        />
      ))}
       
      </Carousel>
      <Carousel indicators={false}>
      {carouselImage.map(item => (
        <img
          key={item.id} // It's a good practice to include a unique key when mapping arrays in React
          src={item.image}
          alt={`House ${item.id}`}
        />
      ))}
      </Carousel>
    </div>
  );
}
