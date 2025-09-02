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

        {/* Help Categories Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find detailed guides for every aspect of COD Form Builder
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Getting Started */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Getting Started
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Learn the basics of setting up and configuring your COD forms
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
              </motion.button>
            </motion.div>

            {/* Form Builder */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Form Builder
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Master the drag-and-drop form builder with advanced
                customization options
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
              </motion.button>
            </motion.div>

            {/* Order Management */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Order Management
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Handle COD orders, track deliveries, and manage customer
                communications
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
              </motion.button>
            </motion.div>

            {/* Customization */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a4 4 0 004 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customization
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Customize form appearance, validation rules, and delivery
                options
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
              </motion.button>
            </motion.div>

            {/* Shopify Integration */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Shopify Integration
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Seamlessly integrate with your Shopify store and other apps
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
              </motion.button>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Troubleshooting
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Solve common issues and get your forms working perfectly
              </p>
              <motion.button
                className="text-gray-900 font-semibold hover:text-[#5e255dff] transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                View Articles →
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

        {/* Video Tutorials Section */}
        <motion.div
          className="mt-20 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn visually with our step-by-step video guides
            </p>
          </div>

          {/* Video Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Getting Started Video */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black aspect-video flex items-center justify-center overflow-hidden">
                {/* Dark Themed Background Pattern */}
                <div className="absolute inset-0">
                  {/* Code/Form Elements Pattern */}
                  <div className="absolute top-4 left-4 w-16 h-2 bg-green-400 rounded opacity-60"></div>
                  <div className="absolute top-8 left-4 w-12 h-2 bg-blue-400 rounded opacity-60"></div>
                  <div className="absolute top-12 left-4 w-20 h-2 bg-purple-400 rounded opacity-60"></div>

                  {/* Form Field Mockups */}
                  <div className="absolute bottom-6 right-4 w-24 h-16 border border-gray-600 rounded bg-gray-800 opacity-70">
                    <div className="p-2">
                      <div className="w-full h-1 bg-gray-600 rounded mb-1"></div>
                      <div className="w-3/4 h-1 bg-gray-600 rounded mb-1"></div>
                      <div className="w-1/2 h-1 bg-gray-600 rounded"></div>
                    </div>
                  </div>

                  {/* Decorative Code Lines */}
                </div>

                <div className="text-white text-lg font-medium z-10 text-center">
                  <div className="text-sm opacity-80 mb-1">Tutorial #1</div>
                  <div>Getting Started Guide</div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Getting Started with COD Forms
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  A complete walkthrough of setting up your first COD form
                </p>
                <div className="text-sm text-[#5e255dff] font-medium">
                  Duration: 5:30
                </div>
              </div>
            </motion.div>

            {/* Advanced Form Building Video */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 aspect-video flex items-center justify-center overflow-hidden">
                {/* Dark Themed Background Pattern */}
                <div className="absolute inset-0">
                  {/* Drag & Drop Elements */}
                  <div className="absolute top-4 left-6 w-14 h-8 border-2 border-blue-400 rounded bg-blue-900 opacity-60 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded"></div>
                  </div>
                  <div className="absolute top-16 left-8 w-12 h-6 border-2 border-purple-400 rounded bg-purple-900 opacity-60"></div>

                  {/* Builder Interface Mockup */}
                  <div className="absolute bottom-4 right-6 w-28 h-20 border border-gray-600 rounded bg-slate-800 opacity-80">
                    <div className="p-2">
                      <div className="flex justify-between mb-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-600 rounded"></div>
                        <div className="w-4/5 h-1 bg-blue-400 rounded"></div>
                        <div className="w-3/5 h-1 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Cursor/Drag Indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-white text-lg font-medium z-10 text-center">
                  <div className="text-sm opacity-80 mb-1">Tutorial #2</div>
                  <div>Form Builder Advanced</div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Advanced Form Building
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  Master the drag-and-drop builder with advanced features
                </p>
                <div className="text-sm text-[#5e255dff] font-medium">
                  Duration: 8:15
                </div>
              </div>
            </motion.div>

            {/* Managing COD Orders Video */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-zinc-900 via-gray-900 to-black aspect-video flex items-center justify-center overflow-hidden">
                {/* Dark Themed Background Pattern */}
                <div className="absolute inset-0">
                  {/* Order Management Dashboard Elements */}
                  <div className="absolute top-4 right-4 w-20 h-12 border border-green-400 rounded bg-green-900 opacity-60 p-1">
                    <div className="text-green-400 text-xs font-mono">
                      Orders
                    </div>
                    <div className="text-green-300 text-xs">142</div>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-20 right-6 space-y-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                  </div>

                  {/* Order List Mockup */}
                  <div className="absolute bottom-4 left-4 w-24 h-16 border border-gray-600 rounded bg-zinc-800 opacity-70 p-2">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="text-xs text-gray-400">#001</div>
                      </div>
                      <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                      <div className="flex justify-between items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="text-xs text-gray-400">#002</div>
                      </div>
                    </div>
                  </div>

                  {/* Tracking Icon */}
                  <div className="absolute top-1/2 left-8 opacity-40">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-white text-lg font-medium z-10 text-center">
                  <div className="text-sm opacity-80 mb-1">Tutorial #3</div>
                  <div>Order Management</div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Managing COD Orders
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  Learn how to process and track your COD orders efficiently
                </p>
                <div className="text-sm text-[#5e255dff] font-medium">
                  Duration: 6:45
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our support team is here to help you succeed
              </p>
            </div>

            {/* Support Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Email Support */}
              <motion.div
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Email Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Email Background */}
                    <rect
                      x="8"
                      y="16"
                      width="48"
                      height="32"
                      rx="4"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <rect
                      x="8"
                      y="16"
                      width="48"
                      height="32"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Email Content Lines */}
                    <line
                      x1="16"
                      y1="26"
                      x2="48"
                      y2="26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="32"
                      x2="40"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="38"
                      x2="44"
                      y2="38"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Email Envelope */}
                    <path
                      d="M8 16 L32 32 L56 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {/* Email @ Symbol */}
                    <circle
                      cx="44"
                      cy="24"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="44" cy="24" r="1" fill="currentColor" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Get detailed help via email. We typically respond within 24
                  hours with comprehensive solutions.
                </p>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span>24h Response Time</span>
                </div>

                <motion.button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-4 h-4"
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
                  <span>Email Us</span>
                </motion.button>
              </motion.div>

              {/* Live Chat */}
              <motion.div
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Chat Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <svg
                    className="w-10 h-10 text-green-600"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main Chat Bubble */}
                    <path
                      d="M12 16 C12 12, 16 8, 20 8 L44 8 C48 8, 52 12, 52 16 L52 32 C52 36, 48 40, 44 40 L24 40 L12 48 L12 16 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <path
                      d="M12 16 C12 12, 16 8, 20 8 L44 8 C48 8, 52 12, 52 16 L52 32 C52 36, 48 40, 44 40 L24 40 L12 48 L12 16 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Chat Lines */}
                    <line
                      x1="20"
                      y1="20"
                      x2="44"
                      y2="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="20"
                      y1="26"
                      x2="36"
                      y2="26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="20"
                      y1="32"
                      x2="40"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Secondary Chat Bubble */}
                    <path
                      d="M38 44 C38 42, 40 40, 42 40 L54 40 C56 40, 58 42, 58 44 L58 52 C58 54, 56 56, 54 56 L46 56 L38 60 L38 44 Z"
                      fill="currentColor"
                      opacity="0.15"
                    />
                    <path
                      d="M38 44 C38 42, 40 40, 42 40 L54 40 C56 40, 58 42, 58 44 L58 52 C58 54, 56 56, 54 56 L46 56 L38 60 L38 44 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />

                    {/* Online Indicator */}
                    <circle cx="48" cy="12" r="4" fill="#10B981" />
                    <circle cx="48" cy="12" r="2" fill="white" />

                    {/* Typing Dots */}
                    <circle
                      cx="44"
                      cy="48"
                      r="1.5"
                      fill="currentColor"
                      opacity="0.6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="1.5"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    <circle
                      cx="52"
                      cy="48"
                      r="1.5"
                      fill="currentColor"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Chat with our support team in real-time during business hours
                  for instant assistance.
                </p>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available Now</span>
                </div>

                <motion.button
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Start Chat</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Contact Form Section */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#5e255dff] to-[#a855f7] px-8 py-6">
                  <h3 className="text-2xl font-bold text-white text-center">
                    Send us a message
                  </h3>
                  <p className="text-purple-100 text-center mt-2">
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </p>
                </div>

                {/* Form Body */}
                <div className="px-8 py-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5e255dff] focus:outline-none transition-all duration-300 group-hover:border-gray-300"
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
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5e255dff] focus:outline-none transition-all duration-300 group-hover:border-gray-300"
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
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5e255dff] focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-white appearance-none">
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={5}
                          placeholder="Describe your question or issue in detail... (minimum 20 characters)"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#5e255dff] focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                        ></textarea>
                        <div className="absolute bottom-3 right-3">
                          <span className="text-xs text-gray-400">0/500</span>
                        </div>
                      </div>
                    </div>

                    {/* Priority Level */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Priority Level
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value="low"
                            className="sr-only"
                          />
                          <div className="w-4 h-4 border-2 border-green-400 rounded-full mr-2 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 transition-opacity"></div>
                          </div>
                          <span className="text-sm text-gray-600">Low</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value="medium"
                            className="sr-only"
                            defaultChecked
                          />
                          <div className="w-4 h-4 border-2 border-yellow-400 rounded-full mr-2 flex items-center justify-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">Medium</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="priority"
                            value="high"
                            className="sr-only"
                          />
                          <div className="w-4 h-4 border-2 border-red-400 rounded-full mr-2 flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full opacity-0 transition-opacity"></div>
                          </div>
                          <span className="text-sm text-gray-600">High</span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-[#5e255dff] to-[#a855f7] hover:from-[#4a1d49] hover:to-[#9333ea] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
                      <motion.button
                        type="button"
                        className="sm:w-auto px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Save as Draft
                      </motion.button>
                    </div>
                  </form>

                  {/* Footer Info */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            />
                          </svg>
                          <span>Secure & Encrypted</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            />
                          </svg>
                          <span>Response within 24h</span>
                        </div>
                      </div>
                      <div className="text-xs mt-2 sm:mt-0">
                        By submitting, you agree to our{" "}
                        <a
                          href="#"
                          className="text-[#5e255dff] hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
