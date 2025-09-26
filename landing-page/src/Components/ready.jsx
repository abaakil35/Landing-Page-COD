import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

const Ready = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full lg:pt-9 pb-16 px-4 lg:px-6 text-center overflow-hidden ${
        isDark ? "bg-[#0f0712]" : "bg-[#FCFCFC]"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div
          className={`mx-auto w-full backdrop-blur-md rounded-2xl py-12 md:py-16 px-8 flex flex-col items-center shadow-lg ${
            isDark
              ? "bg-[#1b0f20]/80 border border-[#b76be0]/20"
              : "bg-white/80 border border-gray-200/50"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="inline-block w-12 lg:w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
            <span
              className={`uppercase tracking-widest text-xs font-semibold ${
                isDark ? "text-[#b76be0]" : "text-[#702c91]"
              }`}
            >
              Get Started
            </span>
          </div>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 drop-shadow-sm tracking-tight ${
              isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
            }`}
          >
            Ready to Boost Your COD Sales?
          </h2>
          <p
            className={`text-base md:text-lg lg:text-2xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
            }`}
          >
            Join thousands of Shopify merchants who trust COD Rocket to manage
            their cash on delivery orders efficiently.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-6 mb-6 lg:mb-8 px-2">
            <a
              href="https://apps.shopify.com/codrocket"
              className={`w-full md:w-auto px-6 lg:px-10 py-4 lg:py-5 rounded-lg font-bold text-base lg:text-lg shadow-md hover:shadow-xl transition-all text-center ${
                isDark
                  ? "bg-[#b76be0] text-[#0f0712] hover:bg-[#a55bc8]"
                  : "bg-[#5e255dff] text-white hover:opacity-90"
              }`}
            >
              Install from Shopify App Store
            </a>
          </div>
          <div
            className={`text-sm md:text-base lg:text-lg opacity-80 px-4 ${
              isDark ? "text-[#e9e7ee]/80" : "text-[#702c91]"
            }`}
          >
            Free Plan Available &bull; Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
