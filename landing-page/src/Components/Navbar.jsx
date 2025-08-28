import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
      <a
        href="#install"
        className="px-6 py-2 rounded-lg font-bold text-lg text-white bg-[#5e255dff] hover:bg-[#4a1d49] transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#5e255d] focus:ring-offset-2"
      >
        Install Now
      </a>
    </nav>
  );
};

export default Navbar;
