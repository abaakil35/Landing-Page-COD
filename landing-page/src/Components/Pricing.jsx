import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

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
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-23 px-23 overflow-hidden ${
        isDark ? "bg-[#0f0712]" : "bg-[#FCFCFC]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Decorative blurred circles */}
        <div
          className={`absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-60 z-0 ${
            isDark ? "bg-[#b76be0]/10" : "bg-[#9d3ecb]/20"
          }`}
        />
        <div
          className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60 z-0 ${
            isDark ? "bg-[#a855f7]/10" : "bg-[#5affff]/20"
          }`}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block w-16 h-2 rounded-full bg-gradient-to-r from-[#9d3ecb] via-[#a259c9] to-[#702c91] opacity-90 shadow-md mr-3" />
            <span
              className={`uppercase tracking-widest text-xs font-semibold ${
                isDark ? "text-[#b76be0]" : "text-[#702c91]"
              }`}
            >
              Pricing
            </span>
          </motion.div>
          <motion.h2
            className={`text-3xl md:text-4xl font-extrabold text-center mb-4 drop-shadow-sm tracking-tight ${
              isDark ? "text-[#e9e7ee]" : "text-[#2d123a]"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className={`text-lg md:text-2xl text-center mb-16 max-w-3xl mx-auto ${
              isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start free and scale as you grow. No hidden fees, no lo ng-term
            contracts.
          </motion.p>
          {/* All 3 pricing cards in one line on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto justify-center items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`rounded-2xl shadow-xl p-10 flex flex-col items-center relative transition-transform hover:-translate-y-2 hover:shadow-2xl lg:flex-1 lg:max-w-sm ${
                  isDark
                    ? "bg-[#1b0f20]/80 backdrop-blur-xl border-2 border-[#b76be0]/20"
                    : `bg-white/80 backdrop-blur-xl border-2 ${
                        plan.popular
                          ? "border-[#5e255dff]"
                          : "border-[#9d3ecb]/10"
                      }`
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {plan.popular && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#5e255dff] text-white text-base font-bold px-6 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-xl md:text-2xl font-bold mb-4 ${
                    isDark ? "text-[#ffffff]" : "text-[#5e255dff]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end mb-6">
                  <span
                    className={`text-3xl md:text-4xl font-extrabold mr-2 ${
                      isDark ? "text-[#ffffff]" : "text-[#2d123a]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg md:text-xl ${
                      isDark ? "text-[#ffffff]" : "text-[#702c91]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mb-8 w-full flex-grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-base md:text-lg mb-3 ${
                        isDark ? "text-[#e9e7ee]/80" : "text-[#3f3f3f]"
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#5e255dff] mr-3 shadow">
                        <svg
                          width="12"
                          height="12"
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
                  className={`w-full py-3 rounded-lg mt-auto text-lg ${
                    plan.name === "Starter"
                      ? isDark
                        ? "text-white border-2 border-[#b76be0]/50"
                        : "text-black border-2 border-gray-300"
                      : plan.name === "Enterprise"
                      ? isDark
                        ? "border border-[#b76be0]/50 text-white hover:bg-[#b76be0]/10"
                        : plan.button.style
                      : plan.button.style
                  }`}
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
                <h3
                  className={`text-4xl font-bold mb-6 ${
                    isDark ? "text-[#e9e7ee]" : "text-gray-900"
                  }`}
                >
                  Compare All Plans
                </h3>
                <p
                  className={`text-xl max-w-3xl mx-auto ${
                    isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                  }`}
                >
                  Choose the perfect plan for your business needs with detailed
                  feature comparison
                </p>
              </div>

              <div
                className={`rounded-3xl shadow-2xl overflow-hidden ${
                  isDark
                    ? "bg-[#1b0f20]/80 border border-[#b76be0]/20"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    {/* Header with Plan Names and Pricing */}
                    <thead>
                      <tr
                        className={`${
                          isDark
                            ? "bg-[#2d1129]/50 border-[#b76be0]/20"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <th className="px-8 py-6 text-left">
                          <div
                            className={`text-xl font-bold ${
                              isDark ? "text-[#e9e7ee]" : "text-gray-900"
                            }`}
                          >
                            Features
                          </div>
                        </th>
                        <th className="px-8 py-6 text-center border-l border-gray-200">
                          <div
                            className={`text-2xl font-bold mb-2 ${
                              isDark ? "text-[#e9e7ee]" : "text-gray-900"
                            }`}
                          >
                            Free
                          </div>
                          <div
                            className={`text-3xl font-bold mb-1 ${
                              isDark ? "text-[#e9e7ee]" : "text-gray-900"
                            }`}
                          >
                            $0
                          </div>
                          <div
                            className={`text-sm ${
                              isDark ? "text-[#e9e7ee]/80" : "text-gray-500"
                            }`}
                          >
                            Forever free
                          </div>
                          <button className="mt-4 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Get Started →
                          </button>
                        </th>
                        <th
                          className={`px-8 py-6 text-center ${
                            isDark
                              ? "border-[#b76be0]/20"
                              : "border-[#5e255dff]"
                          } ${isDark ? "bg-[#fffff]" : "bg-[#9D14A8]"}`}
                        >
                          <div
                            className={`text-2xl font-bold mb-2 ${
                              isDark ? "text-[#ffffff]" : "text-white"
                            }`}
                          >
                            Professional
                          </div>
                          <div
                            className={`text-3xl font-bold mb-1 ${
                              isDark ? "text-[#e9e7ee]" : "text-white"
                            }`}
                          >
                            $19
                            <span
                              className={`text-lg ${
                                isDark ? "text-[#e9e7ee]/80" : "text-white"
                              }`}
                            >
                              /month
                            </span>
                          </div>
                          <div
                            className={`text-sm ${
                              isDark ? "text-[#e9e7ee]/80" : "text-white"
                            }`}
                          >
                            Most popular
                          </div>
                          <button
                            className={`mt-4 ${
                              isDark
                                ? "bg-[#b76be0] hover:bg-[#a55bc8]"
                                : "bg-gradient-to-r from-[#5e255dff] to-[#9d3ecb]"
                            } text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                          >
                            Start Free Trial →
                          </button>
                        </th>
                        <th
                          className={`px-8 py-6 text-center ${
                            isDark ? "border-[#b76be0]/20" : "border-gray-200"
                          } ${isDark ? "bg-[#2d1129]/50" : ""}`}
                        >
                          <div
                            className={`text-2xl font-bold mb-2 ${
                              isDark ? "text-[#e9e7ee]" : "text-gray-900"
                            }`}
                          >
                            Enterprise
                          </div>
                          <div
                            className={`text-3xl font-bold mb-1 ${
                              isDark ? "text-[#e9e7ee]" : "text-gray-900"
                            }`}
                          >
                            $49
                            <span
                              className={`text-lg ${
                                isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                              }`}
                            >
                              /month
                            </span>
                          </div>
                          <div
                            className={`text-sm ${
                              isDark ? "text-[#e9e7ee]/80" : "text-gray-500"
                            }`}
                          >
                            Advanced features
                          </div>
                          <button
                            className={`mt-4 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                          >
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
                          className={`transition-all duration-200 ${
                            isDark
                              ? "border-[#b76be0]/20 hover:bg-[#2d1129]/30"
                              : "border-gray-100 hover:bg-gray-50/50"
                          }`}
                        >
                          <td className="px-8 py-6 text-left">
                            <div
                              className={`font-medium text-lg ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              {row.feature}
                            </div>
                            {row.subtitle && (
                              <div
                                className={`text-xs mt-1 font-medium tracking-wide ${
                                  isDark ? "text-[#e9e7ee]/60" : "text-gray-500"
                                }`}
                              >
                                {row.subtitle}
                              </div>
                            )}
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
                            {row.free ? (
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-green-500/20" : "bg-green-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-green-400" : "text-green-600"
                                  }`}
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
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-red-500/20" : "bg-red-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-red-400" : "text-red-500"
                                  }`}
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
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            } ${
                              isDark
                                ? "bg-[#2d1129]/20"
                                : "bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5"
                            }`}
                          >
                            {row.pro ? (
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-green-500/20" : "bg-green-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-green-400" : "text-green-600"
                                  }`}
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
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-red-500/20" : "bg-red-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-red-400" : "text-red-500"
                                  }`}
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
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
                            {row.premium ? (
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-green-500/20" : "bg-green-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-green-400" : "text-green-600"
                                  }`}
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
                              <div
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isDark ? "bg-red-500/20" : "bg-red-100"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 ${
                                    isDark ? "text-red-400" : "text-red-500"
                                  }`}
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

          {/* Contact Sales Section */}
          {isPricingPage && (
            <motion.div
              className="mt-20 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`rounded-3xl p-12 text-center relative overflow-hidden ${
                  isDark
                    ? "bg-[#2d1129]/80 border border-[#b76be0]/20"
                    : "bg-gradient-to-br from-[#5e255dff] to-[#9d3ecb]"
                }`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className={`absolute top-0 left-0 w-40 h-40 rounded-full -translate-x-20 -translate-y-20 ${
                      isDark ? "bg-[#b76be0]" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 rounded-full translate-x-16 translate-y-16 ${
                      isDark ? "bg-[#b76be0]" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-1/2 left-1/4 w-6 h-6 rounded-full ${
                      isDark ? "bg-[#b76be0]" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-1/4 right-1/4 w-4 h-4 rounded-full ${
                      isDark ? "bg-[#b76be0]" : "bg-white"
                    }`}
                  ></div>
                </div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      isDark ? "bg-[#b76be0]/20" : "bg-white/20"
                    }`}
                  >
                    <svg
                      className={`w-8 h-8 ${
                        isDark ? "text-[#b76be0]" : "text-white"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <h3
                    className={`text-3xl font-bold mb-4 ${
                      isDark ? "text-[#e9e7ee]" : "text-white"
                    }`}
                  >
                    Need Something Custom?
                  </h3>
                  <p
                    className={`text-xl mb-8 max-w-2xl mx-auto ${
                      isDark ? "text-[#e9e7ee]/80" : "text-white/90"
                    }`}
                  >
                    Looking for enterprise solutions, custom integrations, or
                    have specific requirements? Our sales team is here to help
                    you find the perfect solution for your business.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button
                      className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center gap-2 min-w-[200px] justify-center ${
                        isDark
                          ? "bg-[#b76be0] text-[#0f0712] hover:bg-[#a55bc8]"
                          : "bg-white text-[#5e255dff] hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Contact Sales Team
                    </motion.button>

                    <motion.a
                      href="mailto:sales@yourcompany.com"
                      className={`transition-colors duration-200 flex items-center gap-2 text-lg ${
                        isDark
                          ? "text-[#e9e7ee]/80 hover:text-[#e9e7ee]"
                          : "text-white/90 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      sales@yourcompany.com
                    </motion.a>
                  </div>

                  <div
                    className={`mt-8 pt-8 ${
                      isDark ? "border-[#b76be0]/20" : "border-white/20"
                    } border-t`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            isDark ? "text-[#e9e7ee]" : "text-white"
                          }`}
                        >
                          24/7
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-[#e9e7ee]/80" : "text-white/80"
                          }`}
                        >
                          Enterprise Support
                        </div>
                      </div>
                      <div>
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            isDark ? "text-[#e9e7ee]" : "text-white"
                          }`}
                        >
                          99.9%
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-[#e9e7ee]/80" : "text-white/80"
                          }`}
                        >
                          Uptime Guarantee
                        </div>
                      </div>
                      <div>
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            isDark ? "text-[#e9e7ee]" : "text-white"
                          }`}
                        >
                          Custom
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-[#e9e7ee]/80" : "text-white/80"
                          }`}
                        >
                          Integration Solutions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
