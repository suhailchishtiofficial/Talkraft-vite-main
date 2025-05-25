import React from 'react';
import { Link } from 'react-router-dom';

const Branding = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* Branding Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/branding-banner.png"
          alt="Branding Services"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">
        Branding Services
      </h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        At TalkRaft, we craft meaningful brand identities that connect emotionally with your audience. From logo design to full brand strategies, we help you define who you are and how you're remembered.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">What’s Included in Our Branding Services</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>✔ Logo Design (Primary & Secondary)</li>
          <li>✔ Tagline & Brand Message Development</li>
          <li>✔ Brand Style Guide (Fonts, Colors, Voice)</li>
          <li>✔ Social Media Branding Kit</li>
          <li>✔ Stationery Design (Business Card, Letterhead)</li>
          <li>✔ Website Branding Consultation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our Branding Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Discovery:</strong> Understand your vision, goals, and audience</li>
          <li><strong>Creative Brief:</strong> Moodboards and concept directions</li>
          <li><strong>Design Phase:</strong> Logos, visuals, and colors</li>
          <li><strong>Refinement:</strong> Feedback, polishing, and variations</li>
          <li><strong>Delivery:</strong> Full branding package and guide</li>
        </ol>
      </section>

     

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">FAQs</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: How long does the branding process take?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Typically 7–14 days depending on the package and feedback cycle.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Will I own the design rights?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes. You get full ownership and source files after final approval.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Can you redesign my existing brand?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Absolutely! We offer rebranding packages tailored to your growth stage.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Let’s Build a Brand That Lasts</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">
          Your brand is your business's first impression. Make it unforgettable with TalkRaft’s expert branding team.
        </p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Get Free Branding Consultation</Link>
      </section>
    </div>
  );
};

export default Branding;