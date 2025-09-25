import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import helpData from "../data/help";

// helper: find topic/article by slug (normalize ids to be robust against trailing spaces/casing)
const normalize = (s) => (typeof s === "string" ? s.trim().toLowerCase() : s);
const findTopic = (topicId) =>
  helpData.topics.find((t) => normalize(t.id) === normalize(topicId));
const findArticle = (topic, articleId) =>
  topic?.articles?.find((a) => normalize(a.id) === normalize(articleId)) ||
  null;

const itemMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.28 },
};

const HelpArticle = () => {
  const { topic: topicId, article: articleId, id } = useParams();
  const navigate = useNavigate();

  // Resolve current topic/article from JSON. Support legacy numeric `id` param by falling back to first topic.
  let currentTopic = null;
  let currentArticle = null;

  if (topicId) {
    currentTopic = findTopic(topicId);
    currentArticle = findArticle(currentTopic, articleId);
  } else if (id) {
    // legacy: map numeric id -> topic index (1-based in old CONTENT)
    const index = parseInt(id, 10) - 1;
    currentTopic = helpData.topics[index] || null;
    currentArticle = currentTopic?.articles?.[0] || null;
  }

  // If the route includes a topic but no article, redirect to the topic's first article
  React.useEffect(() => {
    if (topicId && !articleId && currentTopic) {
      const firstArticle = currentTopic.articles && currentTopic.articles[0];
      if (firstArticle) {
        navigate(`/help/${topicId}/${firstArticle.id}`, { replace: true });
      }
    }
  }, [topicId, articleId, currentTopic, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="purple" />

      {/* Compact headline between nav and content (fixed under the navbar) */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.36 }}
        className="fixed inset-x-0 top-16 z-40 bg-white shadow"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 shadow-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ">
            <div>
              <nav
                className="text-sm text-gray-500 mb-1 "
                aria-label="Breadcrumb"
              >
                <Link to="/help-center" className="hover:text-[#5e255dff]">
                  Help Center
                </Link>
                <span className="px-2">/</span>
                <span className="text-gray-700 font-medium">
                  {currentTopic?.title || "Topic"}
                </span>
              </nav>
              <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900">
                {currentArticle?.title || currentTopic?.title || "Help Center"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {currentTopic?.description ||
                  "Find helpful guides and troubleshooting articles."}
              </p>
            </div>
            <div className="flex-shrink-0">
              {/* optional quick action button */}
              <Link
                to="/help-center"
                className="inline-flex items-center px-4 py-2 rounded-md bg-[#5e255dff] text-white text-sm font-medium hover:brightness-95"
              >
                Browse Topics
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* spacer to avoid content being covered by the fixed headline
      responsive: taller on mobile (stacked layout) and shorter on sm+ */}
      <div className="h-28 sm:h-24" aria-hidden="true" />

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
                  {helpData.topics.map((topic) => {
                    const isActiveTopic = currentTopic?.id === topic.id;
                    return (
                      <div key={topic.id}>
                        <Link
                          to={`/help/${topic.id}/${topic.articles[0]?.id}`}
                          className={`block rounded-md px-3 py-2 text-sm transition-all duration-150 group ${
                            isActiveTopic
                              ? "bg-[#f6f0ff] text-[#5e255dff] font-semibold shadow"
                              : "text-gray-700 hover:bg-gray-50 hover:translate-x-1"
                          }`}
                        >
                          <span className="block truncate">{topic.title}</span>
                          <span className="text-xs text-gray-400 block mt-0.5">
                            {topic.description}
                          </span>
                        </Link>

                        {isActiveTopic && (
                          <div className="mt-2 pl-3 space-y-1">
                            {topic.articles.map((a) => (
                              <Link
                                key={a.id}
                                to={`/help/${topic.id}/${a.id}`}
                                className={`flex items-center gap-2 text-sm ${
                                  a.id === currentArticle?.id
                                    ? "text-[#5e255dff] font-semibold"
                                    : "text-gray-600 hover:text-[#5e255dff]"
                                }`}
                                aria-current={
                                  a.id === currentArticle?.id
                                    ? "true"
                                    : undefined
                                }
                              >
                                {a.id === currentArticle?.id ? (
                                  <svg
                                    className="h-4 w-4 text-[#5e255dff] flex-shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.21 4.21a.75.75 0 011.06 0l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06L12.19 10 7.21 5.06a.75.75 0 010-1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ) : (
                                  <span className="w-4" />
                                )}
                                <span className="truncate">{a.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
                {helpData.topics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/help/${topic.id}/${topic.articles[0]?.id}`}
                    className={`flex-shrink-0 px-3 py-2 rounded-md text-sm border ${
                      currentTopic?.id === topic.id
                        ? "bg-[#5e255dff] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {topic.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main article area */}
          <section className="order-1 lg:order-2 lg:col-span-3 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={id || "notfound"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.32 }}
                className="bg-white rounded-2xl shadow-sm p-8 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto"
              >
                {!currentArticle ? (
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
                    {/* Breadcrumb / path headline */}
                    <div className="mb-4 text-sm text-gray-500">
                      <nav
                        className="flex items-center gap-2 text-sm"
                        aria-label="Breadcrumb"
                      >
                        <Link
                          to="/help-center"
                          className="text-gray-400 hover:text-[#5e255dff]"
                        >
                          Help Center
                        </Link>
                        <span className="text-gray-300">/</span>
                        <Link
                          to={`/help/${currentTopic?.id}/${currentTopic?.articles?.[0]?.id}`}
                          className="text-gray-600 hover:text-[#5e255dff]"
                        >
                          {currentTopic?.title || "Topic"}
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-700">
                          {currentArticle?.title}
                        </span>
                      </nav>
                    </div>

                    <header className="mb-6">
                      <h1 className="text-3xl font-extrabold text-gray-900">
                        {currentArticle.title}
                      </h1>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-gray-600">
                          {currentTopic?.description || ""}
                        </p>
                        <time className="text-sm text-gray-400">
                          Last updated: Sep 24, 2025
                        </time>
                      </div>
                    </header>

                    <motion.div
                      {...itemMotion}
                      className="prose prose-lg max-w-none text-gray-800 prose-headings:text-[#5e255dff] prose-strong:text-[#5e255dff] prose-a:text-[#5e255dff] hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: currentArticle.body }}
                    />

                    <footer className="mt-8 border-t pt-6">
                      <div className="flex items-center justify-between">
                        {(() => {
                          // previous/next within the current topic
                          const aIndex =
                            currentTopic?.articles?.findIndex(
                              (a) => a.id === currentArticle.id
                            ) ?? -1;
                          const prevA =
                            aIndex > 0
                              ? currentTopic.articles[aIndex - 1]
                              : null;
                          const nextA =
                            aIndex < (currentTopic?.articles?.length ?? 0) - 1
                              ? currentTopic.articles[aIndex + 1]
                              : null;
                          return (
                            <>
                              <div>
                                <button
                                  onClick={() =>
                                    prevA &&
                                    navigate(
                                      `/help/${currentTopic.id}/${prevA.id}`
                                    )
                                  }
                                  disabled={!prevA}
                                  className={`px-4 py-2 rounded-md transition ${
                                    prevA
                                      ? "bg-white text-gray-700 hover:shadow-sm"
                                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                  }`}
                                >
                                  ← Previous
                                </button>
                              </div>

                              <div>
                                <button
                                  onClick={() =>
                                    nextA &&
                                    navigate(
                                      `/help/${currentTopic.id}/${nextA.id}`
                                    )
                                  }
                                  disabled={!nextA}
                                  className={`px-4 py-2 rounded-md bg-[#5e255dff] text-white transition ${
                                    nextA
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

      <div className="px-39 py-6 text-center">
        <div className=" bg-gradient-to-r from-[#5e255dff] to-[#4a1d49] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Not finding what you're looking for?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Our support team is here to help you with any questions or issues
            you might have.
          </p>
          <Link to="/contact">
            <button className="bg-white text-[#5e255dff] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Send an Email
            </button>
          </Link>
        </div>
      </div>

      {/* Footer is rendered at the app level in App.jsx to avoid duplicates */}
    </div>
  );
};

export default HelpArticle;
