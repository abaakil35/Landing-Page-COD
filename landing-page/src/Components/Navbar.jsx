import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

// navLinks: Navigation items for the main navbar. Each item uses React Router DOM for client-side navigation.
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/help-center", label: "Help Center" }, // Help Center: Support and documentation page
];

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`relative w-full py-4 px-23 sticky top-0 left-0 z-50 bg-white backdrop-blur-md transition-all duration-300 overflow-hidden ${
        isScrolled ? "shadow-[0_4px_24px_0_rgba(94,37,93,0.07)]" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center min-w-[120px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="h-6 w-auto mr-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          />
        </motion.div>
        <div className="flex-1 flex justify-center gap-2">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.to;
            return (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className={`text-gray-700 text-base font-medium px-4 py-2 rounded-lg transition-all duration-200 relative flex items-center justify-center
                  hover:text-[#5e255dff] focus:text-[#5e255dff] focus:outline-none focus:ring-2 focus:ring-[#5e255dff]/20 focus:ring-offset-2
                   ${isActive ? "text-[#5e255dff] font-semibold" : ""}`}
                >
                  {link.label}

                  {/* Hover underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[#5e255dff]"
                    initial={{ width: 0, x: "-50%" }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  {/* Active state underline */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 bg-[#5e255dff]"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? (
              // Sun SVG for light mode (default) - COMMENTED OUT
              /*
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" fill="#FFD600" />
              <g stroke="#FFD600" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
            */
              <div className="w-6 h-6"></div>
            ) : (
              // Moon SVG for dark mode
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  fill="#232b36"
                  stroke="#232b36"
                  strokeWidth="2"
                />
              </svg>
            )}
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg font-medium text-base text-gray-700 hover:text-[#5e255dff] hover:bg-gray-50 transition-colors"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            className="px-5 py-2 rounded-lg font-semibold text-base text-white bg-[#5e255dff] hover:bg-[#4a1d49] transition-all duration-200 transform hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5e255d] focus:ring-offset-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Install Now
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
