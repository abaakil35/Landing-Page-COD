import React, { useState, useContext } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContextContext.js";

const faqs = [
  {
    question: "How do I activate the COD Rocket form on my store?",
    answer:
      'To activate the form, go to your app Dashboard and click on "Activate the app on your store." From there, open your theme from the button provided, and click "Save" at the top-right of the editor. The COD form will then be live on your store.',
  },
  {
    question: "Where can I choose to display the COD form?",
    answer:
      "You can choose to display the form on your Product page and/or your Cart page. This can be adjusted in the Settings menu under the Form Settings tab. You also have the option to hide the default Shopify buttons for a cleaner look.",
  },
  {
    question: "What payment methods does COD Rocket support?",
    answer:
      "The app is designed specifically for Cash on Delivery (COD) businesses. Its primary function is to replace the standard Shopify checkout with a streamlined, one-page form tailored for COD orders.",
  },
  {
    question: "Can I customize the form's appearance?",
    answer:
      "Yes, you can. The Form Settings allow you to change the form mode (pop-up or embedded), customize fields, and adjust the form's style, including colors, border radius, and font family.",
  },
  {
    question: "How do I add shipping rates?",
    answer:
      "Go to the Settings menu and select the Shipping Settings tab. You can set up custom shipping rules by city, region, or shipping company. You can also define shipping prices based on the total order value to offer things like free shipping on larger orders.",
  },
  {
    question: "Can I redirect customers to WhatsApp after they place an order?",
    answer:
      'Yes. In the Form Settings tab, under the Post-Purchase Redirect section, you can select the option to "Open a WhatsApp conversation." You can add your phone number and even use shortcodes to automatically include order details in the message.',
  },
  {
    question: "What are the different pricing plans available?",
    answer:
      "We offer three plans: Basic for getting started (free), Grow for growing businesses, and Advanced for high-volume stores.",
  },
  {
    question: "What is the main difference between the plans?",
    answer:
      "The key difference is the number of orders you can process per month and the availability of certain features. The Basic plan is limited to 60 orders/month, while the Grow and Advanced plans offer higher limits and additional features and more robust support.",
  },
  {
    question: "What happens if I reach my monthly order limit?",
    answer:
      "The app will stop creating orders when you reach your monthly limit. The order count resets on the first day of every month, and we will send you notifications as you approach your limit to help you stay on track.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <motion.section
      id="faq"
      className={`relative w-full py-20 px-23 overflow-hidden ${
        isDark
          ? "bg-[#0f0712]"
          : "bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7]"
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Decorative blurred circles */}

      {/* Center-left blurred circle */}
      <div
        className={`absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
          isDark
            ? "bg-[#1b0f20]"
            : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
        }`}
      />
      {/* Center-right blurred circle */}
      <div
        className={`absolute top-1/2 right-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
          isDark
            ? "bg-[#1b0f20]"
            : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
        }`}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            FAQ
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-center mb-4 drop-shadow-sm tracking-tight ${
            isDark ? "text-white" : "text-[#2d123a]"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={`text-lg md:text-2xl text-center mb-12 max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-[#3f3f3f]"
          }`}
        >
          Everything you need to know about COD Rocket for your Shopify store
        </p>
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {faqs.slice(0, showMore ? 9 : 5).map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`backdrop-blur-xl rounded-xl shadow border-2 border-[#9d3ecb]/10 overflow-hidden ${
                isDark ? "bg-gray-800/80" : "bg-white/80"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center transition-colors cursor-pointer"
              >
                <h3
                  className={`text-base md:text-lg font-semibold pr-4 ${
                    isDark ? "text-white" : "text-[#2d123a]"
                  }`}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-[#9d3ecb] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[#9d3ecb] flex-shrink-0" />
                )}
              </button>
              <div
                className={`transition-all duration-400 ease-in-out px-6 overflow-hidden ${
                  openIndex === index
                    ? "pb-6 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity, padding",
                }}
              >
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-[#3f3f3f]"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#5e255dff] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md flex items-center gap-2 mx-auto"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            {showMore ? "Show Less" : "Show More"}
            <motion.div
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
