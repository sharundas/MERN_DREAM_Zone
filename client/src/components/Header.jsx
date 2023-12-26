import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import SignIn from "../pages/SignIn";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex bg-white border-b-[0.5px] justify-between items-center p-5  top-0 ">
      <div className="w-full flex justify-between items-center max-w-[1440px] mx-auto">
        <Link to="/">
          <h1 className="font-bold text-[24px] sm:text-xl ">
            <span className="text-blue-700 text-[26px]">
              Dream
              <span className="text-blue-300 text-[28px] uppercase">Zone</span>
            </span>
            <span className="text-blue-300">.com</span>
          </h1>
        </Link>

        <form className="md:flex hidden bg-slate-100 p-3 rounded-lg  items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 lg:w-80 "
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="list-none flex-row md:flex hidden gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-blue-600 font-medium text-[18px]"
                  : "text-slate-500 font-medium hover:text-blue- cursor-pointer text-[18px]"
              }`}
              onClick={() => setActive(link.title)}
            >
              <Link to={`/${link.id}`} className="">
                {link.title}
              </Link>
            </li>
          ))}

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-500 font-medium hover:text-blue- cursor-pointer text-[18px] ml-3"></li>
            )}
          </Link>
        </ul>

        {/* Mobile View */}

        <div className="md:hidden flex  justify-start items-center">
          <img
            src={toggle ? Close : Menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer z-30"
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 bg-blue-900 absolute top-0 right-0 w-1/2 h-full  z-20 rounded-bl-xl rounded-br-xl ease-in-out`}
          >
            <ul className="flex flex-1 flex-col  gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-blue-600 font-medium text-[18px]"
                      : "text-slate-100 font-medium hover:text-blue- cursor-pointer text-[18px]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${link.id}`} className="">
                    {link.title}
                  </Link>
                </li>
              ))}
              <Link to="/profile">
                {currentUser ? (
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    onClick={() => setToggle(!toggle)}
                    src={currentUser.avatar}
                    alt="profile"
                  />
                ) : (
                  <li
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    className="text-slate-100 font-medium hover:text-blue- cursor-pointer text-[18px] mb-2 "
                  ></li>
                )}
              </Link>
              <form className="bg-slate-100 p-3 rounded-lg flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent focus:outline-none w-24 h-[20px] sm:w-22"
                />
                <button>
                  <FaSearch className="text-slate-600" />
                </button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
