import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";
import Ready from "./ready";

const plans = [
  {
    name: "Basic",
    price: "$0",
    yearlyPrice: "Free",
    period: "/month",
    yearlyPeriod: "/year",
    features: [
      "Up to 60 orders /month",
      "1-Click Upsells",
      "Quantity offers",
      "Google Sheets",
      "Abandoned carts",
      "Discount codes",
      "Shipping rates",
      "Google Autocomplete",
      "Multi-Pixels",
      "Multi-Language",
      "Email support",
    ],
  },
  {
    name: "Grow",
    price: "$9.98",
    yearlyPrice: "$119.76",
    period: "/month",
    yearlyPeriod: "/year",
    features: [
      "Up to 490 orders /month",
      "1-Click Upsells",
      "Quantity offers",
      "Google Sheets",
      "Abandoned carts",
      "Discount codes",
      "Shipping rates",
      "Google Autocomplete",
      "Multi-Pixels",
      "Multi-Language",
      "Email & WhatsApp support",
    ],
  },
  {
    name: "Advanced",
    price: "$21.98",
    yearlyPrice: "$263.76",
    period: "/month",
    yearlyPeriod: "/year",
    features: [
      "Unlimited orders / month",
      "1-Click Upsells",
      "Quantity offers",
      "Google Sheets",
      "Abandoned carts",
      "Discount codes",
      "Shipping rates",
      "Google Autocomplete",
      "Multi-Pixels",
      "Multi-Language",
      "Email & WhatsApp support",
    ],
    status: "",
  },
];

const Pricing = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  // Pricing FAQs state and content (centered accordion)
  const [openPricingFAQ, setOpenPricingFAQ] = useState(null);
  const pricingFaqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes — you can upgrade or downgrade your plan at any time. Billing is prorated where applicable, and changes take effect immediately.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes — choosing yearly billing gives you a 20% discount compared to monthly pricing. You can toggle billing above to see the yearly equivalent.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes, our Basic plan is free and includes core features suitable for getting started. See the plan card for details.",
    },
    {
      question: "How does billing work for upgrades mid-cycle?",
      answer:
        "When you upgrade mid-cycle, we prorate the remaining time on your old plan and apply the difference toward your new plan. Exact amounts are shown at checkout.",
    },
    {
      question: "Do you offer support for migrations?",
      answer:
        "Yes — for higher-tier plans we offer assisted migration and onboarding support to help you move smoothly.",
    },
    {
      question: "Can I get a custom plan for my business?",
      answer:
        "We offer custom enterprise plans for high-volume stores. Contact our sales team to discuss requirements and pricing.",
    },
    {
      question: "Is there a trial period?",
      answer:
        "We offer a free Basic plan and occasionally promotional trials for premium features. Check our pricing page or contact support for current offers.",
    },
  ];

  const togglePricingFAQ = (i) =>
    setOpenPricingFAQ(openPricingFAQ === i ? null : i);

  // small helper: parse a price string like "$119.76" into a number (119.76)
  const parsePrice = (priceStr) => {
    if (!priceStr || typeof priceStr !== "string") return null;
    const n = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : null;
  };

  // currency formatter
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const formatCurrency = (v) => {
    if (v === null || typeof v === "undefined" || Number.isNaN(v)) return null;
    return currencyFormatter.format(v);
  };

  // If user navigates to /pricing#compare, ensure the heading with id="compare" is scrolled into view
  useEffect(() => {
    try {
      if (isPricingPage && typeof window !== "undefined") {
        const hash = window.location.hash || "";
        if (hash === "#compare") {
          // Delay slightly so the element is mounted and layout is stable
          setTimeout(() => {
            const el = document.getElementById("compare");
            if (el) {
              // Find navbar height (sticky top) and offset the scroll so the heading is visible
              const nav =
                document.querySelector("nav[role='navigation']") ||
                document.querySelector("nav") ||
                null;
              const navHeight = nav ? nav.getBoundingClientRect().height : 0;
              const extra = 12; // small gap below navbar
              const top =
                el.getBoundingClientRect().top +
                window.scrollY -
                (navHeight + extra);
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 80);
        }
      }
    } catch {
      // silent fail - scrolling is non-critical
    }
  }, [isPricingPage]);

  return (
    <section
      className={`relative w-full py-23 px-23 overflow-hidden ${
        isDark ? "bg-[#0f0712]" : "bg-[#FCFCFC]"
      }`}
    >
      {/* Inline styles: hide table scrollbar for the pricing comparison area */}
      <style>{`
        /* Hide scrollbar (WebKit) */
        .pricing-scroll::-webkit-scrollbar { display: none; }
        /* Hide scrollbar (Firefox) */
        .pricing-scroll { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Decorative blurred circles */}
        <div
          className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60 z-0 ${
            isDark ? "bg-[#a855f7]/10" : "bg-[#5affff]/20"
          }`}
        />
        {/* Center-left blurred circle (moved from top-left corner) */}
        <div
          className={`absolute top-1/2 left-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-60 blur-3xl z-0 ${
            isDark ? "bg-[#b76be0]/10" : "bg-[#9d3ecb]/20"
          }`}
        />
        {/* Center-right blurred circle */}
        <div
          className={`absolute top-1/2 right-1/4 transform -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl z-0 ${
            isDark
              ? "bg-[#1b0f20]"
              : "bg-gradient-to-br from-[#ddd6fe] to-[#e9d5ff]"
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

          {/* Billing Period Toggle */}
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              className={`relative flex items-center p-1 rounded-full ${
                isDark ? "bg-[#1b0f20]/80" : "bg-gray-100"
              } border-2 ${isDark ? "border-[#b76be0]/20" : "border-gray-200"}`}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  billingPeriod === "monthly"
                    ? `text-white shadow-lg ${
                        isDark ? "bg-[#b76be0]" : "bg-[#5e255dff]"
                      }`
                    : `text-gray-500 ${isDark ? "text-[#e9e7ee]/60" : ""}`
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  billingPeriod === "yearly"
                    ? `text-white shadow-lg ${
                        isDark ? "bg-[#b76be0]" : "bg-[#5e255dff]"
                      }`
                    : `text-gray-500 ${isDark ? "text-[#e9e7ee]/60" : ""}`
                }`}
              >
                Yearly
                <span
                  className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    billingPeriod === "yearly"
                      ? "bg-white/20 text-white"
                      : `text-white ${
                          isDark ? "bg-[#b76be0]/20" : "bg-[#5e255dff]/20"
                        }`
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

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
                <div className="flex items-end mb-2">
                  <button
                    onClick={() =>
                      setBillingPeriod(
                        billingPeriod === "monthly" ? "yearly" : "monthly"
                      )
                    }
                    aria-pressed={billingPeriod === "yearly"}
                    className={`text-left focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${
                      isDark ? "focus:ring-[#b76be0]" : "focus:ring-[#5e255dff]"
                    } cursor-pointer hover:opacity-95 transition-all duration-150`}
                    title="Toggle billing period"
                  >
                    <span
                      className={`text-3xl md:text-4xl font-extrabold mr-2 ${
                        isDark ? "text-[#ffffff]" : "text-[#2d123a]"
                      }`}
                    >
                      {billingPeriod === "yearly"
                        ? plan.yearlyPrice
                        : plan.price}
                    </span>
                    <span
                      className={`text-lg md:text-xl ${
                        isDark ? "text-[#ffffff]" : "text-[#702c91]"
                      }`}
                    >
                      {billingPeriod === "yearly"
                        ? plan.yearlyPeriod
                        : plan.period}
                    </span>
                    {/* Non-interactive plan status/info (e.g., 'Current plan') */}
                    {plan.status && (
                      <div
                        className={`mt-3 text-sm font-medium ${
                          isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                        }`}
                      >
                        {plan.status}
                      </div>
                    )}
                  </button>
                </div>
                <div className="text-sm text-center mb-6 w-full">
                  {billingPeriod === "monthly"
                    ? (() => {
                        const monthly = parsePrice(plan.price);
                        if (monthly === null) return null;
                        const annual = monthly * 12;
                        if (annual === 0) {
                          return (
                            <div
                              className={`${
                                isDark ? "text-[#e9e7ee]/60" : "text-gray-500"
                              }`}
                            >
                              Free
                            </div>
                          );
                        }
                        const formattedAnnual =
                          formatCurrency(annual) ?? `$${annual.toFixed(2)}`;
                        return (
                          <div
                            className={`${
                              isDark ? "text-[#e9e7ee]/60" : "text-gray-500"
                            }`}
                          >
                            Bill at {formattedAnnual} once per year
                          </div>
                        );
                      })()
                    : (() => {
                        const annual = parsePrice(plan.yearlyPrice);
                        if (annual === null || annual === 0) {
                          // fallback to showing 'Free' when yearly is free or non-numeric
                          return (
                            <div
                              className={`${
                                isDark ? "text-[#e9e7ee]/60" : "text-gray-500"
                              }`}
                            >
                              Free
                            </div>
                          );
                        }
                        const perMonth = annual / 12;
                        const formattedPerMonth =
                          formatCurrency(perMonth) ?? `$${perMonth.toFixed(2)}`;
                        return (
                          <div
                            className={`${
                              isDark ? "text-[#e9e7ee]/60" : "text-gray-500"
                            }`}
                          >
                            Equivalent to {formattedPerMonth} per month
                          </div>
                        );
                      })()}
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
                {/* No per-card CTA on the home pricing display per request */}
              </motion.div>
            ))}
          </div>

          {/* Pricing FAQs - centered accordion */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h3
                className={`text-3xl md:text-4xl font-extrabold ${
                  isDark ? "text-[#e9e7ee]" : "text-gray-900"
                }`}
              >
                Pricing FAQs
              </h3>
              <p
                className={`text-lg ${
                  isDark ? "text-[#e9e7ee]/70" : "text-gray-600"
                }`}
              >
                Common questions about our plans and billing
              </p>
            </div>

            <div className="space-y-4">
              {pricingFaqs.map((f, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden border ${
                    isDark
                      ? "border-[#2d1129] bg-[#120913]/60"
                      : "border-gray-100 bg-white"
                  } `}
                >
                  <button
                    onClick={() => togglePricingFAQ(i)}
                    className={`w-full text-left px-6 py-6 flex justify-between items-center ${
                      isDark ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    <span className="font-semibold text-lg md:text-xl">
                      {f.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transform ${
                        openPricingFAQ === i ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 8l4 4 4-4"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openPricingFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-4"
                      >
                        <div
                          className={`${
                            isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                          }`}
                        >
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA: Compare pricing plans (show only when NOT on /pricing page) */}
          {!isPricingPage && (
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/pricing#compare"
                className="inline-flex items-center justify-center bg-[#5e255dff] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Compare Pricing Plans
              </Link>
              <p
                className={`text-sm mt-3 ${
                  isDark ? "text-[#e9e7ee]/70" : "text-gray-600"
                }`}
              >
                Compare all pricing plans to find the best fit for your business
              </p>
            </motion.div>
          )}

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
                  id="compare"
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
                {/* Make header sticky: wrap table in a vertically-scrollable container */}
                <div className="overflow-x-auto">
                  {/* pricing-table wrapper: force light table text in dark mode */}
                  <div
                    className={`max-h-[520px] overflow-y-auto pricing-scroll ${
                      isDark ? "text-white" : ""
                    }`}
                  >
                    <table className="w-full">
                      {/* Header with Plan Names and Pricing */}
                      <thead>
                        <tr
                          className={`${
                            isDark
                              ? "bg-[#2d1129] border-[#b76be0]/20"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <th
                            className={`px-8 py-6 text-left sticky top-0 z-20 ${
                              isDark ? "bg-[#2d1129]" : "bg-gray-50"
                            }`}
                          >
                            <div
                              className={`text-xl font-bold ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              Features
                            </div>
                          </th>
                          <th
                            className={`px-8 py-6 text-center sticky top-0 z-20 ${
                              isDark
                                ? "bg-[#2d1129] border-[#2d1129]"
                                : "border-l border-gray-200 bg-gray-50"
                            }`}
                          >
                            <div
                              className={`text-2xl font-bold mb-2 ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              Basic
                            </div>
                            <div
                              className={`text-3xl font-bold mb-1 ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              {billingPeriod === "yearly" ? "Free" : "$0"}
                            </div>
                            <div
                              className={`text-sm ${
                                isDark ? "text-[#e9e7ee]/80" : "text-gray-500"
                              }`}
                            >
                              {billingPeriod === "yearly"
                                ? "Forever free"
                                : "USD/month"}
                            </div>
                            {/* Downgrade button removed per request */}
                          </th>
                          <th
                            className={`px-8 py-6 text-center sticky top-0 z-20 ${
                              isDark
                                ? "bg-[#2d1129] border-[#2d1129]"
                                : "border-[#5e255dff] bg-[#9D14A8]"
                            }`}
                          >
                            <div
                              className={`text-2xl font-bold mb-2 ${
                                isDark ? "text-[#ffffff]" : "text-white"
                              }`}
                            >
                              Grow
                            </div>
                            <div
                              className={`text-3xl font-bold mb-1 ${
                                isDark ? "text-[#e9e7ee]" : "text-white"
                              }`}
                            >
                              {billingPeriod === "yearly" ? "$119.76" : "$9.98"}
                              <span
                                className={`text-lg ${
                                  isDark ? "text-[#e9e7ee]/80" : "text-white"
                                }`}
                              >
                                {billingPeriod === "yearly"
                                  ? "/year"
                                  : " USD/month"}
                              </span>
                            </div>
                            <div
                              className={`text-sm ${
                                isDark ? "text-[#e9e7ee]/80" : "text-white"
                              }`}
                            >
                              grow features
                            </div>
                            {/* current plan button intentionally omitted */}
                          </th>
                          <th
                            className={`px-8 py-6 text-center sticky top-0 z-20 ${
                              isDark
                                ? "bg-[#2d1129] border-[#2d1129]"
                                : "border-gray-200 bg-gray-50"
                            }`}
                          >
                            <div
                              className={`text-2xl font-bold mb-2 ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              Advanced
                            </div>
                            <div
                              className={`text-3xl font-bold mb-1 ${
                                isDark ? "text-[#e9e7ee]" : "text-gray-900"
                              }`}
                            >
                              {billingPeriod === "yearly"
                                ? "$263.76"
                                : "$21.98"}
                              <span
                                className={`text-lg ${
                                  isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                                }`}
                              >
                                {billingPeriod === "yearly"
                                  ? "/year"
                                  : " USD/month"}
                              </span>
                            </div>
                            <div
                              className={`text-sm ${
                                isDark ? "text-[#e9e7ee]/80" : "text-gray-500"
                              }`}
                            >
                              Advanced features
                            </div>
                            {/* Upgrade button removed per request */}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Section title */}
                        <tr>
                          <td
                            colSpan={4}
                            className={`px-8 py-4 text-left font-semibold ${
                              isDark
                                ? "text-[#e9e7ee] bg-[#f8f5fb]/0"
                                : "text-gray-700 bg-gray-50"
                            }`}
                          >
                            Core Features
                          </td>
                        </tr>

                        {/* Orders row */}
                        <tr
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
                              Orders / month
                            </div>
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
                            Up to 60 orders /month
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark
                                ? "border-[#b76be0]/20 bg-[#2d1129]/20"
                                : "border-gray-100 bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5"
                            }`}
                          >
                            Up to 490 orders /month
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
                            Unlimited orders / month
                          </td>
                        </tr>

                        {/* Feature checklist rows */}
                        <tr
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
                              1-Click Upsells
                            </div>
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
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
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark
                                ? "border-[#b76be0]/20 bg-[#2d1129]/20"
                                : "border-gray-100 bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5"
                            }`}
                          >
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
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "border-[#b76be0]/20" : "border-gray-100"
                            }`}
                          >
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
                          </td>
                        </tr>

                        {/* Reuse same structure for the remaining simple feature rows */}
                        {[
                          "Quantity offers",
                          "Google Sheets",
                          "Abandoned carts",
                          "Discount codes",
                          "Shipping rates",
                          "Google Autocomplete",
                          "Multi-Pixels",
                          "Multi-Language",
                        ].map((feat, i) => (
                          <tr
                            key={i}
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
                                {feat}
                              </div>
                            </td>
                            <td
                              className={`px-8 py-6 text-center ${
                                isDark
                                  ? "border-[#b76be0]/20"
                                  : "border-gray-100"
                              }`}
                            >
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
                            </td>
                            <td
                              className={`px-8 py-6 text-center ${
                                isDark
                                  ? "border-[#b76be0]/20 bg-[#2d1129]/20"
                                  : "border-gray-100 bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5"
                              }`}
                            >
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
                            </td>
                            <td
                              className={`px-8 py-6 text-center ${
                                isDark
                                  ? "border-[#b76be0]/20"
                                  : "border-gray-100"
                              }`}
                            >
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
                            </td>
                          </tr>
                        ))}

                        {/* Support row */}
                        <tr
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
                              Support
                            </div>
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "text-white" : ""
                            }`}
                          >
                            Email support
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark
                                ? "text-white"
                                : "bg-gradient-to-br from-[#5e255dff]/5 to-[#9d3ecb]/5"
                            }`}
                          >
                            Email & WhatsApp support
                          </td>
                          <td
                            className={`px-8 py-6 text-center ${
                              isDark ? "text-white" : ""
                            }`}
                          >
                            Email & WhatsApp support
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pricing FAQs */}
          {isPricingPage && (
            <motion.div
              className="mt-16 mx-auto max-w-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h3
                  className={`text-4xl font-bold mb-6 ${
                    isDark ? "text-[#e9e7ee]" : "text-gray-900"
                  }`}
                >
                  Pricing FAQs
                </h3>
                <p
                  className={`text-xl max-w-3xl mx-auto ${
                    isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                  }`}
                >
                  Quick answers to common questions about our pricing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-[#1b0f20]/50 border border-[#b76be0]/20"
                      : "bg-white/80 border border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Can I change plans anytime?
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                    }`}
                  >
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes take effect immediately.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-[#1b0f20]/50 border border-[#b76be0]/20"
                      : "bg-white/80 border border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Is there a free trial?
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                    }`}
                  >
                    Yes, our Basic plan is completely free with up to 60 orders
                    per month.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-[#1b0f20]/50 border border-[#b76be0]/20"
                      : "bg-white/80 border border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    What payment methods do you accept?
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                    }`}
                  >
                    We accept all major credit cards, PayPal, and bank transfers
                    for annual plans.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    isDark
                      ? "bg-[#1b0f20]/50 border border-[#b76be0]/20"
                      : "bg-white/80 border border-gray-200"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Do you offer refunds?
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-[#e9e7ee]/80" : "text-gray-600"
                    }`}
                  >
                    We offer a 30-day money-back guarantee on all paid plans.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/help-center"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isDark
                      ? "bg-[#b76be0]/20 text-[#b76be0] hover:bg-[#b76be0]/30 border border-[#b76be0]/30"
                      : "bg-[#5e255dff]/10 text-[#5e255dff] hover:bg-[#5e255dff]/20 border border-[#5e255dff]/20"
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  More Information
                </Link>
              </div>
            </motion.div>
          )}

          {/* Ready card at bottom of pricing page */}
          
          {isPricingPage && <Ready />}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
