
const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "/month",
    features: [
      "Up to 50 COD orders/month",
      "Basic form customization",
      "Order management dashboard",
      "Email support"
    ],
    button: { text: "Get Started", style: "border border-gray-300 text-black hover:bg-gray-100" }
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
      "Priority support"
    ],
    button: { text: "Start Free Trial", style: "border-2 border-transparent text-black font-bold bg-white hover:shadow-md transition-all" },
    popular: true
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
      "Dedicated support"
    ],
    button: { text: "Contact Sales", style: "border border-gray-300 text-black hover:bg-gray-100" }
  }
];

const Pricing = () => (
  <section className="w-full p-12 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-4">Simple, Transparent Pricing</h2>
      <p className="text-2xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
        Start free and scale as you grow. No hidden fees, no long-term contracts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className={`bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center relative ${plan.popular ? 'border-2 border-blue-400' : ''}`}>
            {plan.popular && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-base font-bold px-6 py-1 rounded-full shadow">Most Popular</span>
            )}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-extrabold mr-2">{plan.price}</span>
              <span className="text-gray-400 text-xl">{plan.period}</span>
            </div>
            <ul className="mb-8 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-lg text-gray-700 mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 mr-3">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg mt-auto text-lg ${plan.button.style}`}>{plan.button.text}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
