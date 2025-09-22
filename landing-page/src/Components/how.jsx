import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

function HowCODWorks() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const themeSteps = [
    {
      title: "Install & Setup",
      desc: "Install COD Rocket from the Shopify App Store and customize your COD form settings in minutes.",
      color: isDark
        ? "from-[#2d1129] via-[#1b0f20] to-[#120913]"
        : "from-[#9d3ecb] via-[#702c91] to-[#2d123a]",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="url(#installGradient)" />
          <rect
            x="18"
            y="20"
            width="28"
            height="24"
            rx="4"
            fill="#fff"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <path
            d="M26 28h12M26 34h8M26 40h10"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="44" cy="24" r="4" fill="#f59e0b" />
          <path
            d="M42 24l2 2 4-4"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="installGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Customize Forms",
      desc: "Design beautiful COD forms that match your brand and collect the information you need from customers.",
      color: isDark
        ? "from-[#1b0f20] via-[#2d1129] to-[#120913]"
        : "from-[#dddddd] via-[#9e9e9e] to-[#3f3f3f]",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="url(#customizeGradient)" />
          <rect
            x="18"
            y="20"
            width="28"
            height="24"
            rx="4"
            fill="#fff"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <circle cx="24" cy="28" r="2" fill="#ef4444" />
          <circle cx="32" cy="28" r="2" fill="#f59e0b" />
          <circle cx="40" cy="28" r="2" fill="#10b981" />
          <rect x="22" y="36" width="20" height="2" rx="1" fill="#9d3ecb" />
          <rect x="22" y="40" width="16" height="2" rx="1" fill="#a855f7" />
          <path d="M48 16l-4 4 2 2 4-4-2-2z" fill="#6366f1" />
          <defs>
            <linearGradient
              id="customizeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fefbff" />
              <stop offset="100%" stopColor="#f3e8ff" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Manage Orders",
      desc: "Track, verify, and manage all your COD orders from one central dashboard with automated workflows.",
      color: isDark
        ? "from-[#2d1129] via-[#1b0f20] to-[#120913]"
        : "from-[#5affff] via-[#40c4ff] to-[#1a4e66]",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" fill="url(#manageGradient)" />
          <rect
            x="18"
            y="16"
            width="28"
            height="32"
            rx="4"
            fill="#fff"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect x="22" y="22" width="20" height="2" rx="1" fill="#10b981" />
          <rect x="22" y="26" width="16" height="2" rx="1" fill="#3b82f6" />
          <rect x="22" y="30" width="18" height="2" rx="1" fill="#8b5cf6" />
          <circle cx="24" cy="36" r="1.5" fill="#10b981" />
          <rect x="28" y="34.5" width="10" height="3" rx="1.5" fill="#f59e0b" />
          <path
            d="M20 40l3 3 6-6"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="manageGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f9f5ff" />
              <stop offset="100%" stopColor="#f3e8ff" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`relative w-full py-20 px-23 overflow-hidden ${
        isDark
          ? "bg-[#0f0712]"
          : "bg-gradient-to-tl from-[#f7eaf7] via-[#f9f4f9] to-white"
      }`}
    >
      {/* Decorative SVG background shapes */}
      <svg
        className="absolute -top-24 -left-24 w-96 h-96 opacity-20 z-0"
        viewBox="0 0 200 200"
        fill="none"
      >
        {/* <ellipse cx="100" cy="100" rx="100" ry="100" fill="#9d3ecb" /> */}
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-80 h-80 opacity-30 z-0"
        viewBox="0 0 160 160"
        fill="none"
      ></svg>
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Decorative accent above title */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="mt-1 inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span
            className={`uppercase tracking-widest text-xs font-semibold ${
              isDark ? "text-[#b76be0]" : "text-[#702c91]"
            }`}
          >
            How It Works
          </span>
        </motion.div>

        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight drop-shadow-sm ${
            isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How COD Rocket Works
        </motion.h2>
        <motion.p
          className={`text-2xl text-center mb-14 max-w-3xl mx-auto ${
            isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Get started in minutes with our simple 3-step process
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {themeSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`group relative rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 ${
                isDark
                  ? "bg-[#120913]/70 backdrop-blur-xl border border-[#2d1129]/30"
                  : "bg-white/70 backdrop-blur-xl border border-white/30"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
            >
              <motion.div
                className="mb-7"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.2 }}
              >
                <span
                  className={`inline-flex items-center justify-center w-28 h-28 rounded-full shadow-lg transition-all duration-300 ${
                    isDark
                      ? "bg-[#1b0f20] border border-[#2d1129]"
                      : "bg-gradient-to-br from-white to-gray-50 border border-gray-100"
                  }`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-105">
                    {step.icon}
                  </span>
                </span>
              </motion.div>
              <motion.h3
                className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + idx * 0.2 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + idx * 0.2 }}
              >
                {step.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowCODWorks;
