import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ModeToggle } from './Togglebtn';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const navRef = useRef(null);
    const logoRef = useRef(null);
    const listRef = useRef(null);
    const toggleRef = useRef(null);
    const contactRef = useRef(null);
    const rightItemsRef = useRef(null);
    const dropdownRef = useRef(null);

    const location = useLocation();

    // Add this function to close the mobile menu
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (navRef.current && logoRef.current && listRef.current && rightItemsRef.current) {
            const logoElement = logoRef.current;
            const listItems = listRef.current?.children || [];
            const rightSideElements = rightItemsRef.current?.children || [];

            const elementsToAnimate = [
                logoElement,
                ...Array.from(listItems),
                ...Array.from(rightSideElements)
            ];

            const validElements = elementsToAnimate.filter(Boolean);

            if(validElements.length > 0) {
                gsap.set(validElements, { y: -50, opacity: 0 });
                gsap.to(validElements, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: 0.08,
                    delay: 0.2,
                });
            }
        }
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        closeMobileMenu();
        setIsServicesDropdownOpen(false);
    }, [location]);

    const dropdownDelay = 150; // Adjust this value (milliseconds)

    const [dropdownTimeoutId, setDropdownTimeoutId] = useState(null);

    const openDropdown = () => {
        if (dropdownTimeoutId) {
            clearTimeout(dropdownTimeoutId);
        }
        setDropdownTimeoutId(null);
        setIsServicesDropdownOpen(true);
    };

    const closeDropdown = () => {
        if (dropdownTimeoutId) {
            clearTimeout(dropdownTimeoutId);
        }
        const timeoutId = setTimeout(() => {
            setIsServicesDropdownOpen(false);
        }, dropdownDelay);
        setDropdownTimeoutId(timeoutId);
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 w-full bg-white px-4  shadow-md transition-colors 
        duration-300 ease-in-out dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-800/40 md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div ref={logoRef} className="flex-shrink-0">
                    <Link
                        to="/"
                        onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }}
                    >
                        <img
                            src="/img/logo.png"
                            alt="Logo"
                            width={100}
                            height={70}
                            priority
                        />
                    </Link>
                </div>

                <ul ref={listRef} className="hidden list-none p-0 md:flex md:items-center md:gap-6 lg:gap-8 md:mx-auto">
                    <Link to="/"  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Home</Link>
                    <Link to="/user/about-us"  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">About</Link>
                    
                    {/* Services Dropdown */}
                    <li className="relative group" ref={dropdownRef}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                    >
                        <button
                            type="button"
                            className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 flex items-center"
                            onClick={() => setIsServicesDropdownOpen((open) => !open)}
                        >
                            Services
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                            className={`absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 z-50 transition-all duration-200 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li>
                                <Link
                                    to="/user/services"
                                    className="block px-4 py-2 font-semibold text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/seo-optimization"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    SEO Optimization Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/web-design"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    Web Design Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/social-media-marketing"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    Social Media Marketing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/email-marketing"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    Email Marketing Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/facebook-google-ads"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    Facebook and Google Ads
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/branding"
                                    className="block px-4 py-2 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 transition-all"
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                    Branding Services
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <Link to="/user/projects"  onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Project</Link>
                    {/* Add Blog Link */}
                    <Link to="/blog" onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Blog</Link>
                    <Link to="/user/contact" onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Contact</Link>
                </ul>

                <div className="flex items-center gap-4">
                    <div ref={rightItemsRef} className="hidden items-center gap-4 md:flex">
                        <div ref={toggleRef}>
                            <ModeToggle />
                        </div>
                        <div ref={contactRef} className="whitespace-nowrap font-medium text-yellow-500  text-sm lg:text-base">
                            <a href="tel:+918887915782" className="hover:text-blue-600 dark:hover:text-blue-400">
                                Call Us: +91-8887915782
                            </a>
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 ml-2">
                            <a
                                href="https://www.facebook.com/TallkRaft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/talk_raft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/talkraft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                        {/* End Social Links */}
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-700 dark:text-gray-300 md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <RiCloseLine className="h-7 w-7" />
                        ) : (
                            <RiMenu3Line className="h-7 w-7" />
                        )}
                    </button>
                </div>
            </div>

            <div className={`
                absolute left-0 right-0 top-full z-40 w-full origin-top transform bg-white shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-900 md:hidden
                ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}
            `}>
                <ul className="flex flex-col items-start gap-4 px-4 py-5">
                    <li><Link to="/" onClick={closeMobileMenu} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Home</Link></li>
                    <li><Link to="/user/about-us" onClick={closeMobileMenu} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">About</Link></li>
                    
                    {/* Mobile Services Dropdown */}
                    <li className="w-full">
                        <details className="w-full" open={false}>
                            <summary className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 py-2">
                                Services
                            </summary>
                            <ul className="ml-4 mt-2 flex flex-col gap-2">
                                <li>
                                    <Link to="/user/services" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">All Services</Link>
                                </li>
                                <li>
                                    <Link to="/services/seo-optimization" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">SEO Optimization Services</Link>
                                </li>
                                <li>
                                    <Link to="/services/web-design" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Web Design Services</Link>
                                </li>
                                <li>
                                    <Link to="/services/social-media-marketing" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Social Media Marketing</Link>
                                </li>
                                <li>
                                    <Link to="/services/email-marketing" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Email Marketing Services</Link>
                                </li>
                                <li>
                                    <Link to="/services/facebook-google-ads" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Facebook and Google Ads</Link>
                                </li>
                                <li>
                                    <Link to="/services/branding" onClick={closeMobileMenu} className="block py-1 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Branding Services</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    {/* End Mobile Services Dropdown */}

                    <li><Link to="/user/projects" onClick={closeMobileMenu} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Project</Link></li>
                    <li><Link to="/user/blog" onClick={closeMobileMenu} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Blog</Link></li>
                    <li><Link to="/user/contact" onClick={closeMobileMenu} className="cursor-pointer font-medium text-black transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Contact</Link></li>
                    <li className="mt-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <ModeToggle />
                    </li>
                    <li className="whitespace-nowrap font-medium text-black dark:text-gray-200 text-sm">
                        <a href="tel:+918887915782" className="hover:text-blue-600 dark:hover:text-blue-400">
                            Call Us: +91-8887915782
                        </a>
                    </li>   
                    <li className="flex gap-4 mt-2">
                        {/* Social Links for mobile */}
                        <a
                            href="https://www.facebook.com/TallkRaft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/talk_raft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/talkraft"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;