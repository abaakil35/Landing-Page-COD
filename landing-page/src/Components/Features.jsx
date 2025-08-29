const features = [
  {
    title: "Custom COD Forms",
    desc: "Create beautiful, conversion-optimized COD forms that match your brand and collect all necessary customer information.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <path
          d="M20 32h24M32 20v24"
          stroke="#A1A1AA"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Order Management",
    desc: "Manage all COD orders from a centralized dashboard with status tracking, customer details, and delivery management.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <circle cx="32" cy="32" r="16" stroke="#A1A1AA" strokeWidth="4" />
        <path
          d="M32 24v8l6 6"
          stroke="#A1A1AA"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Analytics & Reports",
    desc: "Track COD performance, conversion rates, and revenue with detailed analytics and exportable reports.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <rect x="18" y="38" width="6" height="8" rx="2" fill="#A1A1AA" />
        <rect x="29" y="30" width="6" height="16" rx="2" fill="#A1A1AA" />
        <rect x="40" y="24" width="6" height="22" rx="2" fill="#A1A1AA" />
      </svg>
    ),
  },
  // Second row features
  {
    title: "Automated Workflows",
    desc: "Set up automated SMS and email notifications for order confirmations, updates, and delivery reminders.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <path
          d="M20 32h24"
          stroke="#A1A1AA"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="28" y="24" width="8" height="16" rx="2" fill="#A1A1AA" />
      </svg>
    ),
  },
  {
    title: "Order Verification",
    desc: "Reduce fake orders with built-in phone verification and customer confirmation systems.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <path
          d="M32 20v24"
          stroke="#A1A1AA"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="12" stroke="#A1A1AA" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    desc: "Easy one-click installation with your Shopify store. No coding required, works with any theme.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="8" fill="#E5E7EB" />
        <rect x="20" y="20" width="24" height="24" rx="4" fill="#A1A1AA" />
      </svg>
    ),
  },
];

const Features = () => (
  <section className="relative w-full bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] py-24 px-6 md:px-16 overflow-hidden">
    {/* Decorative blurred background shapes */}
    <div className="absolute top-10 left-10 w-80 h-80 bg-[#e9d6f7] rounded-full opacity-30 blur-3xl z-0" />
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#f7eaf7] rounded-full opacity-40 blur-2xl z-0" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      {/* Decorative accent above title */}
      <div className="flex justify-center mb-4">
        <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-[#5e255d] via-[#c084fc] to-[#f7eaf7] opacity-80 shadow-md" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#5e255dff] drop-shadow-sm tracking-tight">
        Why Choose COD Rocket?
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Everything you need to manage cash on delivery orders efficiently and
        boost your Shopify store's conversion rates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-stretch">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-xl border border-[#f3e6f3] rounded-3xl shadow-2xl p-10 flex-1 min-w-[280px] max-w-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(94,37,93,0.18)] hover:-translate-y-3 hover:border-[#a855f7] group cursor-pointer hover:bg-white/80"
            style={{ boxShadow: "0 4px 32px 0 rgba(94,37,93,0.08)" }}
          >
            <div className="mb-7">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#f7eaf7] group-hover:bg-[#a855f71a] transition-colors duration-300 shadow-md">
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </span>
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#5e255dff] group-hover:underline underline-offset-4 transition-colors duration-200">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
