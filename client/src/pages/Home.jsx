import React from "react";
import realEstateImage from "../assets/house4.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Carousels from "../components/Carousels";
import { Avatar, Blockquote } from "flowbite-react";
import ImageGrid from "../components/ImageGrid";
import Timelines from "../components/Timeline";
import Premium from "../components/Premium";
import Footers from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div
      className="flex flex-col  style={{
    backgroundImage: `url(${realEstateImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }} "
    >
      <div
        className="relative bg-cover bg-cente h-[700px] lg:h-[500px] w-screen border-blue-500 border-t-[5px]  mt-1 "
        // style={{ backgroundImage: `url(${realEstateImage})`, backgroundSize: 'cover' }}
        style={{
          backgroundImage: `url(${realEstateImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-opacity-70 "></div>
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
            <Link to="/search">
              <button className="bg-blue-400 text-white font-normal px-8 py-2 rounded hover:opacity-90 uppercase ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* testimonial */}
      {/* <div className="mt-10">
        <figure className="mx-auto max-w-screen-md text-center">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-gray-800">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Avatar
              rounded
              size="xs"
              img="/images/people/profile-picture-5.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-600 dark:text-white">
                Micheal Gough
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at Google
              </cite>
            </div>
          </figcaption>
        </figure>
      </div> */}

      <div className="mt-10">
        <Carousels />
      </div>
      <div className="">
      <Newsletter />
        <ImageGrid />
        <Timelines />
        <Premium />
        <Footers />
      </div>
    </div>
  );
}
