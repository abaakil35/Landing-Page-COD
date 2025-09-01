const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "/month",
    features: [
      "Up to 50 COD orders/month",
      "Basic form customization",
      "Order management dashboard",
      "Email support",
    ],
    button: {
      text: "Get Started",
      style: "border border-gray-300 text-black hover:bg-gray-100",
    },
  },
  {
    name: "Professional",
    price: "$19",
    period: "/month",
    features: [
      "Up to 500 COD orders/month",
      "Advanced form builder",
      "SMS notifications",
      "Order verification",
      "Analytics & reports",
      "Priority support",
    ],
    button: {
      text: "Start Free Trial",
      style:
        "border-2 border-transparent text-black font-bold bg-white hover:shadow-md transition-all",
    },
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    features: [
      "Unlimited COD orders",
      "White-label options",
      "Advanced automation",
      "API access",
      "Custom integrations",
      "Dedicated support",
    ],
    button: {
      text: "Contact Sales",
      style: "border border-gray-300 text-black hover:bg-gray-100",
    },
  },
];

const Pricing = () => (
  <section className="relative w-full py-20 px-23 bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7] overflow-hidden">
    {/* Decorative blurred circles */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
        <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
          Pricing
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#2d123a] drop-shadow-sm tracking-tight">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg md:text-2xl text-[#3f3f3f] text-center mb-16 max-w-3xl mx-auto">
        Start free and scale as you grow. No hidden fees, no long-term
        contracts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 ${
              plan.popular ? "border-[#9d3ecb]" : "border-[#9d3ecb]/10"
            } p-10 flex flex-col items-center relative transition-transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            {plan.popular && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] text-white text-base font-bold px-6 py-1 rounded-full shadow">
                Most Popular
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#702c91]">
              {plan.name}
            </h3>
            <div className="flex items-end mb-6">
              <span className="text-3xl md:text-4xl font-extrabold mr-2 text-[#2d123a]">
                {plan.price}
              </span>
              <span className="text-[#702c91] text-lg md:text-xl">
                {plan.period}
              </span>
            </div>
            <ul className="mb-8 w-full">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-base md:text-lg text-[#3f3f3f] mb-3"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#9d3ecb] mr-3 shadow">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <polyline
                        points="4,9 7,12 12,5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg mt-auto text-lg ${plan.button.style}`}
            >
              {plan.button.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
