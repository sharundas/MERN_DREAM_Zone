import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Carousel } from "flowbite-react";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { Button, Spinner } from "flowbite-react";
import { Alert,Badge} from "flowbite-react";

import Contact from "../components/Contact";

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contact, setContact] = useState(false)

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success == false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
       

        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  return (
    <main className="">
      {loading && (
        <Button className="text-center my-7 text-2xl">
          <Spinner aria-label="Spinner button example" size="sm" />
          <span className="pl-3">Loading...</span>
        </Button>
      )}
      {error && (
        <Alert color="warning" withBorderAccent>
          <span text-center my-7 text-2xl>
            <span className="font-medium">Sorry!</span> Something Thing Went
            Wrong
          </span>
          <Link to="/home" Go Back Home></Link>
        </Alert>
      )}
      {listing && (
        <div className="">
          <div className="h-56 lg:h-64 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel leftControl="" rightControl="">
              {listing &&
                listing.imageUrls &&
                listing.imageUrls.length > 0 &&
                listing.imageUrls.map((url, index) => (
                  <div key={index} className="">
                    <img src={url} alt={`Image ${index}`} />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="flex items-center flex-col justify-center mt-6">
            <p className="">
              {listing.name} - ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
            <FaMapMarkerAlt className='text-green-700' />

              {listing.address}
            </p>
            <div className='flex items-center justify-center gap-4 mt-6'>
            <Badge className="px-10 py-3  bg-blue-700 text-white rounded-md">
            {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
            </Badge>
              {listing.offer && (
                
                 
                 <Badge className="px-10 py-3 bg-green-400 text-white rounded-md"> ${+listing.regularPrice - +listing.discountPrice} <span>OFF</span>
                 </Badge>
              )}
            </div>
            <p className="">Description : {listing.description}</p>
            <ul className="">
              <li className="flex items-center gap-1 whitespace-nowrap">
              <FaBed className='text-lg' />
              {listing.bedrooms > 1 ? `${listing.bedrooms} beds`: `${listing.bedrooms} bed`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
              <FaBath className='text-lg' />
              {listing.bathrooms > 1 ? `${listing.bathrooms} baths`: `${listing.bathrooms} bath`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
              <FaParking className='text-lg' />
              {listing.parking ? 'Parking Spot': 'No Parking'}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
              <FaChair className='text-lg' />
              {listing.furnished ? 'Furnished': 'UnFurnished'}
              </li>
              {currentUser && listing.userRef !== currentUser._id && !contact &&  (
                <button onClick={()=> setContact(true)} className="bg-blue-700 text-white rounded-lg uppercase hover:opacity-95 p-3">
                  Contact the Owner
                </button>
              )}
              {contact && <Contact listing={listing} />}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
