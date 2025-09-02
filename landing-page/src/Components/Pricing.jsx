import { motion } from "framer-motion";

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
        "border-2 border-transparent text-white font-bold bg-[#5e255dff] hover:bg-[#4a1d49] transition-all shadow-lg hover:shadow-xl",
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
  <section className="relative w-full py-20 px-23 bg-[#FCFCFC] overflow-hidden">
    {/* Decorative blurred circles */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9d3ecb]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#5affff]/20 rounded-full blur-3xl opacity-60 z-0" />
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
        <span className="uppercase tracking-widest text-xs font-semibold text-[#702c91]">
          Pricing
        </span>
      </motion.div>
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#2d123a] drop-shadow-sm tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Simple, Transparent Pricing
      </motion.h2>
      <motion.p
        className="text-lg md:text-2xl text-[#3f3f3f] text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Start free and scale as you grow. No hidden fees, no long-term
        contracts.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border-2 ${
              plan.popular ? "border-[#9d3ecb]" : "border-[#9d3ecb]/10"
            } p-10 flex flex-col items-center relative transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
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
            <motion.button
              className={`w-full py-3 rounded-lg mt-auto text-lg ${plan.button.style}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.button.text}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
