import React from 'react'

export default function ImageGrid() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((image, index) => (
        <div key={index}>
          <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
