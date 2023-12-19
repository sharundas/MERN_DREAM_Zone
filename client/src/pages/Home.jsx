import React from 'react';
import realEstateImage from '../assets/house4.jpg'

export default function Home() {
  return (
<div
  className='relative h-[700px]  w-screen'
  style={{
    background: `url(${realEstateImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  
{/* <div className="absolute bottom-[45px] lg:bottom-10  inset-0  bg-opacity-70"></div> */}
<h1 className="text-black ">
"Unlock Your Dream Home: The Unmatched Favorite of Many!"
</h1>

</div>

    
  )
}
