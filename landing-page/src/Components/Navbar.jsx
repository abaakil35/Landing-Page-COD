import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

// navLinks: Navigation items for the main navbar. Each item uses React Router DOM for client-side navigation.
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/demo", label: "Demo" },
  { to: "/docs", label: "Docs" }, // Docs: Documentation page link
];

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 sticky top-0 left-0 z-50 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] backdrop-blur-md shadow-[0_4px_24px_0_rgba(94,37,93,0.07)]">
      <div className="flex items-center min-w-[120px]">
        <img src={logo} alt="Logo" className="h-6 w-auto mr-4" />
      </div>
      <div className="flex-1 flex justify-center gap-12">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <motion.div
              key={link.to}
              whileTap={{ scale: 0.92 }}
              className="relative group"
            >
              <Link
                to={link.to}
                className={`text-gray-700 text-lg font-medium px-2 py-1 rounded transition-colors duration-150 relative
                  hover:text-[#5e255dff] focus:text-[#5e255dff]
                  ${isActive ? "text-[#5e255dff]" : ""}`}
              >
                {link.label}
                {/* Underline for active and hover states */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 rounded transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#5e255dff] opacity-100"
                        : "bg-[#5e255dff] opacity-0 group-hover:opacity-60 group-hover:scale-100 group-hover:opacity-100 scale-x-75"
                    }`}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors"
        >
          {theme === "light" ? (
            // Sun SVG for light mode (default)
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
        </button>
        <a
          href="#install"
          className="px-6 py-2 rounded-lg font-bold text-lg text-white bg-[#5e255dff] hover:bg-[#4a1d49] transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#5e255d] focus:ring-offset-2"
        >
          Install Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
