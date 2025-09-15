import { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContextContext.js";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Store Owner",
    text: '"COD Rocket transformed our cash on delivery process. Our conversion rates increased by 40% within the first month!"',
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Hassan",
    role: "Electronics Retailer",
    text: '"The order management dashboard is incredible. We can track everything in real-time and our fake orders dropped significantly."',
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Beauty Products",
    text: '"Super easy to set up and the customer support is amazing. Highly recommend for any Shopify store offering COD!"',
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Chen",
    role: "Home Decor Store",
    text: '"The fraud detection system is amazing! We reduced fake orders by 85% and our customers love the smooth checkout experience."',
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Jewelry Boutique",
    text: '"COD Rocket made managing cash on delivery so much easier. The analytics dashboard gives us insights we never had before!"',
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Handle manual scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth =
          scrollContainerRef.current.children[0]?.offsetWidth || 0;
        const gap = 32; // gap-8 = 32px
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));

        if (
          newIndex !== currentIndex &&
          newIndex >= 0 &&
          newIndex < testimonials.length
        ) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth;
      const gap = 32; // gap-8 = 32px
      scrollContainerRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth;
      const gap = 32; // gap-8 = 32px
      scrollContainerRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`relative w-full py-23 px-23 overflow-hidden ${
        isDark
          ? "bg-[#0f0712]"
          : "bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7]"
      }`}
    >
      {/* Decorative blurred circles */}
      <div
        className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60 z-0 ${
          isDark ? "bg-[#a855f7]/10" : "bg-[#5affff]/20"
        }`}
      />
      {/* Center-left blurred circle (moved from top-left corner) */}
      <div
        className={`absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-60 blur-3xl z-0 ${
          isDark ? "bg-[#b76be0]/10" : "bg-[#9d3ecb]/20"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span
            className={`uppercase tracking-widest text-xs font-semibold ${
              isDark ? "text-[#b76be0]" : "text-[#702c91]"
            }`}
          >
            Testimonials
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-center mb-4 drop-shadow-sm tracking-tight ${
            isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
          }`}
        >
          What Our Customers Say
        </h2>
        <p
          className={`text-center text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
          }`}
        >
          Discover how COD Rocket has transformed businesses across different
          industries. Real stories from real customers who've experienced
          remarkable growth.
        </p>

        {/* Testimonials Container with Scroll Buttons */}
        <div className="relative mb-8">
          {/* Left Scroll Button */}
          <motion.button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 transition-all duration-300 ${
              isDark
                ? "bg-[#1b0f20]/90 backdrop-blur-sm hover:bg-[#2d1129] shadow-lg hover:shadow-xl border border-[#b76be0]/20"
                : "bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl border border-[#9d3ecb]/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              className={`w-6 h-6 ${
                isDark ? "text-[#b76be0]" : "text-[#9d3ecb]"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Right Scroll Button */}
          <motion.button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 transition-all duration-300 ${
              isDark
                ? "bg-[#1b0f20]/90 backdrop-blur-sm hover:bg-[#2d1129] shadow-lg hover:shadow-xl border border-[#b76be0]/20"
                : "bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl border border-[#9d3ecb]/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              className={`w-6 h-6 ${
                isDark ? "text-[#b76be0]" : "text-[#9d3ecb]"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            <div className="flex gap-8 px-12 py-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  className={`flex-none w-96 rounded-2xl shadow-xl p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-2 hover:shadow-xl ${
                    isDark
                      ? "bg-[#1b0f20]/80 backdrop-blur-xl border-2 border-[#b76be0]/20"
                      : "bg-white/80 backdrop-blur-xl border-2 border-[#9d3ecb]/10"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-xl mr-2 text-[#FFD700]">★★★★★</span>
                    </div>
                    <p
                      className={`text-lg mb-8 italic ${
                        isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
                      }`}
                    >
                      {t.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <img
                      src={t.img}
                      alt={`${t.name} - ${t.role}`}
                      width="48"
                      height="48"
                      className={`w-12 h-12 rounded-full mr-4 object-cover border-2 shadow ${
                        isDark ? "border-[#b76be0]/30" : "border-white"
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <div
                        className={`font-bold text-base ${
                          isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
                        }`}
                      >
                        {t.name}
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? "text-[#b76be0]" : "text-[#702c91]"
                        }`}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Share Testimonials Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-[#5e255dff] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Testimonials
          </motion.button>
          <p
            className={`text-sm mt-3 ${
              isDark ? "text-[#e9e7ee]/70" : "text-gray-600"
            }`}
          >
            Help others discover COD Rocket's benefits
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
