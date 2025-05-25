import React from "react";

const Cookies = () => {
  return (
        <section className="min-h-screen bg-white dark:bg-gray-900 py-34 px-4">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 dark:text-white text-center">
          Cookie Policy
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This Cookie Policy explains how Talkraft ("we", "us", or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-2 text-blue-700 dark:text-blue-300">What Are Cookies?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences, improve your experience, and analyze how our website is used.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-2 text-blue-700 dark:text-blue-300">How We Use Cookies</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and usage</li>
          <li>To provide a personalized experience</li>
          <li>To enable certain website features and functionality</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-2 text-blue-700 dark:text-blue-300">Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Preference Cookies:</strong> Remember your choices and preferences.</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-2 text-blue-700 dark:text-blue-300">Managing Cookies</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-2 text-blue-700 dark:text-blue-300">Contact Us</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          If you have any questions about our Cookie Policy, please contact us at{" "}
          <a href="mailto:info@talkraft.com" className="text-blue-600 dark:text-blue-400 underline">
            info@talkraft.com
          </a>.
        </p>
        <p className="text-xs text-gray-500 mt-8 text-center">
          Last updated: May 2025
        </p>
      </div>
    </section>
  );
};

export default Cookies;