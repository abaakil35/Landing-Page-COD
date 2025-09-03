import React, { useState } from "react";
import { motion } from "framer-motion";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("onboarding");

  const sidebarSections = [
    {
      title: "Overview",
      items: [
        { id: "overview", label: "Overview" },
        { id: "documentation", label: "Documentation" },
        { id: "onboarding", label: "Onboarding" },
        { id: "toolkit-features", label: "Toolkit Features" },
      ],
    },
    {
      title: "Getting Started",
      items: [
        { id: "introduction", label: "Introduction" },
        { id: "navigation", label: "Navigation" },
        { id: "importing-exporting", label: "Importing & Exporting" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 pt-20 z-10 overflow-y-auto scrollbar-hide h-screen">
          <div className="p-6">
            {sidebarSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === item.id
                            ? "bg-purple-50 text-purple-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 pt-5">
          <div className="max-w-4xl mx-auto px-8 py-12 mb-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="text-purple-600 font-medium">Overview</span>
              </div>

              {/* Page Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Onboarding
              </h1>

              {/* Introduction */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to COD Rocket — your complete toolkit for building
                high-converting cash-on-delivery forms, fast. This section will
                walk you through the initial steps to get up and running with
                the platform. Whether you're a developer, store owner, or
                marketing specialist, our onboarding is designed to help you
                understand how COD Rocket works, how to set up your environment,
                and how to create your first COD form with minimal effort.
              </p>

              {/* Content Sections */}
              <div className="space-y-12">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Platform Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    COD Rocket connects COD forms, order management, and
                    analytics into one seamless platform. Built to scale with
                    your business — whether you're processing one order or
                    thousands.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Account Setup
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Create a secure account, generate your first API token, and
                    choose your preferred region. You can also configure payment
                    gateways, shipping methods, and notification settings from
                    the Admin dashboard.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Using the Command Line
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Install our CLI tool with npm i codrocket-cli.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#5e255dff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Deploy models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#5e255dff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">Run test requests</span>
                    </li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Your First COD Form
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Follow these steps to create your first cash-on-delivery
                    form and start accepting orders immediately.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Order Management
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Track and manage your COD orders with real-time updates,
                    automated notifications, and comprehensive reporting tools.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Analytics Dashboard
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Monitor your COD performance with detailed insights
                    including conversion rates, order success rates, delivery
                    metrics, and revenue analytics.
                  </p>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="hidden xl:block fixed right-8 top-32 w-64">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-3">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="font-semibold text-sm">On this page</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#platform-overview"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Platform Overview
                </a>
              </li>
              <li>
                <a
                  href="#account-setup"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Account Setup
                </a>
              </li>
              <li>
                <a
                  href="#using-command-line"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Using the Command Line
                </a>
              </li>
              <li>
                <a
                  href="#first-cod-form"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Your First COD Form
                </a>
              </li>
              <li>
                <a
                  href="#order-management"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Order Management
                </a>
              </li>
              <li>
                <a
                  href="#analytics-dashboard"
                  className="text-gray-600 hover:text-[#5e255dff] transition-colors"
                >
                  Analytics Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
