import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";
import ThemeToggle from "./ThemeToggle";

// navLinks: Navigation items for the main navbar. Each item uses React Router DOM for client-side navigation.
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  // { to: "/doc", label: "Docs" }, // Documentation: Complete guide and API reference
  { to: "/help-center", label: "Help Center" }, // Help Center: Support and documentation page
  { to: "/contact", label: "Contact" }, // Contact: Contact form / support
];

const Navbar = ({ variant }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isPurple = variant === "purple";

  // Check if we're on a documentation page
  const isDocPage =
    location.pathname === "/doc" || location.pathname === "/help-center/doc";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <motion.nav
      className={`relative w-full py-4 px-23 sticky top-0 left-0 z-50 ${
        isPurple
          ? "bg-[#5e255dff] text-white"
          : isDark
          ? "bg-[#120913] text-[#e9e7ee]"
          : "bg-white text-gray-700 backdrop-blur-md"
      } ${
        isScrolled || isDocPage
          ? isPurple
            ? "shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]"
            : isDark
            ? "shadow-[0_4px_24px_0_rgba(0,0,0,0.6)]"
            : "shadow-[0_4px_24px_0_rgba(94,37,93,0.07)]"
          : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center min-w-[120px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to="/">
            <motion.img
              key={isPurple ? "purple" : isDark ? "dark" : "light"}
              src={isPurple ? logoWhite : isDark ? logoWhite : logo}
              alt="Logo"
              className="h-8 w-40 mr-4 cursor-pointer object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center gap-2">
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
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 relative flex items-center justify-center
                    focus:outline-none focus:ring-2 ${
                      isPurple
                        ? "focus:ring-white/20"
                        : "focus:ring-[#5e255dff]/20"
                    } focus:ring-offset-2
                    ${(() => {
                      if (isActive) {
                        if (isPurple) return "text-white font-semibold";
                        if (isDark) return "text-[#b76be0] font-semibold";
                        return "text-[#5e255dff] font-semibold";
                      }
                      if (isPurple) return "text-white hover:text-white";
                      if (isDark) return "text-[#e9e7ee] hover:text-[#b76be0]";
                      return "text-gray-700 hover:text-[#5e255dff]";
                    })()}
                    `}
                >
                  {link.label}

                  {/* Hover underline animation */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 h-0.5 ${
                      isPurple ? "bg-white" : "bg-[#5e255dff]"
                    }`}
                    initial={{ width: 0, x: "-50%" }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  {/* Active state underline */}
                  {isActive && (
                    <motion.div
                      className={`absolute bottom-0 left-1/2 h-0.5 ${
                        isPurple ? "bg-white" : "bg-[#5e255dff]"
                      }`}
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

        {/* Desktop Right Side */}
        <motion.div
          className="hidden xl:flex items-center gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ThemeToggle
            className={
              isPurple
                ? "rounded-lg bg-white/10 text-white"
                : "rounded-lg hover:bg-gray-100"
            }
          />
          <motion.a
            href="https://apps.shopify.com/codrocket"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-lg font-semibold text-base text-white ${
              isPurple
                ? "bg-white/10 hover:bg-white/20"
                : "bg-[#5e255dff] hover:bg-[#4a1d49]"
            } transition-all duration-200 transform hover:scale-105 shadow-sm focus:outline-none ${
              isPurple ? "focus:ring-white/30" : "focus:ring-[#5e255d]"
            } focus:ring-offset-1 inline-block`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Install Now
          </motion.a>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <motion.button
          className={`xl:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${
            isPurple ? "hover:bg-white/10" : "hover:bg-gray-100"
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <motion.span
              className={`${
                isPurple ? "bg-white" : "bg-gray-700"
              } block h-0.5 w-6 rounded-sm`}
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className={`${
                isPurple ? "bg-white" : "bg-gray-700"
              } block h-0.5 w-6 rounded-sm`}
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className={`${
                isPurple ? "bg-white" : "bg-gray-700"
              } block h-0.5 w-6 rounded-sm`}
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`xl:hidden absolute top-full left-0 right-0 ${
              isDark
                ? "bg-[#120913] border-gray-700"
                : "bg-white border-gray-200"
            } border-t shadow-xl z-50`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <motion.div
              className="px-6 py-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      className={`block text-gray-700 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-[#5e255dff] bg-purple-50"
                          : "hover:text-[#5e255dff] hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Action Buttons */}
              <motion.div
                className="pt-4 border-t border-gray-200 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <motion.button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-gray-700 font-medium">
                    Toggle Theme
                  </span>
                  {theme === "light" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="5" fill="#FFD600" />
                      <g stroke="#FFD600" strokeWidth="1.5">
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
                  ) : (
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

                <motion.a
                  href="https://apps.shopify.com/codrocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-5 py-3 rounded-lg font-semibold text-lg text-white bg-[#5e255dff] hover:bg-[#4a1d49] transition-all duration-200 shadow-sm inline-block text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  Install Now
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
