import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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

const Pricing = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";

  return (
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
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
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

        {/* Comparison Table - Only show on /pricing page */}
        {isPricingPage && (
          <motion.div
            className="mt-16 mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Compare All Plans
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs with detailed
                feature comparison
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Header with Plan Names and Pricing */}
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-8 py-6 text-left">
                        <div className="text-xl font-bold text-gray-900">
                          Features
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center border-l border-gray-200">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          Free
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          $0
                        </div>
                        <div className="text-sm text-gray-500">
                          Forever free
                        </div>
                        <button className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                          Get Started →
                        </button>
                      </th>
                      <th className="px-8 py-6 text-center border-l border-gray-200 bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          Professional
                        </div>
                        <div className="text-3xl font-bold text-[#5e255dff] mb-1">
                          $19
                          <span className="text-lg text-gray-600">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Most popular
                        </div>
                        <button className="mt-4 bg-gradient-to-r from-[#5e255dff] to-[#9d3ecb] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                          Start Free Trial →
                        </button>
                      </th>
                      <th className="px-8 py-6 text-center border-l border-gray-200">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          Enterprise
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          $49
                          <span className="text-lg text-gray-600">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Advanced features
                        </div>
                        <button className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                          Get Started →
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "COD Orders per Month",
                        subtitle: "UP TO 50 ORDERS",
                        free: true,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Form Customization",
                        subtitle: "BASIC CUSTOMIZATION",
                        free: true,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Order Management Dashboard",
                        free: true,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Advanced Form Builder",
                        subtitle: "UP TO 500 ORDERS",
                        free: false,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "SMS Notifications",
                        subtitle: "REAL-TIME ALERTS",
                        free: false,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Order Verification",
                        subtitle: "AUTOMATED VERIFICATION",
                        free: false,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Analytics & Reports",
                        subtitle: "DETAILED INSIGHTS",
                        free: false,
                        pro: true,
                        premium: true,
                      },
                      {
                        feature: "Unlimited COD Orders",
                        subtitle: "NO LIMITS",
                        free: false,
                        pro: false,
                        premium: true,
                      },
                      {
                        feature: "White-label Options",
                        subtitle: "CUSTOM BRANDING",
                        free: false,
                        pro: false,
                        premium: true,
                      },
                      {
                        feature: "API Access & Custom Integrations",
                        subtitle: "DEVELOPER TOOLS",
                        free: false,
                        pro: false,
                        premium: true,
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-200"
                      >
                        <td className="px-8 py-6 text-left">
                          <div className="text-gray-900 font-medium text-lg">
                            {row.feature}
                          </div>
                          {row.subtitle && (
                            <div className="text-xs text-gray-500 mt-1 font-medium tracking-wide">
                              {row.subtitle}
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-6 text-center border-l border-gray-100">
                          {row.free ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-6 text-center border-l border-gray-100 bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5">
                          {row.pro ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-6 text-center border-l border-gray-100">
                          {row.premium ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                              <svg
                                className="w-5 h-5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
