import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

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

const AllClients = () => {
  const gridRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Our Clients
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Here is a gallery of all our valued clients. We are grateful for their
          trust and partnership.
        </p>
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-10"
        >
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center aspect-square min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{
                background: "transparent",
                boxShadow: "none",
                zIndex: hovered === idx ? 2 : 1,
                position: "relative",
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={logo}
                alt={`Client ${idx + 1}`}
                className={`object-contain w-full h-full max-h-full max-w-full transition-transform duration-300 ${
                  hovered === idx ? "scale-110" : ""
                }`}
                draggable={false}
                style={{
                  filter:
                    hovered === idx
                      ? "drop-shadow(0 0 8px #2563eb) brightness(1.1)"
                      : "none",
                  transition: "filter 0.3s, transform 0.3s",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllClients;