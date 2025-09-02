import { motion } from "framer-motion";
import image from "./../assets/Adobe Express - file.png";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 px-23 bg-white overflow-hidden flex flex-col md:flex-row items-center justify-between gap-x-8">
      <motion.div
        className="hero-content flex flex-col justify-center md:items-start items-center text-left max-w-xl w-full mt-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-gradient-to-r from-[#5e255dff] via-[#a78bfa] to-[#5e255dff] bg-clip-text text-transparent">
            Boost Your <span className="text-[#5e255dff]">COD Sales</span>
          </span>{" "}
          with Smart Forms
        </motion.h1>
        <motion.p
          className="mb-8 text-lg md:text-xl text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Create professional cash-on-delivery forms that convert visitors into
          customers. Reduce cart abandonment and increase order completion rates
          with COD Rocket.
        </motion.p>
        <motion.div
          className="flex gap-4 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-7 py-3 rounded-lg font-semibold text-lg text-white bg-[#5e255dff] hover:bg-[#4a1d49] transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#5e255d] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Install Free App
          </motion.button>
          <motion.button
            className="px-7 py-3 rounded-lg font-semibold text-lg text-[#5e255d] border-2 border-[#e5c6e4] bg-[#f9f4f9] hover:bg-[#f3e6f3] transition-transform duration-200 transform hover:scale-105 shadow focus:outline-none focus:ring-2 focus:ring-[#e5c6e4] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm font-medium text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Easy installation</span>
          </div>
        </motion.div>
        {/* Stats Bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-5 mt-3 px-2 py-2 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-1.5">
            {/* User Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v2c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-2c0-3.343-6.686-5-10-5z"
                fill="#a78bfa"
              />
              <path
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v2c0 .553.447 1 1 1h18c.553 0 1-.447 1-1v-2c0-3.343-6.686-5-10-5z"
                fill="#a78bfa"
                fillOpacity=".2"
              />
            </svg>
            <span className="font-bold text-lg text-gray-800">
              50K<span className="font-normal text-sm">+ stores</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* 5 yellow stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                fill="#FFD600"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="font-bold text-lg text-gray-800 ml-1">4.9</span>
            <span className="text-sm text-gray-600 ml-1">rating</span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative flex justify-center items-center w-full md:w-auto mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Purple blob background */}
        <motion.svg
          className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width="370"
          height="370"
          viewBox="0 0 370 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <ellipse
            cx="185"
            cy="185"
            rx="185"
            ry="150"
            fill="#a78bfa"
            fillOpacity="0.25"
          />
        </motion.svg>
        <motion.div
          className="hero-image h-[28rem] w-64 md:h-[32rem] md:w-[28rem] flex justify-center items-center overflow-visible"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src={image}
            alt="Hero image"
            className="object-contain max-h-full max-w-full drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
