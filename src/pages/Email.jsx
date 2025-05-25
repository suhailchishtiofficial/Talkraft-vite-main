import React from 'react';
import { Link } from 'react-router-dom';

const Email = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      {/* Email Marketing Banner Image */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/img/email-marketing-banner.png"
          alt="Email Marketing Services"
          className="rounded-xl shadow-lg max-h-72 object-cover w-full"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-6">
        Email Marketing Services
      </h1>
      <p className="mb-8 text-lg text-blue-900 dark:text-gray-200">
        TalkRaft’s Email Marketing Services help you build customer loyalty, increase conversions, and keep your brand top-of-mind with beautifully designed, data-driven campaigns.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Why Email Marketing Works</h2>
        <ul className="list-disc pl-6 text-blue-900 dark:text-gray-200">
          <li>✔ Direct communication with your audience</li>
          <li>✔ High ROI – best-performing digital channel</li>
          <li>✔ Personalization builds trust and conversion</li>
          <li>✔ Great for promotions, product updates, and nurturing leads</li>
          <li>✔ Automation saves time and increases effectiveness</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">Our Email Campaign Process</h2>
        <ol className="list-decimal pl-6 text-blue-900 dark:text-gray-200">
          <li><strong>Strategy Setup:</strong> Understand goals and target audience</li>
          <li><strong>Design & Content:</strong> Eye-catching emails and compelling CTAs</li>
          <li><strong>List Management:</strong> Segmentation and cleaning</li>
          <li><strong>Scheduling:</strong> Automated or manual sendouts</li>
          <li><strong>Tracking:</strong> Opens, clicks, and conversion analysis</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-orange-400 mb-2">FAQs</h2>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Can you manage my Mailchimp or Sendinblue account?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes, we work with all major email marketing platforms.</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: Do I need to provide the email list?</p>
          <p className="text-blue-900 dark:text-gray-200">A: Yes. We recommend using an opt-in list you own. We can also help grow it.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900 dark:text-orange-300">Q: What is A/B testing?</p>
          <p className="text-blue-900 dark:text-gray-200">A: It's a method to compare two versions of an email to see which performs better.</p>
        </div>
      </section>

      <section className="mb-12 text-center bg-blue-100 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">Let’s Launch Your First Campaign!</h2>
        <p className="mb-4 text-blue-900 dark:text-gray-200">
          Boost conversions, build customer loyalty, and engage your audience with professional email campaigns from TalkRaft.
        </p>
        <Link onClick={(e) => {
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
                        }} to="/user/contact" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">Request a Free Demo</Link>
      </section>
    </div>
  );
};

export default Email;