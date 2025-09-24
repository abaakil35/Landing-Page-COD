import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CONTENT = {
  1: {
    title: "Getting Started",
    headline: "Introduction & Quick Setup",
    lastUpdated: "Sep 24, 2025",
    body: `This section introduces CODRocket to new users. It explains what the app does, how to install it on a Shopify store, and the basic steps to start accepting Cash on Delivery (COD) orders. Perfect for first-time users who want a quick setup.\n\nFollow the quick checklist: 1) Install the app, 2) Configure your store settings, 3) Enable the COD Buy Button, 4) Test in a sandbox store.`,
  },
  2: {
    title: "App Configuration",
    headline: "Setup & Customization",
    lastUpdated: "Sep 24, 2025",
    body: `Here you’ll find detailed guides on customizing CODRocket to fit your business. From adjusting the COD Buy Button placement to designing order forms, setting shipping rules, or applying your store’s branding — this section covers everything about setup and personalization.`,
  },
  3: {
    title: "Managing Orders",
    headline: "Process & Operations",
    lastUpdated: "Sep 24, 2025",
    body: `Once CODRocket is live, this section explains how to process and manage COD orders. It includes order tracking, automatic tagging, exporting data for logistics, and viewing analytics to help merchants make better decisions.`,
  },
  4: {
    title: "Pricing & Plans",
    headline: "Costs & Billing",
    lastUpdated: "Sep 24, 2025",
    body: `Merchants often want clarity on costs. This section explains the difference between free and paid plans, subscription upgrades or downgrades, billing details, and frequently asked questions about pricing.`,
  },
  5: {
    title: "Troubleshooting & FAQs",
    headline: "Common Issues & Fixes",
    lastUpdated: "Sep 24, 2025",
    body: `Things don’t always go as planned. This section provides solutions to common problems like the COD button not showing, form submission errors, styling issues, and order data problems. It also includes a quick FAQ with answers to the most common merchant questions.`,
  },
  6: {
    title: "Support & Policies",
    headline: "Support Channels & Legal",
    lastUpdated: "Sep 24, 2025",
    body: `For cases where users still need help, this section covers all support channels, expected response times, and how to request new features. It also includes release notes, privacy details, and legal policies to build trust and transparency.`,
  },
  7: {
    title: "Support",
    headline: "Get Help When You Need It",
    lastUpdated: "Sep 24, 2025",
    body: `Access our support team, community forums, and extensive documentation library.`,
  },
};

const ids = Object.keys(CONTENT);

const itemMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.28 },
};

const HelpArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = CONTENT[id] || null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar navigation */}
          <aside className="order-2 lg:order-1 lg:col-span-1">
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Articles
                </h4>
                <nav className="space-y-1">
                  {ids.map((key) => {
                    const item = CONTENT[key];
                    const active = String(key) === String(id);
                    return (
                      <Link
                        key={key}
                        to={`/help/${key}`}
                        className={`block rounded-md px-3 py-2 text-sm transition-all duration-150 group ${
                          active
                            ? "bg-[#f6f0ff] text-[#5e255dff] font-semibold shadow"
                            : "text-gray-700 hover:bg-gray-50 hover:translate-x-1"
                        }`}
                        aria-current={active ? "true" : undefined}
                      >
                        <span className="block truncate">{item.title}</span>
                        <span className="text-xs text-gray-400 block mt-0.5">
                          {item.headline}
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="mt-4 bg-white rounded-xl shadow-sm p-4">
                <h5 className="text-sm font-semibold text-gray-700">
                  Quick actions
                </h5>
                <div className="mt-3 space-y-2">
                  <Link
                    to="/help-center"
                    className="block text-sm text-gray-600 hover:text-[#5e255dff]"
                  >
                    Back to Help Center
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-sm text-gray-600 hover:text-[#5e255dff]"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile: horizontal scroller */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-3 overflow-x-auto py-2">
                {ids.map((key) => (
                  <Link
                    key={key}
                    to={`/help/${key}`}
                    className={`flex-shrink-0 px-3 py-2 rounded-md text-sm border ${
                      String(key) === String(id)
                        ? "bg-[#5e255dff] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {CONTENT[key].title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main article area */}
          <section className="order-1 lg:order-2 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={id || "notfound"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.32 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {!article ? (
                  <div>
                    <h2 className="text-2xl font-bold">Article not found</h2>
                    <p className="mt-3 text-gray-600">
                      We couldn't find the article you're looking for.
                    </p>
                    <div className="mt-4">
                      <Link
                        to="/help-center"
                        className="text-[#5e255dff] hover:underline"
                      >
                        Back to Help Center
                      </Link>
                    </div>
                  </div>
                ) : (
                  <article>
                    <header className="mb-6">
                      <h1 className="text-3xl font-extrabold text-gray-900">
                        {article.title}
                      </h1>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-gray-600">{article.headline}</p>
                        <time className="text-sm text-gray-400">
                          Last updated: {article.lastUpdated}
                        </time>
                      </div>
                    </header>

                    <motion.div
                      {...itemMotion}
                      className="prose max-w-none text-gray-800"
                    >
                      {article.body.split("\n\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </motion.div>

                    <footer className="mt-8 border-t pt-6">
                      <div className="flex items-center justify-between">
                        {(() => {
                          const idx = ids.findIndex(
                            (k) => String(k) === String(id)
                          );
                          const prev = idx > 0 ? ids[idx - 1] : null;
                          const next =
                            idx < ids.length - 1 ? ids[idx + 1] : null;
                          return (
                            <>
                              {/* Left: Previous */}
                              <div>
                                <button
                                  onClick={() =>
                                    prev && navigate(`/help/${prev}`)
                                  }
                                  disabled={!prev}
                                  className={`px-4 py-2 rounded-md transition ${
                                    prev
                                      ? "bg-white text-gray-700 hover:shadow-sm"
                                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                  }`}
                                >
                                  ← Previous
                                </button>
                              </div>

                              {/* Center: small label (hidden on very small screens) */}

                              {/* Right: Next */}
                              <div>
                                <button
                                  onClick={() =>
                                    next && navigate(`/help/${next}`)
                                  }
                                  disabled={!next}
                                  className={`px-4 py-2 rounded-md bg-[#5e255dff] text-white transition ${
                                    next
                                      ? "hover:brightness-95"
                                      : "opacity-60 cursor-not-allowed"
                                  }`}
                                >
                                  Next →
                                </button>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </footer>
                  </article>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpArticle;
