const steps = [
  {
    title: "Install & Setup",
    desc: "Install COD Rocket from the Shopify App Store and customize your COD form settings in minutes.",
    color: "from-[#9d3ecb] via-[#702c91] to-[#2d123a]",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="#9d3ecb" />
        <path
          d="M20 44V24a4 4 0 0 1 4-4h16"
          stroke="#ffff6f"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="44" cy="20" r="6" fill="#5affff" />
      </svg>
    ),
  },
  {
    title: "Customize Forms",
    desc: "Design beautiful COD forms that match your brand and collect the information you need from customers.",
    color: "from-[#dddddd] via-[#9e9e9e] to-[#3f3f3f]",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="#9e9e9e" />
        <rect x="18" y="22" width="28" height="20" rx="4" fill="#fff" />
        <path
          d="M24 32h16"
          stroke="#3f3f3f"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 38h10"
          stroke="#3f3f3f"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Manage Orders",
    desc: "Track, verify, and manage all your COD orders from one central dashboard with automated workflows.",
    color: "from-[#5affff] via-[#40c4ff] to-[#1a4e66]",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="#40c4ff" />
        <rect x="20" y="24" width="24" height="16" rx="4" fill="#fff" />
        <path
          d="M28 32h8"
          stroke="#1a4e66"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="12" stroke="#5affff" strokeWidth="2" />
      </svg>
    ),
  },
];

const HowCODWorks = () => (
  <section className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-tl from-[#f7eaf7] via-[#f9f4f9] to-white overflow-hidden">
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
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Decorative accent above title */}
      <div className="flex justify-center mb-4">
        <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#2d123a] tracking-tight drop-shadow-sm">
        How COD Rocket Works
      </h2>
      <p className="text-2xl text-[#3f3f3f] text-center mb-14 max-w-3xl mx-auto">
        Get started in minutes with our simple 3-step process
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-[#dddddd]"
          >
            <div className="mb-7">
              <span className="inline-flex items-center justify-center w-28 h-28 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white">
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {step.icon}
                </span>
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#2d123a] group-hover:text-[#9d3ecb] transition-colors duration-200">
              {step.title}
            </h3>
            <p className="text-[#3f3f3f] text-lg leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowCODWorks;
