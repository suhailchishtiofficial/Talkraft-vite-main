import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* Social Media Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/social-media-banner.jpg"
          alt="Social Media Marketing"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">
        Social Media Marketing Services
      </h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        Boost your online presence with TalkRaft's expert Social Media Marketing services. We help businesses grow organically and through paid campaigns across platforms like Instagram, Facebook, and LinkedIn.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Platforms We Cover</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>📸 Instagram – Reels, Posts, Stories</li>
          <li>📘 Facebook – Engagement Campaigns, Page Management</li>
          <li>💼 LinkedIn – B2B Targeting & Authority Building</li>
          <li>🧵 Twitter/X – Brand Awareness & Thought Leadership</li>
          <li>🎥 YouTube – Short Video + Channel Growth</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our Marketing Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Strategy Planning:</strong> Goal setting and audience targeting</li>
          <li><strong>Content Calendar:</strong> Weekly/monthly post scheduling</li>
          <li><strong>Graphic Design:</strong> Creatives, video, reels, carousels</li>
          <li><strong>Execution:</strong> Publishing and paid promotions</li>
          <li><strong>Monitoring:</strong> Analytics, leads, and insights</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Why Choose TalkRaft?</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>✔ Creative and consistent content delivery</li>
          <li>✔ Hashtag and trend optimization</li>
          <li>✔ Ad campaigns with lead targeting</li>
          <li>✔ Monthly reports with improvement insights</li>
          <li>✔ Team of expert marketers, designers & copywriters</li>
        </ul>
      </section>

      

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">FAQs</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Can I change platforms mid-plan?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes, you can switch platforms or upgrade anytime.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Is ad spend included?</p>
          <p className="text-blue-900 dark:text-gray-200">A: The ad spend is separate; we manage it based on your monthly budget.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Do you handle comments and inbox replies?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes, engagement handling is available in Business and Enterprise plans.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Let’s Grow Your Social Media</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">
          TalkRaft helps you build a powerful brand with consistent, targeted social media content and ad campaigns.
        </p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Get Started</Link>
      </section>
    </div>
  );
};

export default Social;