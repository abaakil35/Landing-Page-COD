const features = [
  {
    title: "Smart COD Forms",
    desc: "Create beautiful, mobile-responsive forms that capture all necessary customer information for cash-on-delivery orders.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#formGradient)" />
        <rect x="20" y="18" width="24" height="28" rx="4" fill="#fff" />
        <rect x="24" y="24" width="16" height="3" rx="1.5" fill="#9d3ecb" />
        <rect x="24" y="30" width="12" height="3" rx="1.5" fill="#a855f7" />
        <rect x="24" y="36" width="14" height="3" rx="1.5" fill="#c084fc" />
        <circle cx="25" cy="42" r="1.5" fill="#9d3ecb" />
        <rect x="29" y="40.5" width="11" height="3" rx="1.5" fill="#e879f9" />
        <defs>
          <linearGradient id="formGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="100%" stopColor="#e9d5ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Real-time Validation",
    desc: "Validate customer information instantly to reduce failed deliveries and ensure accurate order processing.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#validationGradient)" />
        <circle
          cx="32"
          cy="32"
          r="16"
          stroke="#10b981"
          strokeWidth="3"
          fill="#dcfce7"
        />
        <path
          d="M26 32l4 4 8-8"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="48" cy="16" r="6" fill="#f59e0b" />
        <path
          d="M45 16l2 2 4-4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="validationGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f0fdf4" />
            <stop offset="100%" stopColor="#dcfce7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Advanced Analytics",
    desc: "Track form performance, conversion rates, and customer behavior to optimize your COD strategy.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#analyticsGradient)" />
        <rect x="18" y="38" width="6" height="12" rx="3" fill="#3b82f6" />
        <rect x="25" y="32" width="6" height="18" rx="3" fill="#6366f1" />
        <rect x="32" y="26" width="6" height="24" rx="3" fill="#8b5cf6" />
        <rect x="39" y="20" width="6" height="30" rx="3" fill="#a855f7" />
        <path
          d="M18 20l6 6 6-4 6 2 6-4"
          stroke="#ec4899"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="20" r="2" fill="#ec4899" />
        <circle cx="24" cy="26" r="2" fill="#ec4899" />
        <circle cx="30" cy="22" r="2" fill="#ec4899" />
        <circle cx="36" cy="24" r="2" fill="#ec4899" />
        <circle cx="42" cy="20" r="2" fill="#ec4899" />
        <defs>
          <linearGradient
            id="analyticsGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  // Second row features
  {
    title: "Custom Branding",
    desc: "Match your brand colors, fonts, and style to create a seamless shopping experience for your customers.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#brandingGradient)" />
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
        <circle cx="24" cy="28" r="3" fill="#ef4444" />
        <circle cx="32" cy="28" r="3" fill="#f59e0b" />
        <circle cx="40" cy="28" r="3" fill="#10b981" />
        <rect x="22" y="36" width="20" height="2" rx="1" fill="#9d3ecb" />
        <rect x="22" y="40" width="16" height="2" rx="1" fill="#a855f7" />
        <path d="M48 16l-4 4 2 2 4-4-2-2z" fill="#6366f1" />
        <defs>
          <linearGradient
            id="brandingGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    desc: "Integrate perfectly with your existing Shopify store and checkout process without any coding required.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#integrationGradient)" />
        <rect
          x="14"
          y="22"
          width="16"
          height="20"
          rx="3"
          fill="#fff"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <rect
          x="34"
          y="22"
          width="16"
          height="20"
          rx="3"
          fill="#fff"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <circle cx="22" cy="30" r="2" fill="#10b981" />
        <circle cx="22" cy="36" r="2" fill="#3b82f6" />
        <circle cx="42" cy="30" r="2" fill="#f59e0b" />
        <circle cx="42" cy="36" r="2" fill="#ef4444" />
        <path
          d="M30 32h4"
          stroke="#9d3ecb"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M32 30v4"
          stroke="#9d3ecb"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="integrationGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="100%" stopColor="#d1fae5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Get expert help whenever you need it with our dedicated support team available around the clock.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="30" fill="url(#supportGradient)" />
        <circle
          cx="32"
          cy="28"
          r="8"
          fill="#fff"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <circle cx="32" cy="28" r="5" fill="#6366f1" />
        <path
          d="M32 33c-4 0-7 2-7 4v2c0 1 1 2 2 2h10c1 0 2-1 2-2v-2c0-2-3-4-7-4z"
          fill="#fff"
        />
        <rect x="24" y="42" width="6" height="8" rx="3" fill="#10b981" />
        <rect x="34" y="42" width="6" height="8" rx="3" fill="#10b981" />
        <circle cx="27" cy="46" r="1" fill="#fff" />
        <circle cx="37" cy="46" r="1" fill="#fff" />
        <path
          d="M44 20l4 4-4 4"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="supportGradient"
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
];

const Features = () => (
  <section className="relative w-full bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] py-24 px-12 overflow-hidden">
    {/* Enhanced decorative background elements */}
    <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#e9d6f7] to-[#f3e8ff] rounded-full opacity-20 blur-3xl z-0" />
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#f7eaf7] to-[#e9d5ff] rounded-full opacity-30 blur-2xl z-0" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff] rounded-full opacity-10 blur-3xl z-0" />

    <div className="max-w-7xl mx-auto px-12 relative z-10">
      {/* Enhanced header section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="flex justify-center mb-4">
        <span className="mt-1 inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
        <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
            Why Choose COD Rocket?
          </span>
      </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#5e255dff] drop-shadow-sm tracking-tight">
          Why Choose COD Rocket?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-12">
          Everything you need to manage cash on delivery orders efficiently and
          boost your Shopify store's conversion rates.
        </p>
      </div>

      {/* Enhanced features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-purple-200 hover:bg-white/90 cursor-pointer"
          >
            {/* Icon container with enhanced styling */}
            <div className="mb-8 relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-100">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>

            {/* Content */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#5e255dff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5e255dff] group-hover:to-[#a855f7] transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {feature.desc}
            </p>

            {/* Hover indicator */}
            <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#9d3ecb] to-[#a855f7] rounded-full group-hover:w-16 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Call to action section */}
      <div className="text-center mt-16">
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5e255dff] to-[#a855f7] text-white font-semibold text-lg rounded-xl hover:from-[#4a1d49] hover:to-[#9333ea] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          <span>Ready to get started?</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white"
          >
            <path
              d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default Features;
