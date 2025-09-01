const checklist = [
  "Easy form customization with drag & drop builder",
  "Real-time order tracking and management",
  "Automated customer notifications and confirmations",
];

import demoImage from "../assets/ChatGPT Image Aug 28, 2025, 11_43_20 AM.png";

const SeeAction = () => (
  <section className="relative w-full py-16 px-23 bg-[#FCFCFC] overflow-hidden">
    {/* Decorative SVG background shapes, rotated 180° */}
    <svg
      className="absolute -bottom-24 -left-24 w-96 h-96 opacity-20 z-0 rotate-180"
      viewBox="0 0 200 200"
      fill="none"
    >
      {/* <ellipse cx="100" cy="100" rx="100" ry="100" fill="#9d3ecb" /> */}
    </svg>
    <svg
      className="absolute top-0 right-0 w-80 h-80 opacity-30 z-0 rotate-180"
      viewBox="0 0 160 160"
      fill="none"
    ></svg>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
      {/* Left: Text and checklist */}
      <div className="flex-1 mb-12 md:mb-0">
        <div className="flex items-center mb-4">
          <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
          <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            Live Demo
          </span>
        </div>
        <div className="flex items-center mb-2"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#2d123a] drop-shadow-sm tracking-tight">
          See COD Rocket in Action
        </h2>
        <p className="text-lg md:text-xl text-[#3f3f3f] mb-8 max-w-2xl">
          Watch how easy it is to set up and manage cash <br /> on delivery
          orders with COD Rocket's intuitive interface.
        </p>
        <ul className="space-y-6">
          {checklist.map((item, idx) => (
            <li key={idx} className="flex items-center text-lg text-[#2d123a]">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#9d3ecb] mr-4 shadow-md">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
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
      {/* Right: Demo Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[600px] h-[400px] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-4 border-[#9d3ecb]/10 bg-white/80 backdrop-blur-xl">
          <img
            src={demoImage}
            alt="Demo section"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default SeeAction;
