import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, Link } from 'react-router-dom';

const headingsMap = {
  "/": [
    "A Best Digital Agency Of",
    "Inteligents & Creative",
    "People"
  ],
  "/services/seo-optimization": [
    "SEO Optimization",
    "Rank Higher, Grow Faster",
    "With TalkRaft"
  ],
  "/services/web-design": [
    "Modern Web Design",
    "Mobile-First & Fast",
    "For Your Brand"
  ],
  "/services/social-media-marketing": [
    "Social Media Marketing",
    "Grow Your Audience",
    "Engage & Convert"
  ],
  "/services/email-marketing": [
    "Email Marketing",
    "Convert & Retain",
    "With Every Campaign"
  ],
  "/services/facebook-google-ads": [
    "Facebook & Google Ads",
    "Performance Campaigns",
    "Real Results"
  ],
  "/services/branding": [
    "Branding Services",
    "Make Your Mark",
    "Stand Out"
  ]
};

const allHeadings = Object.values(headingsMap);

const HeroSection = () => {
  const navigate = useNavigate();

  // Typewriter state
  const [typed, setTyped] = useState("");
  const [currentSet, setCurrentSet] = useState(0);
  const headingRef = useRef(null);

  // Only animate the typewriter, not the full section
  useEffect(() => {
    let timeouts = [];
    const headings = allHeadings[currentSet].join(" "); // Join all lines into one string
    let current = "";
    let char = 0;

    function typeNext() {
      if (char > headings.length) {
        // After finishing, wait, then go to next
        timeouts.push(setTimeout(() => {
          setCurrentSet((prev) => (prev + 1) % allHeadings.length);
        }, 1200));
        return;
      }
      setTyped(headings.slice(0, char));
      char++;
      timeouts.push(setTimeout(typeNext, 40));
    }

    setTyped("");
    typeNext();

    return () => timeouts.forEach(clearTimeout);
  }, [currentSet]);

  return (
    <div
      className="
        mt-20
        flex flex-col md:flex-row items-center
        min-h-[calc(100vh-80px)]
        px-6 py-12 md:px-16 md:py-16
        bg-white dark:bg-gray-900
        text-black dark:text-white
        overflow-hidden
        transition-colors duration-300 ease-in-out
      "
    >
      {/* Left Content Area */}
      <div className="left w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10 order-2 md:order-1">
        {/* Only animate this heading group */}
        <div ref={headingRef} className="mb-4 md:mb-6">
          <div className="text-3xl sm:text-4xl lg:text-[45px] font-bold leading-tight text-gray-900 dark:text-white">
            <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
              {typed}
            </span>
          </div>
        </div>

        {/* Paragraph */}
        <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-700 dark:text-gray-300">
          Welcome to the Best Digital Marketing Agency, where your business's growth and success are our top priorities. We specialize in a comprehensive range of digital marketing services tailored to meet your unique needs. Our team of experts is dedicated to helping you achieve your goals with innovative strategies and cutting-edge technology. Here’s how we can help:
        </p>

        {/* Buttons */}
        <div className="buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }}
            to="/user/services"
            className="
              px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow-md
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
              transition duration-150 ease-in-out
            "
          >
            Read More
          </Link>
        
          <Link  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }}
            to="/user/contact"
            className="
              px-6 py-2.5 bg-transparent border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-md shadow-sm
              hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
              transition duration-150 ease-in-out
            "
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="right w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
        <img
          src="/img/hero.png"
          alt="Digital agency team working"
          width={500}
          height={500}
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;