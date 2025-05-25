import React from 'react';
import { Link } from 'react-router-dom';

const Facebook = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* Facebook & Google Ads Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/facebook-google-ads-banner.png"
          alt="Facebook and Google Ads Management"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">
        Facebook & Google Ads Management
      </h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        Generate high-quality traffic, leads, and conversions through performance-driven ad campaigns. TalkRaft crafts and manages targeted ad strategies across Facebook, Instagram, Google Search, and Display Network.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">What We Offer</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>✔ Facebook & Instagram Ads Management</li>
          <li>✔ Google Search, Display & YouTube Campaigns</li>
          <li>✔ Landing Page Optimization</li>
          <li>✔ A/B Testing for Creatives and Audiences</li>
          <li>✔ Conversion Tracking & Monthly Reporting</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our Ad Campaign Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Strategy Call:</strong> Understand goals and target audience</li>
          <li><strong>Keyword & Audience Research:</strong> Define precise targeting</li>
          <li><strong>Ad Copy & Design:</strong> Craft creatives for maximum impact</li>
          <li><strong>Launch & Monitor:</strong> Real-time optimization</li>
          <li><strong>Report & Scale:</strong> Measure results and improve ROI</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">FAQs</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Is ad spend included in the package?</p>
          <p className="text-blue-900 dark:text-gray-200">A: No. Our fees are separate from your monthly ad budget.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Will I get a report of results?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes. We provide weekly or monthly performance reports depending on your plan.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Can I stop or pause my ads?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Absolutely. You have full control and can pause anytime.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Start Getting Real Leads Today!</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">
          TalkRaft helps you run data-driven ad campaigns that deliver results across Facebook and Google Ads. Let’s grow your business together!
        </p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition" >Request Free Consultation</Link>
      </section>
    </div>
  );
};

export default Facebook;