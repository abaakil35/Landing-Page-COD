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
          <circle
            cx="32"
            cy="32"
            r="30"
            fill={isDark ? "#b76be0" : "#9d3ecb"}
          />
          <path
            d="M20 44V24a4 4 0 0 1 4-4h16"
            stroke={isDark ? "#e9e7ee" : "#ffff6f"}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="44" cy="20" r="6" fill={isDark ? "#a855f7" : "#5affff"} />
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
          <circle
            cx="32"
            cy="32"
            r="30"
            fill={isDark ? "#58336cff" : "#59346eff"}
          />
          <rect
            x="18"
            y="22"
            width="28"
            height="20"
            rx="4"
            fill={isDark ? "#ffffffff" : "#fff"}
          />
          <path
            d="M24 32h16"
            stroke={isDark ? "#1e1d1dff" : "#3f3f3f"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 38h10"
            stroke={isDark ? "#272728ff" : "#3f3f3f"}
            strokeWidth="3"
            strokeLinecap="round"
          />
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
          <circle
            cx="32"
            cy="32"
            r="30"
            fill={isDark ? "#673a7eff" : "#c946f8ff"}
          />
          <rect
            x="20"
            y="24"
            width="24"
            height="16"
            rx="4"
            fill={isDark ? "#f5f3f6ff" : "#fff"}
          />
          <path
            d="M28 32h8"
            stroke={isDark ? "#29292aff" : "#08151bff"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
            stroke={isDark ? "#fafafaff" : "#5affff"}
            strokeWidth="2"
          />
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
              className={`flex flex-col items-center text-center rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                isDark
                  ? "bg-[#1b0f20]/80 backdrop-blur-xl border border-[#b76be0]/20"
                  : "bg-white/80 backdrop-blur-xl border border-[#dddddd]"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="mb-7"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.2 }}
              >
                <span
                  className={`inline-flex items-center justify-center w-28 h-28 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 ${
                    isDark ? "bg-[#2d1129]" : "bg-white"
                  }`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {step.icon}
                  </span>
                </span>
              </motion.div>
              <motion.h3
                className={`text-2xl font-bold mb-3 transition-colors duration-200 ${
                  isDark
                    ? "text-[#e9e7ee] group-hover:text-[#b76be0]"
                    : "text-[#2d123a] group-hover:text-[#9d3ecb]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + idx * 0.2 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-[#e9e7ee]/70" : "text-[#3f3f3f]"
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
