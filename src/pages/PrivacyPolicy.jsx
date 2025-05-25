import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-34 px-4">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 dark:text-white text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">Effective Date: May 13, 2025</p>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Welcome to <strong>TalkRaft.com</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit or use our website.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">1. Information We Collect</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Personal information (such as name, email address, phone number) when you contact us or fill out forms</li>
          <li>Non-personal information like browser type, device information, IP address, and usage data</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">2. How We Use Your Information</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">We use your information to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Send updates, marketing materials, and newsletters (only if you opt-in)</li>
          <li>Analyze website performance and user behavior</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">3. Cookies</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">4. Third-Party Services</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We may use third-party tools (such as Google Analytics) to analyze traffic. These services may collect certain information automatically. We do not sell or share your personal information with any third party without your consent.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">5. Data Security</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We implement security measures to protect your personal data, but no method is 100% secure. Please contact us if you have any concerns.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">6. Your Rights</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          You have the right to access, correct, or delete your personal information. You may also opt-out of receiving promotional emails at any time.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">7. Changes to This Policy</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We reserve the right to update this policy at any time. We encourage you to review this page periodically for any changes.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-blue-700 dark:text-blue-300">8. Contact Us</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          If you have any questions regarding this Privacy Policy, please contact us at:
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@talkraft.com" className="text-blue-700 dark:text-blue-300 underline">info@talkraft.com</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> ‪+91 88879 15782‬</p>
        <p className="text-xs text-gray-500 mt-8 text-center">
          Last updated: May 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;