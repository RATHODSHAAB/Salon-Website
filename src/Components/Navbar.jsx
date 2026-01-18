import { Link } from "react-router-dom";
import { useState } from "react";
import lola from "../assets/images/lola.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-black w-100% relative z-50">
      {/* TOP BAR */}
      <div className="max-w-9xl  px-4 h-30 flex  justify-around relative">
        {/* LOGO */}
        <Link to="/">
          <img src={lola} alt="Logo" className="h-36 mt-1" />
        </Link>

        {/* Right menu & buttons for Desktop*/}
        <div className="flex items-center gap-6">
          {/* Desktop menu */}
          <div
            className="hidden md:flex items-center gap-10 text-xl font-semibold "
            style={{ fontFamily: "Zalando" }}
          >
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="#">About</Link>
            <Link to="#">Contact</Link>
          </div>

          {/* Desktop button */}
          <div
            className="hidden md:block border border-gray-600 px-4 py-2  hover:bg-white cursor-pointer hover:text-black transition"
            style={{ fontFamily: "Zalando" }}
          >
            Book Appointment
          </div>

          {/* Mobile hamburger / cross */}
          <button
            className=" md:hidden  text-3xl z-50 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Conditonal rendering using useState */}
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-gray-200 flex flex-col items-center justify-center text-black
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ fontFamily: "Zalando" }}
      >
        <Link
          to="/services"
          className="text-2xl py-4"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className="text-2xl py-4"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </Link>
        <Link to="#" className="text-2xl py-4" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="#" className="text-2xl py-4" onClick={() => setIsOpen(false)}>
          Contact
        </Link>

        <div className="border border-gray-600 px-6 py-2 mt-6 hover:cursor-pointer">
          Book Appointment
        </div>
      </div>
    </nav>
  );
};
