import React from 'react';
import Timelines from '../components/Timeline' 
import Testimonial from '../components/Testimonial';
import Footers from '../components/Footer';

export default function About() {
  return (
    <div className='p-3 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold text-gray-800 items-center justify-center'>Welcome to  <span className='text-blue-700 text-[26px]'>Dream</span><span className='text-blue-300 text-[28px] uppercase'>Zone</span></h1>
      <p className="text-[16px] text-gray-600">
      We are Aim To find your ideal property is effortless and exhilarating. With an extensive array of listings at your fingertips, explore diverse options tailored to your unique preferences. Seamlessly navigate through neighborhoods, amenities, and property types, aided by intuitive search filters. Whether buying, selling, or renting, our platform empowers you with comprehensive tools and resources. Experience unmatched convenience and reliability as you embark on your real estate journey with us. Trust in our commitment to transparency, integrity, and excellence, ensuring a seamless transaction process. Join countless satisfied clients who have found their dream homes with our trusted guidance. Explore, discover, and make your real estate aspirations a reality with us today."
      </p>
      <div className="p-5 items-center justify-center">
        <h3 className='items-center text-3xl text-gray-700'>Testimonials</h3>
        <Testimonial />
      </div>
     <div className="">
     <Timelines />
     </div>
     <div className="">
      <Footers />
     </div>
    </div>
  )
}
