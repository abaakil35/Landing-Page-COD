import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelpCenter = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I integrate COD Rocket with my Shopify store?",
      answer:
        "Integration is simple! Just install our app from the Shopify App Store, configure your COD settings, and you're ready to go. Our setup wizard guides you through the entire process.",
    },
    {
      question: "What are the fees for using COD Rocket?",
      answer:
        "We offer flexible pricing plans starting from $9.99/month. Check our pricing page for detailed information about features included in each plan.",
    },
    {
      question: "Can I customize the COD form for my store?",
      answer:
        "Absolutely! COD Rocket offers extensive customization options including form fields, styling, validation rules, and checkout flow to match your brand.",
    },
    {
      question: "How does the order verification work?",
      answer:
        "Our smart verification system uses multiple data points to validate orders, reducing fake orders by up to 80%. This includes phone verification, address validation, and fraud detection.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes! We offer 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to help you succeed.",
    },
    {
      question: "Can I track my COD performance?",
      answer:
        "Yes, our dashboard provides comprehensive analytics including conversion rates, order success rates, delivery performance, and revenue insights.",
    },
  ];

  return (
    <div className="relative w-full py-20 px-23 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            COD Form Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete help center for your Cash on Delivery form building needs
            Rocket
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-[#5e255dff] focus:outline-none transition-colors"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#5e255dff] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running with COD Form Builder in minutes
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            {/* Step 1: Install App */}
            <motion.div
              className="text-center group flex-1 max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative mb-6">
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-10 h-10 text-[#5e255dff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Install App
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Install COD Form Builder from the Shopify App Store with one
                click
              </p>
              <motion.button
                className="px-4 py-2 border-2 border-[#5e255dff] text-[#5e255dff] rounded-lg text-sm font-semibold hover:bg-[#5e255dff] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Step 2: Create Form */}
            <motion.div
              className="text-center group flex-1 max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-6">
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#e0f2fe] to-[#b3e5fc] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-10 h-10 text-[#0288d1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Create Form
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Use our drag-and-drop builder to create your perfect COD form
              </p>
              <motion.button
                className="px-4 py-2 border-2 border-[#0288d1] text-[#0288d1] rounded-lg text-sm font-semibold hover:bg-[#0288d1] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Step 3: Customize */}
            <motion.div
              className="text-center group flex-1 max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative mb-6">
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#e8f5e8] to-[#c8e6c9] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-10 h-10 text-[#2e7d32]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Customize
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Style your form to match your brand and set up delivery rules
              </p>
              <motion.button
                className="px-4 py-2 border-2 border-[#2e7d32] text-[#2e7d32] rounded-lg text-sm font-semibold hover:bg-[#2e7d32] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.button
                  className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors text-left"
                  onClick={() => toggleFAQ(index)}
                  whileTap={{ scale: 0.995 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          className="mt-16 text-center bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-[#5e255dff] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#4a1d48] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="border-2 border-[#5e255dff] text-[#5e255dff] px-8 py-3 rounded-xl font-semibold hover:bg-[#5e255dff] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
