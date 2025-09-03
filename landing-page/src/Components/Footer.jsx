import logo from "../assets/logo_white.png";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    color: "hover:bg-blue-600",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    color: "hover:bg-sky-500",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "hover:bg-blue-700",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:bg-pink-600",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const footerSections = [
  {
    title: "Products",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#demo", label: "Demo" },
      { href: "#api", label: "API" },
      { href: "#integrations", label: "Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#blog", label: "Blog" },
      { href: "#careers", label: "Careers" },
      { href: "#privacy", label: "Privacy Policy" },
      { href: "#terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "#vs-competitors", label: "COD Rocket vs. Others" },
      { href: "#features-comparison", label: "Feature Comparison" },
      { href: "#pricing-comparison", label: "Pricing Comparison" },
      { href: "#alternatives", label: "Alternatives" },
      { href: "#migration", label: "Migration Guide" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/help-center", label: "Help Center" },
      { href: "#docs", label: "Documentation" },
      { href: "#tutorials", label: "Video Tutorials" },
      { href: "#community", label: "Community" },
      { href: "#support", label: "Contact Support" },
    ],
  },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#5e255dff] via-[#4a1d49] to-[#2d1129] text-gray-300 pt-20 pb-8 px-23 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Logo + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Left: Logo and Description */}
          <motion.div
            className="lg:w-1/2 ml-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={logo}
                  alt="COD Rocket Logo"
                  className="h-10 object-contain filter brightness-0 invert"
                />
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                Unify your business back office with COD Rocket—an all-in-one
                platform that handles COD Formation, Order Management,
                Analytics, and E-commerce Integration. No paperwork. No stress.
                Just pure growth.
              </p>
            </div>
          </motion.div>

          {/* Right: Newsletter Subscription */}
          <motion.div
            className="lg:w-1/2 justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 mb-4">
              <h3 className="text-xl font-bold text-white">
                Join COD Rocket's monthly newsletter
              </h3>

              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-84 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                />
                <motion.button
                  className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe →
                </motion.button>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              By subscribing you agree with our{" "}
              <a href="#privacy" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div className="flex flex-wrap justify-between gap-8 mb-12">
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              className="flex-1 min-w-[200px] space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIdx }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4">
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
                      className="block text-gray-300 hover:text-white transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <hr className="border-white/20 mb-8" />
        </motion.div>

        {/* Bottom Section: Copyright and Social */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 text-sm text-gray-400">
            <span>© 2024 COD Rocket. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <span className="text-gray-600">•</span>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
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
                className="text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </footer>
);

export default Footer;
