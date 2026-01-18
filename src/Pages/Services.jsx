import { Link } from "react-router-dom";
import Card from "../Components/Card-Comp";
import { Navbar } from "../Components/Navbar";
import service_1 from "../assets/images/service-1.webp";
import service_2 from "../assets/images/service-2.jpg";
import service_3 from "../assets/images/service-3.webp";

export const Services = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="
          services-bg
          min-h-[35vh] sm:min-h-[40vh] lg:min-h-[45vh]
          w-full
          bg-center bg-cover
          text-amber-50
          flex justify-center items-center
          text-center
          px-4
        "
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider"
          style={{ fontFamily: "Zalando" }}
        >
          SERVICES
        </h1>
      </div>

      {/* TEXT SECTION */}
      <div className="max-w-3xl mx-auto w-full text-center mt-16 px-4">
        <p
          className="text-base sm:text-lg md:text-xl text-gray-700"
          style={{ fontFamily: "Bebas Neue" }}
        >
          Lola Hair Studio, located in Cambridge, MA, is a boutique salon
          offering exclusive services designed to elevate your style. Our
          talented team specializes in precision designer haircuts, balayage,
          expert hair color, and premium Bellami hair extensions.
        </p>

        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700"
          style={{ fontFamily: "Bebas Neue" }}
        >
          Each appointment begins with a personalized consultation to understand
          your goals and create a look that fits your lifestyle. Using
          high-quality products and advanced techniques, we ensure your hair
          stays healthy while achieving beautiful, lasting results.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div
        className="
          max-w-6xl mx-auto
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8
          mt-16 mb-16
          px-6
        "
      >
        <Link to="/gallery">
          <Card image={service_1} title="Cuts & Color" />
        </Link>
        <Link to="/gallery">
          <Card image={service_2} title="Scalp Wellness" />
        </Link>
        <Link to="/gallery">
          <Card image={service_3} title="Treatment" />
        </Link>
      </div>
    </>
  );
};
