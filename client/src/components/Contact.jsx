import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col">
          <p className="py-3">
            Contact <span className="text-blue-600 font-medium">{landlord.username}</span> {""} for {""}{" "}
            <span className="text-blue-800 font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            cols="30"
            value={message}
            onChange={onChange}
            placeholder="Enter your Message here..."
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 mt-4"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
