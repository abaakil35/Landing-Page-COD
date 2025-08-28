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
  <section className="w-full bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] py-20 px-4 md:px-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#5e255dff] drop-shadow-sm">
        Why Choose COD Rocket?
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 text-center mb-14 max-w-3xl mx-auto">
        Everything you need to manage cash on delivery orders efficiently and
        boost your Shopify store's conversion rates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/90 border border-[#f3e6f3] rounded-3xl shadow-xl p-10 flex-1 min-w-[280px] max-w-sm flex flex-col items-center text-center transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-[#5e255dff] group cursor-pointer"
          >
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#f7eaf7] group-hover:bg-[#5e255d1a] transition-colors duration-200">
                {feature.icon}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#5e255dff] group-hover:underline underline-offset-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
