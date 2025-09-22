import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContextContext.js";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    priority: "medium",
  });
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send form to backend
  }

  return (
    <section className={`py-16 px-4 ${isDark ? "bg-black min-h-screen" : ""}`}>
      <motion.div
        className={`max-w-4xl mx-auto py-6 px-4 ${
          isDark ? "bg-black" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="mb-7 text-center">
          <h2
            className={`text-5xl sm:text-5xl font-extrabold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Contact our team
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a question? We're here to help — send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div
          className={`rounded-2xl shadow-lg overflow-hidden ${
            isDark
              ? "bg-black border border-gray-700"
              : "bg-white border border-gray-100"
          }`}
        >
          {/* Form Header */}
          <div
            className={`px-8 py-6 ${
              isDark ? "bg-[#5e255dff]" : "bg-[#5e255dff]"
            }`}
          >
            <h3 className="text-2xl font-bold text-white text-center">
              Send us a message
            </h3>
            <p
              className={`text-center mt-2 ${
                isDark ? "text-purple-100" : "text-purple-100"
              }`}
            >
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          {/* Form Body */}
          <div className="px-8 py-6">
            {submitted ? (
              <div
                className={`rounded-2xl p-8 text-center font-semibold ${
                  isDark
                    ? "bg-[#1b0f20]/80 text-[#e9e7ee]"
                    : "bg-white/80 text-[#2d123a]"
                }`}
              >
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          isDark
                            ? "border-gray-600 bg-black text-white placeholder-gray-400 focus:border-[#5e255dff] group-hover:border-gray-500"
                            : "border-gray-200 bg-white text-gray-900 focus:border-[#5e255dff] group-hover:border-gray-300"
                        }`}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          isDark
                            ? "border-gray-600 bg-black text-white placeholder-gray-400 focus:border-[#5e255dff] group-hover:border-gray-500"
                            : "border-gray-200 bg-white text-gray-900 focus:border-[#5e255dff] group-hover:border-gray-300"
                        }`}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className={`w-5 h-5 ${
                            isDark ? "text-gray-500" : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 appearance-none ${
                        isDark
                          ? "border-gray-600 bg-black text-white focus:border-[#5e255dff] group-hover:border-gray-500"
                          : "border-gray-200 bg-white text-gray-900 focus:border-[#5e255dff] group-hover:border-gray-300"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Describe your question or issue in detail... (minimum 20 characters)"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                        isDark
                          ? "border-gray-600 bg-black text-white placeholder-gray-400 focus:border-[#5e255dff] group-hover:border-gray-500"
                          : "border-gray-200 bg-white text-gray-900 focus:border-[#5e255dff] group-hover:border-gray-300"
                      }`}
                    ></textarea>
                    <div className="absolute bottom-3 right-3">
                      <span
                        className={`text-xs ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        0/500
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    type="submit"
                    className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                      isDark
                        ? "bg-[#5e255dff] hover:bg-[#4a1d49] text-white"
                        : "bg-[#5e255dff] hover:bg-[#4a1d49] text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.button>
                </div>
              </form>
            )}

            {/* Footer Info */}
            <div
              className={`mt-6 pt-6 ${
                isDark ? "border-t border-gray-700" : "border-t border-gray-100"
              }`}
            >
              <div
                className={`flex flex-col sm:flex-row items-center justify-between text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <div className="text-xs mt-2 sm:mt-0">
                  * The team typically responds within a few hours during
                  business days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
