import { Link } from "react-router-dom";
import lola from "../assets/images/lola.png";
import {
  faClock,
  faPhone,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <div className="min-h-fit lg:min-h-[45vh] w-full mx-auto px-2 mt-6 bg-black text-white flex justify-center items-center">
        <div className=" max-w-7xl grid grid-cols-1 lg:grid-cols-4 px-6 gap-12 place-items-center lg:place-items-start text-center lg:text-left">
          <div>
            <Link to={"/"}>
              <img
                className="w-32 sm:w-40 lg:w-48 object-contain mx-auto lg:mx-0"
                src={lola}
                alt="The best Salon"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-xl" style={{ fontFamily: "Zalando" }}>
              GET IN TOUCH
            </h1>
            <div className="flex gap-2 items-center mt-4 justify-center lg:justify-start">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+918000331996">
                <p className="hover:text-fuchsia-600">9899168137</p>
              </a>
            </div>
            <div className="flex gap-2 items-center mt-4 justify-center lg:justify-start">
              <FontAwesomeIcon icon={faSearchLocation} className="text-" />
              <p className="">Rich Looks Salon <br /> Tunwal Plaza, Bajaj Rd</p>
            </div>
          </div>

          <div>
            <h1 className="text-xl" style={{ fontFamily: "Zalando" }}>
              OUR HOURS
            </h1>
            <div className="flex gap-2 mt-4 ">
              <div>
                <FontAwesomeIcon icon={faClock} className="" />
              </div>
              <p>
                <span>Mon: 11AM - 8PM</span> <br />
                <span>Tues: 10AM - 7PM</span>
                <br />
                <span>Wed: 10AM - 8PM</span>
                <br />
                <span>Thurs: 12PM - 8PM</span>
                <br />
                <span>Fri: 10AM - 6PM</span>
                <br />
                <span>Sat: 9AM - 5PM</span>
                <br />
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl" style={{ fontFamily: "Zalando" }}>
              LEARN MORE
            </h1>

            <div className="mt-4">
              <Link>
                <span>Our Blog</span> <br />
              </Link>

              <Link>
                <span>Model Program</span> <br />
              </Link>
              <Link>
                <span>Join Our Team</span> <br />
              </Link>
              <Link>
                <span>Policies</span> <br />
              </Link>
              <Link>
                <span>Emerging Designers</span> <br />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
