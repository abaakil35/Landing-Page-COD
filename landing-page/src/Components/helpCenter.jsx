import { motion } from "framer-motion";

const HelpCenter = () => {
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

  const guides = [
    {
      title: "Getting Started Guide",
      description: "Learn how to set up COD Rocket in your Shopify store",
      icon: "🚀",
    },
    {
      title: "Customization Guide",
      description: "Customize forms and checkout flow to match your brand",
      icon: "🎨",
    },
    {
      title: "Analytics Guide",
      description: "Understanding your COD performance metrics",
      icon: "📊",
    },
    {
      title: "Best Practices",
      description: "Tips to maximize your COD conversion rates",
      icon: "💡",
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
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to your questions and learn how to make the most of COD
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

        {/* Quick Start Guides */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Start Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-[#5e255dff]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600">{guide.description}</p>
              </motion.div>
            ))}
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
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform flex-shrink-0"
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
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
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
