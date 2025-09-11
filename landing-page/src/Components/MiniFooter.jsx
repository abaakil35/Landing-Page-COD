import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_white.png';

const MiniFooter = () => {
  const links = [
    { href: '/help-center', label: 'Help Center' },
    { href: '/doc', label: 'Documentation' },
    { href: '#tutorials', label: 'Video Tutorials' },
    { href: '#community', label: 'Community' },
    { href: '#support', label: 'Contact Support' },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-[#5e255dff] via-[#4a1d49] to-[#2d1129] text-gray-300 py-8 px-4 pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="COD Rocket Logo"
              className="h-8 object-contain filter brightness-0 invert"
            />
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © 2024 COD Rocket. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default MiniFooter;
