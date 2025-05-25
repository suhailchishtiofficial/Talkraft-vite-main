import React from "react";

const careerImages = [
  "/img/portfolio-1.jpg",
  "/img/portfolio-2.jpg",
  "/img/portfolio-3.jpg",
];

const Career = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-36 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
          Careers at Talkraft
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Join our passionate team and help shape the future of digital communication! At Talkraft, we believe in creativity, collaboration, and growth. Explore exciting opportunities to build your career with us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {careerImages.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={img}
                alt={`Talkraft Career ${idx + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Why Work With Us?</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-6 space-y-2">
            <li>Innovative projects and a creative environment</li>
            <li>Supportive, diverse, and inclusive team culture</li>
            <li>Opportunities for learning and professional growth</li>
            <li>Flexible work options and a healthy work-life balance</li>
            <li>Competitive compensation and benefits</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Open Positions</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-6 space-y-1">
            <li>Frontend Developer (React.js)</li>
            <li>UI/UX Designer</li>
            <li>Digital Marketing Specialist</li>
            <li>Content Writer</li>
            <li>Business Development Executive</li>
          </ul>
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            Interested in joining us? Send your resume and a short cover letter to{" "}
            <a href="mailto:careers@talkraft.com" className="text-blue-600 dark:text-blue-400 underline">
              careers@talkraft.com
            </a>
            .
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Don’t see a role that fits? We’re always looking for talented people—reach out anyway!
          </p>
        </div>

        {/* Career Application Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Apply Now</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Position Applying For
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="e.g. Frontend Developer"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Cover Letter / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition duration-200 resize-none"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
        {/* End Career Application Form */}
      </div>
    </section>
  );
};

export default Career;