import React, { useMemo, useState } from "react";
import AboutCard from "./AboutCard";
import Footer from "./Footer";
import logoWhite from "../assets/logo_white.png";
import Navbar from "./Navbar";

const cardsData = [
  {
    id: 1,
    title: "About CODocket",
    headline: "Welcome to COD Form & Manager by CODRocket Help Center",
    content:
      "Get started with COD Form & Manager by CODRocket and learn how to create powerful forms and manage your data effectively.",
    subContent:
      "Our comprehensive help center provides guides, tutorials, and support resources.",
  },
  {
    id: 2,
    title: "Getting Started",
    headline: "Quick Start Guide",
    content:
      "Learn the basics of COD Form & Manager by CODRocket in minutes. Create your first form and start collecting responses.",
    subContent:
      "Step-by-step tutorials for beginners and advanced users alike.",
  },
  {
    id: 3,
    title: "Form Building",
    headline: "Advanced Form Features",
    content:
      "Discover powerful form building tools including conditional logic, validation, and custom styling.",
    subContent:
      "Create complex forms with ease using our intuitive drag-and-drop interface.",
  },
  {
    id: 4,
    title: "Integrations",
    headline: "Connect Your Tools",
    content:
      "Integrate COD Form & Manager by CODRocket with your favorite apps and services for seamless workflows.",
    subContent:
      "Zapier, Slack, Google Sheets, and many more integrations available.",
  },
  {
    id: 5,
    title: "Analytics",
    headline: "Track Form Performance",
    content:
      "Monitor form submissions, analyze user behavior, and optimize your forms for better results.",
    subContent:
      "Detailed analytics and reporting to improve your form conversion rates.",
  },
  {
    id: 6,
    title: "Security",
    headline: "Data Protection & Privacy",
    content:
      "Learn about our security measures, data encryption, and compliance standards.",
    subContent:
      "Your data is safe with enterprise-grade security and privacy protection.",
  },
  {
    id: 7,
    title: "Support",
    headline: "Get Help When You Need It",
    content:
      "Access our support team, community forums, and extensive documentation library.",
    subContent: "24/7 support available for all plan types and urgent issues.",
  },
];

const Helpcenter1 = () => {
  const [query, setQuery] = useState("");

  const articlesData = [
    {
      id: "a1",
      title: "Cash on Delivery Guide",
      headline: "Everything you need to know about Cash on Delivery",
      content:
        "Learn how Cash on Delivery (COD) works with COD Form & Manager — setup, restrictions, and best practices.",
      subContent:
        "Improve conversion while safely handling payments on delivery.",
    },
    {
      id: "a2",
      title: "COD Limitations",
      headline: "When to use and when to avoid COD",
      content:
        "Understand order risk, geographic availability, and recommended verification steps for COD orders.",
      subContent: "Tips to reduce returns and fraud for COD shipments.",
    },
    {
      id: "a3",
      title: "COD Analytics",
      headline: "Track and optimize COD performance",
      content:
        "Use analytics to monitor COD order completion rates and identify opportunities to improve acceptance.",
      subContent:
        "Leverage reports to make data-driven decisions for COD policies.",
    },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cardsData;
    return cardsData.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.headline.toLowerCase().includes(q) ||
        c.content.toLowerCase().includes(q) ||
        c.subContent.toLowerCase().includes(q)
    );
  }, [query]);
  return (
    <div className="w-full">
      <Navbar variant="purple" />

      <header className="w-full">
        <div className="relative bg-[#5e255dff] via-[#4a1d49] to-[#2d1129] text-white">
          <div className="max-w-7xl mx-auto py-6 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <img
                src={logoWhite}
                alt="COD Logo"
                className="h-10 w-auto mr-1"
              />
              <h1 className="text-2xl font-semibold tracking-tight mt-2">
                Help Center
              </h1>
            </div>
          </div>

          <div className="text-center pb-3">
            <p className="text-lg opacity-90">
              Find answers, guides, and support for all your questions
            </p>
          </div>

          <div className="py-8">
            <div className="max-w-3xl mx-auto px-6">
              <div className="bg-white rounded-lg p-3 shadow-md flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none px-2 py-3"
                  placeholder="Search our help center..."
                  aria-label="Search help"
                />
                <button className="ml-3 bg-[#5e255dff] text-white px-4 py-2 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Help Center Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of guides, tutorials, and
            resources to help you make the most of COD Form & Manager by
            CODRocket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((card) => (
            <div key={card.id} className="h-full">
              <AboutCard
                title={card.title}
                headline={card.headline}
                content={card.content}
                subContent={card.subContent}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* Latest Articles & News */}
          <div className="max-w-7xl mx-auto mb-10">
            <div className="text-center mb-6">
              <h3 className="text-4xl font-extrabold">
                Latest Articles & News
              </h3>
              <p className="text-gray-600">
                Recent updates about Cash on Delivery and platform news.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
              {articlesData.slice(0, 2).map((art) => (
                <AboutCard
                  key={art.id}
                  title={art.title}
                  headline={art.headline}
                  content={art.content}
                  subContent={art.subContent}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#5e255dff] to-[#4a1d49] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not finding what you're looking for?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to help you with any questions or issues
              you might have.
            </p>
            <button className="bg-white text-[#5e255dff] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Send an Email
            </button>
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Helpcenter1;
