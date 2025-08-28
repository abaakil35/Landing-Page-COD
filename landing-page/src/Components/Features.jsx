

const features = [
  {
    title: "Custom COD Forms",
    desc: "Create beautiful, conversion-optimized COD forms that match your brand and collect all necessary customer information.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <path d="M20 32h24M32 20v24" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Order Management",
    desc: "Manage all COD orders from a centralized dashboard with status tracking, customer details, and delivery management.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <circle cx="32" cy="32" r="16" stroke="#A1A1AA" strokeWidth="4"/>
        <path d="M32 24v8l6 6" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Analytics & Reports",
    desc: "Track COD performance, conversion rates, and revenue with detailed analytics and exportable reports.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <rect x="18" y="38" width="6" height="8" rx="2" fill="#A1A1AA"/>
        <rect x="29" y="30" width="6" height="16" rx="2" fill="#A1A1AA"/>
        <rect x="40" y="24" width="6" height="22" rx="2" fill="#A1A1AA"/>
      </svg>
    )
  },
  // Second row features
  {
    title: "Automated Workflows",
    desc: "Set up automated SMS and email notifications for order confirmations, updates, and delivery reminders.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <path d="M20 32h24" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round"/>
        <rect x="28" y="24" width="8" height="16" rx="2" fill="#A1A1AA"/>
      </svg>
    )
  },
  {
    title: "Order Verification",
    desc: "Reduce fake orders with built-in phone verification and customer confirmation systems.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <path d="M32 20v24" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="12" stroke="#A1A1AA" strokeWidth="4"/>
      </svg>
    )
  },
  {
    title: "Seamless Integration",
    desc: "Easy one-click installation with your Shopify store. No coding required, works with any theme.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#E5E7EB"/>
        <rect x="20" y="20" width="24" height="24" rx="4" fill="#A1A1AA"/>
      </svg>
    )
  }
];

const Features = () => (
  <section className="w-full bg-gray-50 py-16 ">
    <div className="max-w-6xl mx-auto ">
      <h2 className="text-4xl font-extrabold text-center mb-4">Why Choose COD Rocket?</h2>
      <p className="text-xl text-gray-500 text-center mb-12 max-w-3xl mx-auto">
        Everything you need to manage cash on delivery orders efficiently and boost your Shopify store's conversion rates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[280px] max-w-sm flex flex-col items-center text-center">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-lg">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
