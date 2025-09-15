import { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

const checklist = [
  "Easy form customization with drag & drop builder",
  "Real-time order tracking and management",
  "Automated customer notifications and confirmations",
];

function SeeAction() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-12 lg:py-20 px-4 lg:px-23 overflow-hidden ${
        isDark ? "bg-[#0f0712]" : "bg-[#FCFCFC]"
      }`}
    >
      {/* Decorative SVG background shapes, rotated 180° */}
      <svg
        className="absolute -bottom-24 -left-24 w-96 h-96 opacity-20 z-0 rotate-180 hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        {/* <ellipse cx="100" cy="100" rx="100" ry="100" fill="#9d3ecb" /> */}
      </svg>
      <svg
        className="absolute top-0 right-0 w-80 h-80 opacity-30 z-0 rotate-180 hidden lg:block"
        viewBox="0 0 160 160"
        fill="none"
      ></svg>
      {/* Center-left blurred circle */}
      <div
        className={`absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
          isDark
            ? "bg-[#1b0f20]"
            : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
        }`}
      />
      {/* Center-right blurred circle */}
      <div
        className={`absolute top-1/2 right-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
          isDark
            ? "bg-[#1b0f20]"
            : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
        }`}
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-8 lg:gap-12">
        {/* Left: Text and checklist */}
        <div className="flex-1 w-full text-center lg:text-left px-4 lg:px-0">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
            <span
              className={`uppercase tracking-widest text-xs font-semibold ${
                isDark ? "text-[#b76be0]" : "text-[#702c91]"
              }`}
            >
              Live Demo
            </span>
          </div>
          <div className="flex items-center mb-2"></div>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 drop-shadow-sm tracking-tight px-2 lg:px-0 ${
              isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
            }`}
          >
            See COD Rocket in Action
          </h2>
          <p
            className={`text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0 ${
              isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
            }`}
          >
            Watch how easy it is to set up and manage cash on delivery orders
            with COD Rocket's intuitive interface.
          </p>
          <ul className="space-y-4 lg:space-y-6 max-w-2xl mx-auto lg:mx-0">
            {checklist.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center text-base md:text-lg justify-center lg:justify-start ${
                  isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
                }`}
              >
                <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9d3ecb] mr-3 md:mr-4 shadow-md flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    className="md:w-[18px] md:h-[18px]"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <polyline
                      points="4,10 8,14 14,6"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Demo Video */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div
            className={`relative w-full max-w-[500px] lg:max-w-[600px] h-[250px] md:h-[300px] lg:h-[400px] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl lg:shadow-2xl overflow-hidden ${
              isDark
                ? "border-2 lg:border-4 border-[#b76be0]/20 bg-[#1b0f20]/80 backdrop-blur-xl"
                : "border-2 lg:border-4 border-[#9d3ecb]/10 bg-white/80 backdrop-blur-xl"
            }`}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vTelYrt428Q"
              title="COD Rocket Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl lg:rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeeAction;
