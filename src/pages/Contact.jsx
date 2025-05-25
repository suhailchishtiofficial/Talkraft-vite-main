import React, { useRef, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import gsap from 'gsap';

const Contact = () => {
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!formRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('https://test.talkraft.com/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        event.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-30 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 ">
      {/* Left: Image */}
      <div ref={imageRef} className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0 md:mr-8">
        <img
          src="/img/contact-us-banner.png"
          alt="Contact Us"
          className="rounded-xl shadow-lg max-h-[800px] object-cover w-full"
        />
      </div>
      {/* Right: Contact Form */}
      <div ref={formRef} className="w-full md:w-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-orange-400 mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition duration-200"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition duration-200"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition duration-200"
              />
            </div>
            <div className="w-full">
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition duration-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition duration-200 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3.5 text-base font-semibold text-center text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700 transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info & Social with Map on the right */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          {/* Info & Social */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500" size={18} />
              <span className="text-gray-700 dark:text-gray-200">Kidwai Nagar, Kanpur, UP</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-500" size={18} />
              <a href="tel:+918887915782" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                +91 88879 15782
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" size={18} />
              <a href="mailto:info@talkraft.com" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                info@talkraft.com
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/TallkRaft" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/talk_raft" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/talkraft" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          {/* Map on the right */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.295091287991!2d80.33187331504394!3d26.44151498334185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c386d7f5c7b8f%3A0x6b8b5f2e5f5c7b8f!2sKidwai%20Nagar%2C%20Kanpur%2C%20UP!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '12px', minWidth: '220px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;