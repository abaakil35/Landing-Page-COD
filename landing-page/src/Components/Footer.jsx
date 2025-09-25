import logo from "../assets/logo_white.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";
import { useNavigate, useLocation } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.facebook.com/CODRocket/",
    label: "Facebook",
    color: "hover:bg-blue-600",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/codrocket.official/#",
    label: "Instagram",
    color: "hover:bg-pink-600",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@codrocket",
    label: "YouTube",
    color: "hover:bg-red-600",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.116C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.391.57A2.994 2.994 0 0 0 .502 6.186 31.003 31.003 0 0 0 0 12a31.003 31.003 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.116C4.4 20.5 12 20.5 12 20.5s7.6 0 9.391-.57a2.994 2.994 0 0 0 2.107-2.116A31.003 31.003 0 0 0 24 12a31.003 31.003 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

const footerSections = [
  {
    title: "Features",
    links: [
      { href: "#pricing", label: "Pricing" },
      { href: "#features", label: "Features" },
      { href: "/help-center", label: "Help Center" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "mailto:support@codrocket.com", label: "Email" },
      { href: "https://wa.me/212656588699", label: "WhatsApp" },
    ],
  },
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const location = useLocation();

  // Helper: navigate to a path or scroll to a hash on the page
  const handleNav = (href) => (e) => {
    // external link: leave default behavior
    if (/^https?:\/\//.test(href)) return;

    e.preventDefault();
    const [path, hash] = href.split("#");
    const targetPath = path === "" ? "/" : path;

    const doScroll = () => {
      if (hash) {
        // try to find element by id
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === targetPath) {
      // same route: just scroll
      doScroll();
    } else {
      // navigate then wait a tick and scroll
      navigate(targetPath);
      // wait for route change and DOM update
      setTimeout(doScroll, 50);
    }
  };

  return (
    <footer
      className={`w-full pt-16 pb-8 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#1a1f2e] text-gray-300"
          : "bg-gradient-to-br from-[#5e255dff] via-[#4a1d49] to-[#2d1129] text-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl ${
              isDark ? "bg-slate-400" : "bg-purple-400"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl ${
              isDark ? "bg-gray-400" : "bg-pink-400"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl opacity-30 ${
              isDark ? "bg-zinc-400" : "bg-indigo-400"
            }`}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src={logo}
                  alt="COD Rocket Logo"
                  className="h-12 object-contain filter brightness-0 invert mb-4"
                />
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  Unify your business back office with COD Rocket—an all-in-one
                  platform that handles COD Formation, Order Management,
                  Analytics, and E-commerce Integration.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.svg}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIdx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * sectionIdx }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * linkIdx }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          onClick={handleNav(link.href)}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-gray-500">•</span>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                  <span className="text-gray-500">•</span>
                  <a
                    href="#cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                © 2025 CodeRocket. All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
