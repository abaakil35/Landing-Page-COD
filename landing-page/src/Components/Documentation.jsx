import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const Documentation = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState("onboarding");

  // Handle URL parameters to set active section
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

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
    {
      title: "Form Builder",
      items: [
        { id: "form-builder", label: "Form Builder" },
        { id: "form-customization", label: "Form Customization" },
        { id: "form-validation", label: "Form Validation" },
      ],
    },
    {
      title: "Order Management",
      items: [
        { id: "order-management", label: "Order Management" },
        { id: "order-tracking", label: "Order Tracking" },
        { id: "customer-communication", label: "Customer Communication" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { id: "shopify-integration", label: "Shopify Integration" },
        { id: "api-reference", label: "API Reference" },
        { id: "webhooks", label: "Webhooks" },
      ],
    },
    {
      title: "Support",
      items: [
        { id: "troubleshooting", label: "Troubleshooting" },
        { id: "customization", label: "Customization" },
        { id: "faq", label: "FAQ" },
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
                <span className="text-[#5e255dff] font-medium">
                  {activeSection === "introduction" ||
                  activeSection === "navigation" ||
                  activeSection === "importing-exporting"
                    ? "Getting Started"
                    : activeSection === "form-builder" ||
                      activeSection === "form-customization" ||
                      activeSection === "form-validation"
                    ? "Form Builder"
                    : activeSection === "order-management" ||
                      activeSection === "order-tracking" ||
                      activeSection === "customer-communication"
                    ? "Order Management"
                    : activeSection === "shopify-integration" ||
                      activeSection === "api-reference" ||
                      activeSection === "webhooks"
                    ? "Integrations"
                    : activeSection === "troubleshooting" ||
                      activeSection === "customization" ||
                      activeSection === "faq"
                    ? "Support"
                    : "Overview"}
                </span>
              </div>

              {/* Dynamic Content Based on Active Section */}
              {activeSection === "introduction" ? (
                <>
                  {/* Introduction Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Introduction
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Get started with COD Rocket - the most powerful
                    cash-on-delivery form builder designed to maximize your
                    conversion rates and streamline your order management
                    process.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        What is COD Rocket?
                      </h3>
                      <p className="text-gray-600">
                        A comprehensive platform that transforms how businesses
                        handle cash-on-delivery operations.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "form-builder" ? (
                <>
                  {/* Form Builder Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Form Builder
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Master our intuitive drag-and-drop form builder to create
                    high-converting COD forms with advanced customization
                    options.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Drag & Drop Interface
                      </h3>
                      <p className="text-gray-600">
                        Build forms visually with our intuitive drag-and-drop
                        interface. No coding required.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Pre-built Templates
                      </h3>
                      <p className="text-gray-600">
                        Start with industry-optimized templates and customize
                        them to match your brand.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "order-management" ? (
                <>
                  {/* Order Management Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Order Management
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Efficiently handle COD orders, track deliveries, and manage
                    customer communications with our comprehensive order
                    management system.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Real-time Tracking
                      </h3>
                      <p className="text-gray-600">
                        Monitor orders from submission to delivery with
                        real-time status updates.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Automated Notifications
                      </h3>
                      <p className="text-gray-600">
                        Keep customers informed with automated SMS and email
                        notifications.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "shopify-integration" ? (
                <>
                  {/* Shopify Integration Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Shopify Integration
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Seamlessly integrate COD Rocket with your Shopify store to
                    enable cash-on-delivery options for your customers.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        One-Click Installation
                      </h3>
                      <p className="text-gray-600">
                        Install COD Rocket directly from the Shopify App Store
                        with just one click.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Sync with Shopify Orders
                      </h3>
                      <p className="text-gray-600">
                        Automatically sync COD orders with your Shopify
                        dashboard for unified management.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "customization" ? (
                <>
                  {/* Customization Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Customization
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Customize form appearance, validation rules, and delivery
                    options to match your brand and business requirements.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Brand Customization
                      </h3>
                      <p className="text-gray-600">
                        Apply your brand colors, fonts, and styling to create a
                        seamless user experience.
                      </p>
                    </div>
                    <div className="bg-pink-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Validation Rules
                      </h3>
                      <p className="text-gray-600">
                        Set up custom validation rules to ensure data quality
                        and reduce fake orders.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "troubleshooting" ? (
                <>
                  {/* Troubleshooting Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Troubleshooting
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Solve common issues and get your COD forms working perfectly
                    with our comprehensive troubleshooting guide.
                  </p>
                  <div className="space-y-8">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Common Issues
                      </h3>
                      <p className="text-gray-600">
                        Find solutions to the most frequently encountered
                        problems and issues.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Debug Mode
                      </h3>
                      <p className="text-gray-600">
                        Enable debug mode to identify and resolve technical
                        issues quickly.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Default Onboarding Content */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Onboarding
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Welcome to COD Rocket — your complete toolkit for building
                    high-converting cash-on-delivery forms, fast. This
                    comprehensive platform streamlines the entire COD process,
                    from form creation to order fulfillment. Whether you're a
                    developer integrating APIs, a store owner setting up your
                    first COD system, or a marketing specialist optimizing
                    conversion rates, our step-by-step onboarding guide will
                    help you master every aspect of COD Rocket. You'll learn to
                    create responsive forms, manage orders efficiently, track
                    analytics in real-time, integrate with popular e-commerce
                    platforms, and scale your business operations seamlessly.
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
                        COD Rocket revolutionizes cash-on-delivery operations by
                        integrating form creation, order management, payment
                        processing, and analytics into one powerful platform.
                        Our cloud-based infrastructure ensures 99.9% uptime and
                        can handle traffic spikes during promotional campaigns.
                        The platform features drag-and-drop form builders,
                        automated order routing, real-time inventory sync,
                        multi-currency support, fraud detection algorithms, and
                        comprehensive reporting dashboards. Built with
                        enterprise-grade security and GDPR compliance, it scales
                        effortlessly from startups processing their first orders
                        to large enterprises managing thousands of daily
                        transactions across multiple regions and marketplaces.
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
                        Begin your journey by creating a secure COD Rocket
                        account with enterprise-grade encryption and two-factor
                        authentication. During setup, you'll configure your
                        business profile, generate API tokens for secure
                        integrations, select your preferred data center region
                        for optimal performance, and set up your first
                        workspace. The platform guides you through connecting
                        payment gateways (Stripe, PayPal, local processors),
                        configuring shipping carriers (FedEx, UPS, DHL, local
                        couriers), setting up automated email and SMS
                        notifications, defining user roles and permissions for
                        team collaboration, and establishing backup and recovery
                        protocols to ensure business continuity.
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
                        Accelerate your development workflow with our powerful
                        CLI tool. Install globally with 'npm install -g
                        codrocket-cli' and unlock advanced automation
                        capabilities. The CLI provides comprehensive commands
                        for project scaffolding, form template generation, bulk
                        data operations, automated testing suites, deployment
                        pipelines, and performance monitoring. Features include
                        environment management for dev/staging/production,
                        database migrations, configuration validation, log
                        analysis, backup operations, and integration with
                        popular CI/CD platforms like GitHub Actions, Jenkins,
                        and GitLab CI.
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#5e255dff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">Deploy models</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#5e255dff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">
                            Run test requests
                          </span>
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
                        Create your first high-converting COD form using our
                        intuitive drag-and-drop builder. Start with pre-designed
                        templates optimized for different industries, then
                        customize fields, validation rules, styling, and
                        behavior to match your brand. Configure smart features
                        like address autocomplete, phone number validation,
                        product variant selection, quantity controls, shipping
                        calculators, promotional code handling, and abandoned
                        cart recovery. Set up conditional logic to show/hide
                        fields based on user selections, implement A/B testing
                        for form variants, add trust badges and security
                        certifications, and integrate with popular page builders
                        like Elementor, Gutenberg, and custom HTML
                        implementations for seamless website integration.
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
                        Transform your order processing with our comprehensive
                        management system that handles the entire order
                        lifecycle. Track orders in real-time from submission to
                        delivery with automated status updates, smart routing
                        algorithms, and predictive delivery estimates. The
                        system features bulk operations for processing multiple
                        orders, automated inventory updates, supplier
                        integration, return management, refund processing, and
                        dispute resolution workflows. Advanced features include
                        machine learning-powered fraud detection, delivery
                        optimization algorithms, customer communication
                        automation, performance analytics, integration with
                        accounting systems, and support for complex business
                        rules like region-specific pricing, seasonal promotions,
                        and customer loyalty programs.
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
                        Unlock deep business insights with our advanced
                        analytics engine that transforms raw data into
                        actionable intelligence. Monitor key performance
                        indicators including conversion rates, average order
                        values, customer lifetime value, delivery success rates,
                        geographic performance, traffic sources, and seasonal
                        trends. The dashboard features customizable widgets,
                        real-time alerts, predictive analytics, cohort analysis,
                        funnel optimization insights, A/B test results,
                        competitive benchmarking, and automated reporting.
                        Export data in multiple formats, integrate with Google
                        Analytics and Facebook Pixel, set up custom KPI
                        tracking, create executive dashboards for stakeholders,
                        and leverage machine learning recommendations for
                        business optimization and growth strategies.
                      </p>
                    </motion.section>
                  </div>
                </>
              )}
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
