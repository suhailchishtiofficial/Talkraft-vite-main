import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-34 px-4">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
          Help &amp; Support
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">How can we help you?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions, concerns, or need assistance with our services, we are here to support you.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Quick Links</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <Link to="/faq" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400">
                Visit our FAQs page
              </Link>{' '}
              to find answers to common questions.
            </li>
            <li>
              <Link to="/privacy-policy" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400">
                View our Privacy Policy
              </Link>{' '}
              to understand how we handle your data.
            </li>
            <li>
              <Link to="/terms-and-conditions" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400">
                Review our Terms &amp; Conditions
              </Link>{' '}
              for using our website.
            </li>
            <li>
              <Link to="/cookies" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400">
                Read our Cookie Policy
              </Link>{' '}
              to learn about cookies and your choices.
            </li>
            <li>
              <Link to="/user/contact" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-400">
                Contact Us
              </Link>{' '}
              for direct support.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Popular Topics</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>How to reset your password</li>
            <li>How to update your profile information</li>
            <li>Understanding your dashboard</li>
            <li>How to report a problem or bug</li>
            <li>How to request account deletion</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Troubleshooting</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            If you are experiencing issues with our website, try the following steps:
          </p>
          <ul className="list-decimal pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Refresh the page or try a different browser.</li>
            <li>Clear your browser cache and cookies.</li>
            <li>Ensure your internet connection is stable.</li>
            <li>Disable browser extensions that might interfere.</li>
            <li>If the problem persists, contact our support team.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Account &amp; Profile</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>How to create a new account</li>
            <li>How to verify your email address</li>
            <li>How to change your password</li>
            <li>How to delete your account</li>
            <li>Managing your notification preferences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Contact Support</h2>
          <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> info@talkraft.com</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> +91 88879 15782</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Business Hours:</strong> Monday to Friday, 9:00 AM – 6:00 PM</p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            For urgent issues, please mention <strong>"URGENT"</strong> in your email subject line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;