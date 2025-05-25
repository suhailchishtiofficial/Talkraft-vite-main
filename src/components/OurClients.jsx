import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";


// Example client logos (replace with your own images)
const clientLogos = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
  "/img/11.jpg",
  "/img/12.jpg",
];

const OurClients = () => {
  // Duplicate the array for seamless infinite effect
  const logos = [...clientLogos, ...clientLogos];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2; // Only half, since we duplicated

    const tween = gsap.to(slider, {
      x: -totalWidth,
      duration: 28,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth), // seamless loop
      },
    });

    return () => {
      tween.kill();
    };
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
                className="flex-shrink-0 w-50 h-60 md:w-50 md:h-60 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="object-contain w-full h-full p-4"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/all-clients" className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurClients;