import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });
  const scrollContainerRef = useRef(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New testimonial:", formData);
    // Reset form
    setFormData({
      name: "",
      role: "",
      text: "",
      rating: 5,
    });
    // Show success message (you could add a toast notification here)
    alert(
      "Thank you for your testimonial! It will be reviewed and added soon."
    );
  };

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
    <section className="relative w-full py-23 px-23 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#2d123a] drop-shadow-sm tracking-tight">
          What Our Customers Say
        </h2>

        {/* Testimonials Container with Scroll Buttons */}
        <div className="relative mb-8">
          {/* Left Scroll Button */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 border border-[#9d3ecb]/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-[#9d3ecb]"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 border border-[#9d3ecb]/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-[#9d3ecb]"
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
            <div className="flex gap-8 px-12 py-10">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  className="flex-none w-80 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-[#9d3ecb]/10 p-8 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-xl mr-2 text-[#FFD700]">★★★★★</span>
                    </div>
                    <p className="text-lg text-[#3f3f3f] mb-8 italic">
                      {t.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow"
                    />
                    <div>
                      <div className="font-bold text-base text-[#2d123a]">
                        {t.name}
                      </div>
                      <div className="text-[#702c91] text-sm">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Testimonial Form */}
        <motion.div
          className="max-w-2xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-[#9d3ecb]/10 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#2d123a] mb-2">
                Share Your Experience
              </h3>
              <p className="text-[#702c91]">
                Help others by sharing your COD Rocket experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d123a] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2d123a] mb-2">
                    Your Role/Business *
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                    placeholder="e.g., Fashion Store Owner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d123a] mb-2">
                  Your Experience *
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#9d3ecb]/20 focus:border-[#9d3ecb] focus:outline-none transition-colors bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your experience with COD Rocket..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d123a] mb-2">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, rating: star }))
                      }
                      className={`text-2xl transition-colors ${
                        star <= formData.rating
                          ? "text-[#FFD700]"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-[#702c91]">
                    {formData.rating} star{formData.rating !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9d3ecb] to-[#702c91] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Testimonial
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
