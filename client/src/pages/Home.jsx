import React from 'react';
import realEstateImage from '../assets/house4.jpg'

export default function Home() {
  return (
// {/* <div
//   className='relative h-[700px]  w-screen'
//   style={{
//     background: `url(${realEstateImage})`,
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//   }}
// >
  
// {/* <div className="absolute bottom-[45px] lg:bottom-10  inset-0  bg-opacity-70"></div> */}
// <h1 className="text-black ">
// "Unlock Your Dream Home: The Unmatched Favorite of Many!"
// </h1>

// </div> 

// */}
<div
      className="relative bg-cover bg-cente h-[700px] lg:h-[500px] w-screen "
      style={{ backgroundImage: `url(${realEstateImage})`}}
    >
      <div className="absolute inset-0 bg-opacity-70"></div>
      <div className="absolute inset-40 flex items-center justify-center">
        <div className="text-center">
        <h1 className="font-bold text-6xl p-5 bg-slate-100 rounded-xl mb-6">
            <span className="text-blue-800 text-6xl">
              Dream
              <span className="text-blue-300  uppercase">Zone</span>
            </span>
            <span className="text-blue-300 text-4xl">.com</span>
          </h1>
          <p className="text-slate-600 bg-slate-200 text-lg font-semibold mb-8 rounded-lg p-2">
          "Unlock Your Dream Home: The Unmatched Favorite of Many!".....
          </p>
          <button className="bg-blue-400 text-white font-normal px-8 py-2 rounded hover:opacity-90 uppercase ">
            Get Started
          </button>
        </div>
      </div>
    </div>

    
  )
}
