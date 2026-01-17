import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../Components/Navbar"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


export const Dashborad = () => {
    return (
        <>
        <Navbar />
        <div className="pb-20 md:pb-0">
            {/* This is the for the big screen  */}
        <div className="dashboard-bg max-w-8xl min-h-[90vh] z-0 relative text-gray-300">
            <div className="hidden md:block absolute text-6xl left-18 top-52"
                style={{ fontFamily: "Zalando" }}>
                    Tailored Hair Artistory <br />
                    <p className="text-8xl">
                        WE CARE FOR <br /> YOUR HAIRS
                    </p>
                    <p className="text-3xl">
                        Designer Haircuts, Hair Extensions, & Color Experts
                    </p>
                    <div>
                        <div className="flex gap-8 mt-4 ml-4">
                    <div className="border text-xl broder-gray-600 p-4 hover:cursor-pointer hover:bg-black hover:text-fuchsia-700 hover:border-0">
                        Book Appointment 
                    </div>
                    
                    </div>
                    </div>
            </div> 
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col mt-16 min-h-[85vh]  px-6 text-center text-black"
                style={{ fontFamily: "Zalando" }}>
                <h1 className="font-bold text-lg tracking-wider leading-relaxed">
                    DESIGNER HAIRCUTS, BALAYAGE, BELLAMI HAIR EXTENSIONS, & COLOR EXPERTS
                </h1>
                <div className="flex flex-col justify-center tracking-wider text-xl mt-4 gap-2">
                    <Link className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
                     to={'/gallery'}>
                        BOOK NOW
                    </Link>
                  <Link className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
                     to={'/gallery'}>
                        GALLERY
                    </Link>
                    
                    <Link className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
                     to={'/gallery'}>
                        SERVICES
                    </Link>
                    <Link className="border bg-gray-500 border-gray-500 px-2 py-4 mt-4 cursor-pointer"
                     to={'/gallery'}>
                        JOIN OUR TEAM
                    </Link>
                </div>
                <hr />
            

            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold tracking-wider leading-relaxed "
                style={{ fontFamily: "Zalando" }}>
                LOOK & FEEL YOUR BEST
                </h1>
                <p className="text-pink-700 tracking-wider leading-relaxed mt-2 mb-4"
                style={{ fontFamily: "Poppins" }} >
                    HAIR SALON SIKAR 
                </p>
                <p className="text-lg" 
                 style={{ fontFamily: "Manrope" }}>
                    Rich Look Salon is a boutique salon located on the Cambridge, Watertown, and Belmont line, offering a full range of exclusive services in a modern, welcoming space. Our talented team specializes in precision designer haircuts, dimensional color, balayage, and expert hair color tailored to enhance your unique style.
                </p>
                <p className="text-lg"  
                 style={{ fontFamily: "Manrope" }}>
                    We also offer premium Bellami hair extensions for added length, volume, and versatility. Every appointment begins with a personalized consultation to understand your goals and design a look that reflects your personality. At Lola Hair Studio, we believe great hair inspires confidence every day.
                </p>
            </div>
        </div>
        </div>



















{/* Footer:- Permanent */}
  {/* BOTTOM FIXED BAR */}
  <div
    className="fixed bottom-0 left-0 w-full z-50
               flex justify-between items-center
               border-t border-gray-300 bg-white
               md:hidden"
    style={{ fontFamily: "Poppins" }}>
        {/* Footer: Calling Function */}
        <a href="tel:+918000331996" 
        className="flex-1 flex flex-col items-center py-3 gap-1 hover:bg-gray-200 transition cursor-pointer">
        <FontAwesomeIcon icon={faPhone} className="text-xl" />
        <p className="text-sm">Call Now</p>
        </a>
    
        {/* Location functional button */}
        <a href="https://maps.app.goo.gl/BVqPK6CLyMT6rkp47" target="_blank" 
        className="flex-1 flex flex-col items-center py-3 gap-1 hover:bg-gray-200 transition cursor-pointer">
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
    )
}