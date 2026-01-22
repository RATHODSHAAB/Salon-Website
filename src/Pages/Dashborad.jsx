import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../Components/Navbar";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { home_features } from "../Components/images";
import flower_bg from "../assets/images/dashborad/flower-bg.webp";
import outdoor from "../assets/images/dashborad/outdoor.jpg";
import vertical from "../assets/images/dashborad/vertical.jpg";
import { ImagesDiv_home } from "../Components/CompImage";
import { motion } from "framer-motion";
import { MapEmbeded } from "./MapIntegration";
import { Footer } from "../Components/Foooter";

export const Dashborad = () => {
  return (
    <>
      <Navbar />
      <div className="pb-20 md:pb-0">
        {/* This is the for the big screen  */}
        <div
          className=" hidden md:block dashboard-bg max-w-8xl
                min-h-[60vh] md:min-h-[75vh] lg:min-h-[90vh]
                relative text-gray-300"
        >
          {/* TEXT CONTAINER */}
          <div
            className="
          hidden md:block
          absolute
          left-6 md:left-12 lg:left-18
          top-24 md:top-40 lg:top-52
          text-left
        "
            style={{ fontFamily: "Zalando" }}
          >
            {/* SMALL HEADING */}
            <p className="text-2xl md:text-4xl lg:text-6xl mb-4">
              Tailored Hair Artistry
            </p>

            {/* MAIN HEADING */}
            <p className="text-4xl md:text-6xl lg:text-8xl font-bold ">
              WE CARE FOR <br /> YOUR HAIRS
            </p>

            {/* SUB HEADING */}
            <p className="text-lg md:text-2xl lg:text-3xl mt-4 max-w-xl">
              Designer Haircuts, Hair Extensions, & Color Experts
            </p>

            {/* BUTTON */}
            <div className="mt-6 ml-0 md:ml-4">
              <button
                className="
          border border-gray-300
          px-6 py-3 text-lg md:text-xl
          hover:bg-black hover:text-fuchsia-700
          transition-all duration-300
        "
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View  : Just creating first mobile view then at last will develo for the desktop [Responsive]*/}
        <div
          className="md:hidden flex flex-col mt-16  px-6 text-center text-black"
          style={{ fontFamily: "Zalando" }}
        >
          <h1 className="font-bold text-lg tracking-wider leading-relaxed">
            DESIGNER HAIRCUTS, BALAYAGE, BELLAMI HAIR EXTENSIONS, & COLOR
            EXPERTS
          </h1>
          <div className="flex flex-col justify-center tracking-wider text-xl mt-4 gap-2">
            <Link
              className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
              to={"/gallery"}
            >
              BOOK NOW
            </Link>
            <Link
              className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
              to={"/gallery"}
            >
              GALLERY
            </Link>

            <Link
              className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
              to={"/gallery"}
            >
              SERVICES
            </Link>
            <Link
              className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
              to={"/gallery"}
            >
              JOIN OUR TEAM
            </Link>
          </div>
          <hr />
        </div>
        {/* Second page for the molbie view : further add animation: the text only appear when the 
            screeen is scroller with animation */}
        <div className="max-w-xl mx-auto text-center mt-20">
          <h1
            className="text-5xl font-extrabold tracking-wider leading-15 "
            style={{ fontFamily: "Zalando" }}
          >
            LOOK & FEEL
            <br />
            YOUR BEST
          </h1>
          <p
            className="text-pink-700 text-2xl tracking-wider leading-relaxed mt-2 mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            HAIR SALON SIKAR
          </p>
          <p className="text-xl" style={{ fontFamily: "Manrope" }}>
            Rich Look Salon is a boutique salon located on the Cambridge,
            Watertown, and Belmont line, offering a full range of exclusive
            services in a modern, welcoming space. Our talented team specializes
            in precision designer haircuts, dimensional color, balayage, and
            expert hair color tailored to enhance your unique style.
          </p>
          <p className="text-xl mt-4" style={{ fontFamily: "Manrope" }}>
            We also offer premium Bellami hair extensions for added length,
            volume, and versatility. Every appointment begins with a
            personalized consultation to understand your goals and design a look
            that reflects your personality. At Lola Hair Studio, we believe
            great hair inspires confidence every day.
          </p>
        </div>
        {/* Images Page */}
        <div className="w-full flex  flex-col md:flex-col lg:flex-row gap-2 mt-0 md:mt-20 lg:mt-38 ">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex-1 lg:flex-2 mt-20"
          >
            <ImagesDiv_home images={home_features} />
          </motion.div>

          <div className="hidden lg:block md:w-full lg:flex-2 relative overflow-hidden">
            <img src={flower_bg} alt="Book Best Salon in Sikar" />

            {/* TEXT + BUTTON */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-amber-50 z-10">
              <h2
                className="text-9xl font-bold tracking-wider mb-4"
                style={{ fontFamily: "Zalando" }}
              >
                BOOK NOW
              </h2>

              <button
                className="border border-white text-2xl px-8 py-3
                                  hover:bg-white hover:text-black
                                    transition-all duration-300 tracking-wider"
                style={{ fontFamily: "Zalando" }}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-6xl mx-auto mt-20 px-4 mb-10 grid lg:grid-cols-2 ">
            {/* GRID CONTROLLER */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/*1. Image */}
              <div className="w-full">
                <div className="w-full h-70 sm:h-85 md:h-95 lg:h-full overflow-hidden">
                  <img
                    src={outdoor}
                    alt="The best Salon in Sikar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Map Embeded */}
              <div className="w-full">
                <div className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-full overflow-hidden">
                  <MapEmbeded />
                </div>
              </div>
            </div>

            {/* 3. Contact form */}
            <div className="px-8 mt-6 md:mt-1 lg:mt-0">
              <h1 className="text-5xl tracking-wide">Contact Us</h1>
              <p className="text-xl mt-4">
                Lola Hair Studio strives to create a personalized hair salon
                experience for the community of Cambridge MA, Watertown,
                Belmont, Arlington, Boston and surrounding areas.
              </p>
              <div className="mt-4">
                {/*  */}
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  <a href="tel:+918000331996">
                    <p className="text-2xl hover:text-fuchsia-600 font-bold">
                      9899168137
                    </p>
                  </a>
                </div>
                <div className="flex gap-2 mt-4 items-center ">
                  <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                  <p className="text-2xl font-bold">
                    Rich Looks Salon Tunwal Plaza, Bajaj Rd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Meet Out Team */}
        <div
          className="texture-bg min-h-[30vh] md:min-h-[40vh] lg:min-h-screen w-full mt-24 flex justify-center
          items-center px-4"
        >
          <div className="max-w-5xl mx-auto bg-white text-black p-6 mt-6 md:mt-0  md:p-10 shadow-2xl rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src={vertical}
                  alt="The Best Salon in Sikar"
                  className="w-full max-w-sm object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="text-center md:text-left max-w-xl mx-auto">
                <p className="tracking-widest text-sm text-gray-500 text-center">
                  ALL ABOUT
                </p>

                <h1
                  className="text-3xl md:text-4xl font-light mt-3 tracking-wide text-center"
                  style={{ fontFamily: "Zalando" }}
                >
                  RICH LOOK
                </h1>
                <h1
                  className="text-3xl md:text-4xl font-light tracking-widest text-center"
                  style={{ fontFamily: "Zalando" }}
                >
                  SALON
                </h1>

                <p className="mt-6 text-gray-700 leading-6 text-center">
                  At Lola Hair Studio, we are committed to giving every guest
                  the very best experience. Each service is designed to be
                  luxurious, personalized, and perfectly suited to your needs.
                  Your appointment begins with a detailed consultation to
                  understand your goals, whether you’re here for a precision
                  cut, dimensional color, or a customized texture service.
                </p>
                <p className="mt-4 text-gray-700 leading-6 text-center">
                  Our stylists use advanced techniques and high quality products
                  to achieve results that are both beautiful and healthy. Before
                  you leave, we provide expert tips and product recommendations
                  so you can maintain your look at home. We’re truly
                  hair-obsessed and passionate about helping you love your
                  style.
                </p>
                <Link>
                <div className="flex justify-center items-center">
                  <div className="text-center w-50 tracking-wide mt-6 border-2  px-4 text-xl py-4 bg-gray-600 text-white">
                    MEET OUR TEAM
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
           {/* Footer */}
            <div>
              <Footer ></Footer>
            </div>
      </div>

      {/* Footer:- Permanent */}
      {/* BOTTOM FIXED BAR */}
      <div
        className="fixed bottom-0 left-0 w-full z-50
               flex justify-between items-center
               border-t border-gray-300 bg-white
               md:hidden"
        style={{ fontFamily: "Poppins" }}
      >
        {/* Calling Function */}
        <a
          href="tel:+918000331996"
          className="flex-1 flex flex-col items-center py-3 gap-1 hover:bg-gray-200 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faPhone} className="text-xl" />
          <p className="text-sm">Call Now</p>
        </a>

        {/* Location functional button */}
        <a
          href="https://maps.app.goo.gl/BVqPK6CLyMT6rkp47"
          target="_blank"
          className="flex-1 flex flex-col items-center py-3 gap-1 hover:bg-gray-200 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
          <p className="text-sm">Directions</p>
        </a>
        <div
          className="flex-1 flex flex-col items-center py-3 gap-1
                    hover:bg-gray-200 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="text-xl" />
          <p className="text-sm">Book Now</p>
        </div>
      </div>
    </>
  );
};
