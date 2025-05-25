import React from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* Web Design Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/web-design-banner.jpg"
          alt="Web Design Services"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">Web Design Services</h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        TalkRaft.com offers modern, mobile-responsive, and SEO-optimized web design services tailored to your brand and business goals. Whether you need a portfolio, company site, or eCommerce platform — we deliver quality that converts.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">What We Offer</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>✔ Custom website design with unique UI/UX</li>
          <li>✔ Mobile-first responsive layout</li>
          <li>✔ SEO-optimized structure</li>
          <li>✔ Speed & performance optimized</li>
          <li>✔ CMS Integration (WordPress, PHP-based)</li>
          <li>✔ Blog, Gallery, Forms, and more...</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our Design Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Consultation:</strong> Understanding your goals</li>
          <li><strong>Wireframe:</strong> Planning structure and content</li>
          <li><strong>Design & Build:</strong> UI/UX + coding with SEO</li>
          <li><strong>Review & Launch:</strong> Testing and final deployment</li>
          <li><strong>Support:</strong> Ongoing help after launch</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">FAQs</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Can I see design samples before starting?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes, we can share mockups and past work before we begin your project.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Will my website work on phones and tablets?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Absolutely. All websites are built mobile-first and fully responsive.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Do you offer custom backend or CMS?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes. We can build static, dynamic (PHP), or CMS-powered (WordPress) websites.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Need a Beautiful, Fast Website?</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">Let’s build a stunning web presence for your business. Contact TalkRaft now and get a FREE homepage mockup!</p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Request a Quote</Link>
      </section>
    </div>
  );
};

export default Web;