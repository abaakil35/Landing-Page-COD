import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer:
      "Installation is incredibly simple and takes less than 2 minutes. Just install from the Shopify App Store, and our setup wizard will guide you through the process.",
  },
  {
    question: "Will this slow down my store?",
    answer:
      "No, our plugin is optimized for performance. We use advanced caching and CDN technology to ensure your store loads faster, not slower.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! We provide 24/7 customer support via live chat, email, and phone. Our team of Shopify experts is always ready to help you succeed.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time with no cancellation fees. We also offer a 30-day money-back guarantee.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use bank-level SSL encryption, are PCI compliant, and follow all Shopify security guidelines to protect your data.",
  },
  {
    question: "Do you integrate with other apps?",
    answer:
      "Yes, we integrate with over 100+ popular Shopify apps including email marketing tools, inventory management, and analytics platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      id="faq"
      className="relative w-full py-20 px-12 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            FAQ
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#2d123a] drop-shadow-sm tracking-tight">
          Frequently Asked <span className="text-[#9d3ecb]">Questions</span>
        </h2>
        <p className="text-lg md:text-2xl text-[#3f3f3f] text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about our Shopify plugin
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-xl shadow border-2 border-[#9d3ecb]/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center transition-colors cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#2d123a] pr-4">
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
                <p className="text-[#3f3f3f] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-[#3f3f3f] mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
