import React, { useEffect, useState } from "react";
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
import ListingItems from '../components/ListingItems';
import Testimonial from "../components/Testimonial";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        
        const data = await res.json();
        setOfferListings(data);
        fetchRentListing();
       
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = res.json();
        setRentListings(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data)
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListing();
  }, []);

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
     
      

       {/* listing results for offer, sale and rent */}
       <div className='max-w-8xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10">
        <Carousels />
      </div>
      <div className="">
        <Newsletter />
        <ImageGrid />
        <Timelines />
        <Testimonial />
        <Premium />
        <Footers />
      </div>
    </div>
  );
}
