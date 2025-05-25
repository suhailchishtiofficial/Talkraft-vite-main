import React from 'react';
import { Link } from 'react-router-dom';

const Seo = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* SEO Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/seo-banner.png"
          alt="SEO Optimization"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">SEO Optimization Services</h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        At <strong>TalkRaft.com</strong>, we help your business grow online with powerful SEO strategies that increase search engine rankings, drive targeted traffic, and convert visitors into customers.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">What is SEO?</h2>
        <p className="text-blue-900 dark:text-gray-200">
          Search Engine Optimization (SEO) is the process of optimizing your website so it ranks higher on search engines like Google. Better rankings mean more visibility, more traffic, and more leads.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Why SEO Matters?</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>93% of online experiences begin with a search engine</li>
          <li>Top-ranking websites get 70% of the traffic</li>
          <li>Organic traffic is more sustainable and cost-effective than ads</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our SEO Services Include:</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Website Audit:</strong> In-depth SEO performance analysis</li>
          <li><strong>Keyword Research:</strong> Find high-traffic, low-competition keywords</li>
          <li><strong>On-Page Optimization:</strong> Titles, meta tags, content, speed & structure</li>
          <li><strong>Technical SEO:</strong> Sitemap, robots.txt, mobile-friendliness, schema markup</li>
          <li><strong>Content Strategy:</strong> SEO-friendly blogs, landing pages & more</li>
          <li><strong>Backlink Building:</strong> Safe and authoritative link acquisition</li>
          <li><strong>Local SEO:</strong> Google My Business, map pack ranking & local citations</li>
          <li><strong>Monthly Reporting:</strong> Detailed SEO performance tracking</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our SEO Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Step 1:</strong> Consultation & Goals Discussion</li>
          <li><strong>Step 2:</strong> SEO Audit & Keyword Research</li>
          <li><strong>Step 3:</strong> On-Site SEO Optimization</li>
          <li><strong>Step 4:</strong> Off-Site Link Building & Local SEO</li>
          <li><strong>Step 5:</strong> Continuous Monitoring & Reporting</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Who Needs Our SEO Services?</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>Small and medium businesses</li>
          <li>Startups looking for online growth</li>
          <li>E-commerce stores</li>
          <li>Local service providers</li>
          <li>Professionals and bloggers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Frequently Asked Questions</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: How long does it take to see SEO results?</p>
          <p className="text-blue-900 dark:text-gray-200">A: SEO is a long-term strategy. Most clients begin to see results within 3 to 6 months.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Do you guarantee rankings?</p>
          <p className="text-blue-900 dark:text-gray-200">A: No ethical agency guarantees rankings. However, we use proven methods that consistently deliver strong results.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Will I get a monthly report?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes, we provide monthly progress reports with keyword rankings, traffic stats, and action plans.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Ready to Boost Your Search Visibility?</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">Let’s grow your business with our expert SEO solutions. Contact us today and get a FREE SEO audit!</p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Get Help or Request a Quote</Link>
      </section>

      
    </div>
  );
};

export default Seo;
