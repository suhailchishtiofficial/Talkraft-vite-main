import React, { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    title: '5 SEO Tips to Boost Your Website Ranking',
    image: '/img/portfolio-4.jpg',
    date: '2024-05-01',
    excerpt: 'Learn actionable SEO strategies to improve your Google rankings and drive more organic traffic to your business website.',
    content: `Search Engine Optimization (SEO) is crucial for online success. Here are 5 tips:
1. Use relevant keywords in your content and meta tags.
2. Optimize your website speed and mobile responsiveness.
3. Build high-quality backlinks from reputable sites.
4. Create valuable, original content regularly.
5. Track your performance with analytics and adjust your strategy.`
  },
  {
    id: 2,
    title: 'Why Your Business Needs Social Media Marketing',
    image: '/img/portfolio-1.jpg',
    date: '2024-04-20',
    excerpt: 'Discover how social media marketing can help you reach new customers, build brand loyalty, and grow your business.',
    content: `Social media platforms like Facebook, Instagram, and LinkedIn are powerful tools for business growth. Benefits include:
- Direct engagement with your audience
- Cost-effective advertising
- Increased brand awareness
- Real-time feedback and analytics
Start building your social presence today!`
  },
  {
    id: 3,
    title: 'How to Design a High-Converting Landing Page',
    image: '/img/branding-banner.png',
    date: '2024-03-15',
    excerpt: 'A great landing page can turn visitors into leads. Here’s what you need to know about design, copy, and calls-to-action.',
    content: `To create a high-converting landing page:
- Use a clear, compelling headline
- Highlight your value proposition
- Add trust signals (testimonials, reviews)
- Use a strong call-to-action button
- Keep the design clean and distraction-free`
  }
];

const Blog = () => {
  const [posts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-10 text-center">
        TalkRaft Blog
      </h1>

      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex flex-col"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-blue-700 dark:text-orange-400 mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-blue-900 dark:text-gray-200 flex-1">{post.excerpt}</p>
                <button className="mt-4 text-orange-500 hover:underline font-semibold self-start">
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
          <button
            className="mb-4 text-blue-700 dark:text-orange-400 hover:underline font-semibold"
            onClick={() => setSelectedPost(null)}
          >
            &larr; Back to Blog
          </button>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="rounded-xl mb-6 w-full max-h-80 object-cover"
          />
          <h2 className="text-2xl font-bold text-blue-700 dark:text-orange-400 mb-2">{selectedPost.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{new Date(selectedPost.date).toLocaleDateString()}</p>
          <div className="text-blue-900 dark:text-gray-200 whitespace-pre-line">{selectedPost.content}</div>
        </div>
      )}
    </div>
  );
};

export default Blog;