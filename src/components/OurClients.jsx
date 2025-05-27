import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// Example client logos (replace with your own images)
const clientLogos = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/8.png",
  "/img/9.png",
  "/img/10.png",
  "/img/11.png",
  "/img/12.png",
];

const OurClients = () => {
  // Duplicate the array for seamless infinite effect
  const logos = [...clientLogos, ...clientLogos];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2; // Only half, since we duplicated

    gsap.to(slider, {
      x: -totalWidth,
      duration: 32,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth), // seamless loop
      },
    });
  }, []);

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-extrabold text-center mb-4 text-gray-800 dark:text-white tracking-tight">
          Our Clients
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          We are proud to have worked with a diverse range of clients from
          various industries. Our commitment to excellence and innovation has
          helped our partners achieve outstanding results and lasting
          relationships.
        </p>
        <div className="relative w-full overflow-hidden mb-12">
          <div
            className="our-clients-slider flex items-center gap-16 md:gap-24"
            ref={sliderRef}
            style={{ willChange: "transform" }}
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 h-60 md:w-60 md:h-60 flex items-center justify-center hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden mt-10 mb-10"
                style={{
                  background: "transparent",
                  boxShadow: "none",
                }}
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="object-contain w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            onClick={(e) => {
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
            }}
            to="/all-clients"
            className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurClients;