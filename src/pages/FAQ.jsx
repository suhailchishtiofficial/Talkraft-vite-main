import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20 px-4 py-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950">
      <h2 className="form-heading text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 flex items-center justify-center gap-2">
        <FaQuestionCircle className="text-indigo-500" /> Frequently Asked Questions
      </h2>

      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">1. What services does TalkRaft offer?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We specialize in digital marketing, including SEO, social media management, paid advertising, content creation, and website development tailored to your business goals.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">2. How do I get started with TalkRaft?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            You can get started by contacting us through our website’s contact form, email, or phone. We will schedule a free consultation to understand your needs and provide recommendations.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">3. Do you offer custom marketing strategies?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Yes, all our strategies are tailored specifically to each client’s industry, goals, and target audience. We believe in personalized service that delivers real results.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">4. How long does it take to see results?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Results depend on the service. SEO may take 3–6 months, while paid ads and social media can show quicker results. We provide regular progress reports for transparency.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">5. Is there a contract or monthly plan?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We offer flexible plans. You can choose a one-time project or go with our monthly retainers. Contracts are discussed transparently before any engagement.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">6. Can I cancel services anytime?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Yes. For monthly plans, we only require a 15-day written notice before cancellation. One-time projects are handled as per the agreed timeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;