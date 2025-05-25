import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerRef = useRef(null);
    const addressColRef = useRef(null);
    const linksColRef = useRef(null);
    const usefulColRef = useRef(null);
    const servicesColRef = useRef(null); // NEW REF
    const copyrightRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mainTrigger = {
                trigger: footerRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
            };

            // Animate all columns including Our Services
            const columns = [
                addressColRef.current,
                linksColRef.current,
                usefulColRef.current,
                servicesColRef.current, // ADD HERE
            ].filter(Boolean);

            gsap.from(columns, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.15,
                scrollTrigger: mainTrigger
            });

            // Animate Quick Links
            gsap.from(gsap.utils.toArray('.quick-link-item'), {
                opacity: 0,
                x: -20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: linksColRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                }
            });

            // Animate Useful Links
            gsap.from(gsap.utils.toArray('.useful-link-item'), {
                opacity: 0,
                x: -20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: usefulColRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                }
            });

            // Animate Our Services
            gsap.from(gsap.utils.toArray('.our-services-item'), {
                opacity: 0,
                x: -20,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: servicesColRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                }
            });

            // Animate Copyright
            gsap.from(copyrightRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: copyrightRef.current,
                    start: 'top 98%',
                    toggleActions: 'play none none none',
                }
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="bg-blue-700 text-blue-50 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300 overflow-hidden"
        >
            {/* Main Content Container */}
            <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                {/* Grid for the two columns (gallery removed) */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Column 1: Address */}
                    <div ref={addressColRef}>
                        {/* Added address-item class for GSAP targeting */}
                        <h3 className="section-title address-item relative mb-4 inline-block text-lg font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-orange-400 dark:text-gray-100 dark:after:bg-orange-500">
                            Address
                        </h3>
                        <p className="address-item mb-2 flex items-start">
                            <FaMapMarkerAlt className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-orange-400" />
                            <span>Kidwai Nagar, Kanpur, Up</span>
                        </p>
                        <p className="address-item mb-2 flex items-center">
                            <FaPhoneAlt className="mr-3 h-4 w-4 flex-shrink-0 text-orange-400" />
                            <a href="tel:8887915782" className="hover:text-orange-300 dark:hover:text-orange-400">+91 88879 15782</a>
                        </p>
                        <p className="address-item mb-4 flex items-center">
                            <FaEnvelope className="mr-3 h-4 w-4 flex-shrink-0 text-orange-400" />
                            <a href="mailto:info@talkraft.com" className="hover:text-orange-300 dark:hover:text-orange-400">info@talkraft.com</a>
                        </p>
                        {/* Social Icons */}
                        {/* Added social-btn-item class for GSAP targeting */}
                        <div className="flex pt-2 space-x-2">
                            <Link className="social-btn social-btn-item" to="https://twitter.com/Talkraft" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></Link>
                            <Link className="social-btn social-btn-item" to="https://www.facebook.com/TallkRaft" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></Link>
                            <Link className="social-btn social-btn-item" to="https://www.instagram.com/talk_raft" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></Link>
                            <Link className="social-btn social-btn-item" to="https://www.linkedin.com/company/talkraft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div ref={linksColRef}>
                        <h3 className="quick-link-item section-title relative mb-4 inline-block text-lg font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-orange-400 dark:text-gray-100 dark:after:bg-orange-500">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/user/about-us"
                            >
                                About Us
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/user/contact"
                            >
                                Contact Us
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/user/services"
                            >
                                Services
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/career"
                            >
                                Career
                            </Link>
                            <Link 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link quick-link-item"
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div ref={usefulColRef}>
                        <h3 className="section-title useful-link-item relative mb-4 inline-block text-lg font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-orange-400 dark:text-gray-100 dark:after:bg-orange-500">
                            Useful Links
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link useful-link-item"
                                to="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link useful-link-item"
                                to="/terms-and-conditions"
                            >
                                Terms & Condition
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link useful-link-item"
                                to="/cookies"
                            >
                                Cookies
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link useful-link-item"
                                to="/help"
                            >
                                Help
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link useful-link-item"
                                to="/faq"
                            >
                                FAQS
                            </Link>
                        </nav>
                    </div>

                    {/* Column 4: Our Services */}
                    <div ref={servicesColRef}>
                        <h3 className="section-title our-services-item relative mb-4 inline-block text-lg font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-orange-400 dark:text-gray-100 dark:after:bg-orange-500">
                            Our Services
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/seo-optimization"
                            >
                                SEO Optimization
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/web-design"
                            >
                                Web Design
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/social-media-marketing"
                            >
                                Social Media Marketing
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/email-marketing"
                            >
                                Email Marketing
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/facebook-google-ads"
                            >
                                Facebook & Google Ads
                            </Link>
                            <Link
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="footer-link our-services-item"
                                to="/services/branding"
                            >
                                Branding Services
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-blue-600 dark:border-gray-700">
                <div
                    ref={copyrightRef}
                    className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
                >
                    <div className="flex flex-col items-center justify-center text-sm">
                        <div className="mb-3 text-center">
                            © <a className="border-b border-dashed border-orange-300 transition-colors hover:border-solid hover:text-orange-300 dark:border-orange-400 dark:hover:text-orange-400" href="https://talkraft.com/">TalkRaft.Com</a>, All Right Reserved.
                            Designed By Talk Raft
                        </div>
                    </div>
                </div>
            </div>

             {/* Helper Styles - Kept the same */}
             <style jsx>{`
                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 50%;
                    height: 2px;
                    /* Color handled by Tailwind */
                }
                .social-btn {
                    /* Added transform and group for icon hover */
                    @apply inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-110;
                    border: none;
                    background: #fff;
                    color: #555;
                    font-size: 2rem;
                }
                .social-btn[aria-label="Twitter"] {
                    background: #1da1f2;
                    color: #fff;
                }
                .social-btn[aria-label="Facebook"] {
                    background: #1877f3;
                    color: #fff;
                }
                .social-btn[aria-label="Instagram"] {
                    background: radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    color: #fff;
                }
                .social-btn[aria-label="LinkedIn"] {
                    background: #0077b5;
                    color: #fff;
                }
                .social-btn:hover, .social-btn:focus {
                    filter: brightness(1.15) drop-shadow(0 2px 8px rgba(0,0,0,0.12));
                    transform: scale(1.15) rotate(-6deg);
                    border: 2px solid #fff;
                    z-index: 1;
                }
                .footer-link {
                     /* Added transform for subtle movement */
                    @apply block transition-all duration-200 hover:text-orange-300 hover:translate-x-1 dark:hover:text-orange-400;
                    position: relative;
                }
                .footer-link::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background-color: #fb923c; /* Tailwind orange-400 */
                    transition: width 0.2s;
                }
                .footer-link:hover::after,
                .footer-link:focus::after {
                    width: 30%;
                }
                .dark .footer-link::after {
                    background-color: #f97316; /* Tailwind orange-500 for dark mode */
                }
             `}</style>
        </footer>
    );
};

export default Footer;