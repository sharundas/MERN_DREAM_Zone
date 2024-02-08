import React from 'react';
import { carouselImage } from '../constants';
import House2 from '../assets/carousel_image/house_3.jpg'

export default function ImageGrid() {
 

  return (
    <div className="grid grid-cols-2 gap-2">
       {carouselImage.map(item => (
        <img
          key={item.id} // It's a good practice to include a unique key when mapping arrays in React
          src={item.image}
          alt={`House ${item.id}`}
        />
      ))}
    </div>
    
  );
}
