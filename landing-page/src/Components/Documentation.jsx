import React, { useState, useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ThemeContext from "../Context/ThemeContextContext.js";
import ThemeToggle from "./ThemeToggle";
// import MiniFooter from "./MiniFooter";

const Documentation = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState("onboarding");

  // Click handler for right-hand TOC: prevent default anchor jump,
  // switch the rendered section, then scroll to the target anchor
  // after React has rendered the new content.
  const handleTocClick = (e, sectionId, anchorId) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveSection(sectionId);
    // small delay to allow React to render the target section
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  };

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

  const { theme } = useContext(ThemeContext);

  // paragraph text class: lighter in dark mode for better readability
  const pClass = theme === "dark" ? "text-gray-400" : "text-gray-600";

  // Right-hand dynamic Table of Contents (scanned from rendered content)
  const contentRef = useRef(null);
  const [tocItems, setTocItems] = useState([]);

  useEffect(() => {
    if (!contentRef.current) return;
    // find h2 and h3 with ids inside the content area
    const nodes = Array.from(
      contentRef.current.querySelectorAll("h2[id], h3[id]")
    );
    const items = [];
    nodes.forEach((node) => {
      const id = node.id;
      const text = node.textContent || node.innerText || id;
      if (node.tagName.toLowerCase() === "h2") {
        items.push({ id, text, children: [] });
      } else if (node.tagName.toLowerCase() === "h3") {
        if (items.length === 0) {
          // orphan h3, push as a top-level entry
          items.push({ id, text, children: [] });
        } else {
          items[items.length - 1].children.push({ id, text });
        }
      }
    });
    setTocItems(items);
  }, [activeSection, theme]);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-[#0f0712] text-[#e9e7ee] min-h-screen"
          : "bg-gray-50 text-gray-900"
      }
    >
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`w-64 border-r fixed left-0 top-0 pt-6 z-10 overflow-y-auto h-screen ${
            theme === "dark"
              ? "bg-[#120913] border-[#2d1129] text-[#e9e7ee]"
              : "bg-white border-gray-200 text-gray-700"
          }`}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="p-4">
            {/* Top controls: toggle */}
            <div className="flex items-center justify-between mb-4">
              <div
                className={`text-sm font-semibold ${
                  theme === "dark" ? "text-[#EAE6F2]" : "text-gray-700"
                }`}
              >
                Docs
              </div>
              <ThemeToggle
                className={
                  theme === "dark" ? "hover:bg-[#1b0f20]" : "hover:bg-gray-100"
                }
              />
            </div>
            {sidebarSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3
                  className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    theme === "dark" ? "text-[#EAE6F2]" : "text-gray-500"
                  }`}
                >
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === item.id
                            ? theme === "dark"
                              ? "bg-[#2d1129] text-[#EAE6F2] font-medium"
                              : "bg-purple-50 text-purple-600 font-medium"
                            : theme === "dark"
                            ? "text-[#9b8fa2] hover:bg-[#1b0f20] hover:text-[#e9e7ee]"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
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
        <div
          ref={contentRef}
          className={`flex-1 ml-64 pt-6 ${theme === "dark" ? "doc-dark" : ""}`}
          style={{ color: theme === "dark" ? "#e9e7ee" : undefined }}
        >
          {/* Scoped rule: make content h3 headings pure white in dark mode (keeps sidebar untouched) */}
          {theme === "dark" && (
            <style>{`.doc-dark h3{ color: #ffffff !important; }`}</style>
          )}
          <div
            className={`max-w-4xl mx-8 px-6 py-8 mb-6 ${
              theme === "dark" ? "bg-transparent" : "bg-transparent"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
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
                  <h1
                    className={`text-4xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Introduction
                  </h1>
                  <p className={`text-lg mb-6 leading-relaxed ${pClass}`}>
                    Get started with COD Rocket - the most powerful
                    cash-on-delivery form builder designed to maximize your
                    conversion rates and streamline your order management
                    process.
                  </p>
                  <div className="space-y-6">
                    <div className=" p-4 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        What is COD Rocket?
                      </h3>
                      <p className={pClass}>
                        A comprehensive platform that transforms how businesses
                        handle cash-on-delivery operations.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "form-builder" ? (
                <>
                  {/* Form Builder Section */}
                  <h2
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Form Builder
                  </h2>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Master our intuitive drag-and-drop form builder to create
                    high-converting COD forms with advanced customization
                    options.
                  </p>
                  <div className="space-y-8">
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Drag & Drop Interface
                      </h3>
                      <p className={pClass}>
                        Build forms visually with our intuitive drag-and-drop
                        interface. No coding required.
                      </p>
                    </div>
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Pre-built Templates
                      </h3>
                      <p className={pClass}>
                        Start with industry-optimized templates and customize
                        them to match your brand.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "order-management" ? (
                <>
                  {/* Order Management Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Order Management
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Efficiently handle COD orders, track deliveries, and manage
                    customer communications with our comprehensive order
                    management system.
                  </p>
                  <div className="space-y-8">
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Real-time Tracking
                      </h3>
                      <p className={pClass}>
                        Monitor orders from submission to delivery with
                        real-time status updates.
                      </p>
                    </div>
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Automated Notifications
                      </h3>
                      <p className={pClass}>
                        Keep customers informed with automated SMS and email
                        notifications.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "shopify-integration" ? (
                <>
                  {/* Shopify Integration Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Shopify Integration
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Seamlessly integrate COD Rocket with your Shopify store to
                    enable cash-on-delivery options for your customers.
                  </p>
                  <div className="space-y-8">
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        One-Click Installation
                      </h3>
                      <p className={pClass}>
                        Install COD Rocket directly from the Shopify App Store
                        with just one click.
                      </p>
                    </div>
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Sync with Shopify Orders
                      </h3>
                      <p className={pClass}>
                        Automatically sync COD orders with your Shopify
                        dashboard for unified management.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "customization" ? (
                <>
                  {/* Customization Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Customization
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Customize form appearance, validation rules, and delivery
                    options to match your brand and business requirements.
                  </p>
                  <div className="space-y-8">
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Brand Customization
                      </h3>
                      <p className={pClass}>
                        Apply your brand colors, fonts, and styling to create a
                        seamless user experience.
                      </p>
                    </div>
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Validation Rules
                      </h3>
                      <p className={pClass}>
                        Set up custom validation rules to ensure data quality
                        and reduce fake orders.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "troubleshooting" ? (
                <>
                  {/* Troubleshooting Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Troubleshooting
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Solve common issues and get your COD forms working perfectly
                    with our comprehensive troubleshooting guide.
                  </p>
                  <div className="space-y-8">
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Common Issues
                      </h3>
                      <p className={pClass}>
                        Find solutions to the most frequently encountered
                        problems and issues.
                      </p>
                    </div>
                    <div className=" p-6 rounded-lg">
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Debug Mode
                      </h3>
                      <p className={pClass}>
                        Enable debug mode to identify and resolve technical
                        issues quickly.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "documentation" ? (
                <>
                  {/* Documentation Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    Documentation
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Comprehensive documentation for COD Rocket platform,
                    covering all features, APIs, and integration guides. Our
                    documentation is designed to provide developers, business
                    owners, and technical teams with everything needed to
                    successfully implement and optimize COD Rocket for their
                    specific use cases. From basic setup instructions to
                    advanced customization techniques, this documentation serves
                    as your complete reference guide for maximizing the
                    potential of our cash-on-delivery platform.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        API Documentation
                      </h3>
                      <p className={pClass}>
                        Complete reference for all API endpoints, authentication
                        methods, request/response formats, and data structures.
                        Includes detailed examples for REST API calls, webhook
                        configurations, authentication tokens, rate limiting
                        guidelines, error handling procedures, and best
                        practices for secure integration. Our API documentation
                        also covers advanced topics like batch processing,
                        real-time notifications, data synchronization, and
                        custom field mapping to ensure seamless integration with
                        your existing systems and workflows.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Integration Guides
                      </h3>
                      <p className={pClass}>
                        Step-by-step guides for integrating with popular
                        platforms and services including Shopify, WooCommerce,
                        Magento, BigCommerce, and custom e-commerce solutions.
                        Each guide provides detailed instructions for
                        installation, configuration, testing, and deployment.
                        Learn how to set up automated order sync, configure
                        payment gateways, customize checkout flows, implement
                        tracking pixels, and optimize for mobile devices. These
                        guides also cover troubleshooting common issues,
                        performance optimization techniques, and advanced
                        customization options for enterprise-level
                        implementations.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Code Examples
                      </h3>
                      <p className={pClass}>
                        Ready-to-use code snippets and examples for common use
                        cases, implementation patterns, and integration
                        scenarios. Includes examples in multiple programming
                        languages such as JavaScript, PHP, Python, Ruby, and
                        .NET. Find code samples for form embedding, order
                        processing, customer data handling, analytics tracking,
                        and custom validation rules. Each example includes
                        detailed comments, error handling, and security best
                        practices to help you implement robust and maintainable
                        solutions quickly and efficiently.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        SDK & Libraries
                      </h3>
                      <p className={pClass}>
                        Official software development kits and libraries for
                        popular programming languages and frameworks including
                        React, Vue.js, Angular, Laravel, Django, and more. Our
                        SDKs provide pre-built components, helper functions, and
                        utilities that accelerate development and ensure
                        consistent implementation across different projects.
                        Each SDK comes with comprehensive documentation, unit
                        tests, and community support to help developers
                        integrate COD Rocket seamlessly into their existing
                        applications.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Testing & Debugging
                      </h3>
                      <p className={pClass}>
                        Comprehensive testing tools and debugging utilities to
                        help you validate your integration and troubleshoot
                        issues effectively. Access sandbox environments, mock
                        data generators, API testing tools, and detailed logging
                        systems. Our testing suite includes automated test
                        cases, performance benchmarks, and security assessments
                        to ensure your implementation meets production standards
                        before going live.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Version Control & Updates
                      </h3>
                      <p className={pClass}>
                        Stay up-to-date with API versioning, changelog
                        notifications, migration guides, and backward
                        compatibility information. Our documentation includes
                        detailed version history, deprecation notices, and
                        upgrade paths to help you maintain your integration as
                        our platform evolves. Access to beta features, early
                        access programs, and developer previews keep you ahead
                        of the curve with the latest innovations.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "onboarding" ? (
                <>
                  {/* Onboarding Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Onboarding
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Welcome to COD Rocket! This comprehensive onboarding guide
                    will help you get started and make the most of our platform.
                    Whether you're new to cash-on-delivery operations or
                    migrating from another solution, our structured approach
                    ensures a smooth transition and quick time-to-value. This
                    onboarding process is designed to take you from initial
                    setup to your first successful COD order, providing hands-on
                    guidance, best practices, and expert tips along the way to
                    maximize your success with our platform.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Account Setup
                      </h3>
                      <p className={pClass}>
                        Create your account, verify your email, and configure
                        your initial settings including business profile,
                        payment preferences, notification settings, and security
                        options. This step includes setting up your organization
                        details, defining user roles and permissions,
                        configuring two-factor authentication, and establishing
                        your preferred communication channels. We'll also guide
                        you through setting up your billing information,
                        selecting your subscription plan, and configuring your
                        workspace preferences to match your business
                        requirements and operational workflows.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        First Form Creation
                      </h3>
                      <p className={pClass}>
                        Build your first COD form using our intuitive
                        drag-and-drop builder, complete with pre-designed
                        templates, custom field options, validation rules, and
                        styling preferences. Learn how to configure product
                        catalogs, set up pricing rules, implement shipping
                        calculations, add promotional codes, and customize the
                        user experience. This section covers form optimization
                        techniques, mobile responsiveness settings, A/B testing
                        configurations, and conversion tracking setup to ensure
                        your forms perform at their best from day one.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Integration Setup
                      </h3>
                      <p className={pClass}>
                        Connect with your website, e-commerce platform, or
                        existing tools through our comprehensive integration
                        options including API connections, webhook
                        configurations, plugin installations, and custom
                        embeddings. This process covers domain verification, SSL
                        certificate setup, tracking pixel implementation,
                        analytics integration, and data synchronization
                        settings. We'll help you establish seamless data flow
                        between COD Rocket and your existing systems while
                        maintaining data integrity and security standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Go Live
                      </h3>
                      <p className={pClass}>
                        Deploy your forms and start accepting cash-on-delivery
                        orders with confidence through our guided launch
                        process, including final testing, performance
                        optimization, monitoring setup, and success metrics
                        tracking. This final step includes comprehensive testing
                        procedures, backup plans, customer support channel
                        setup, and performance monitoring configuration. We'll
                        also provide you with launch day best practices, common
                        troubleshooting solutions, and ongoing optimization
                        strategies to ensure your COD operations run smoothly
                        from the very beginning.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Team Training
                      </h3>
                      <p className={pClass}>
                        Comprehensive training programs for your team members
                        including customer service representatives, order
                        managers, and technical staff. Access video tutorials,
                        interactive workshops, certification programs, and
                        hands-on training sessions designed to maximize your
                        team's proficiency with the platform. Our training
                        covers best practices, troubleshooting techniques, and
                        advanced features to ensure your team can provide
                        excellent customer service and efficient order
                        management.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Success Metrics
                      </h3>
                      <p className={pClass}>
                        Establish key performance indicators and success metrics
                        to measure the effectiveness of your COD implementation.
                        Learn how to track conversion rates, order completion
                        rates, customer satisfaction scores, and revenue growth.
                        Our onboarding includes setting up custom dashboards,
                        automated reporting, and alert systems to help you
                        monitor performance and identify optimization
                        opportunities from day one.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Ongoing Support
                      </h3>
                      <p className={pClass}>
                        Access to dedicated support channels, community forums,
                        knowledge base, and expert consultation services to
                        ensure your continued success with COD Rocket. Our
                        support team provides ongoing assistance with technical
                        issues, optimization recommendations, and strategic
                        guidance to help you scale your cash-on-delivery
                        operations effectively as your business grows.
                      </p>
                    </div>
                  </div>
                </>
              ) : activeSection === "toolkit-features" ? (
                <>
                  {/* Toolkit Features Section */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Toolkit Features
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
                    Explore the comprehensive toolkit features that make COD
                    Rocket the most powerful solution for cash-on-delivery
                    operations. Our feature-rich platform combines cutting-edge
                    technology with user-friendly interfaces to deliver an
                    unmatched experience for businesses of all sizes. From small
                    startups to large enterprises, our toolkit adapts to your
                    needs while providing the scalability, reliability, and
                    performance required for successful cash-on-delivery
                    operations in today's competitive e-commerce landscape.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Form Builder Tools
                      </h3>
                      <p className={pClass}>
                        Drag-and-drop interface, pre-built templates, and
                        advanced customization options including responsive
                        design capabilities, conditional logic, multi-step
                        forms, and dynamic field generation. Create
                        professional-looking forms with custom branding,
                        advanced validation rules, real-time field updates,
                        auto-save functionality, and seamless user experience
                        optimization. Our form builder includes advanced
                        features like file uploads, signature capture,
                        geolocation tracking, and integration with third-party
                        services to meet any business requirement you might
                        have.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Analytics Dashboard
                      </h3>
                      <p className={pClass}>
                        Real-time insights, conversion tracking, and performance
                        metrics with comprehensive reporting capabilities,
                        custom KPI monitoring, trend analysis, and predictive
                        analytics. Track form performance, user behavior,
                        conversion funnels, drop-off points, and revenue metrics
                        through interactive dashboards and automated reports.
                        Advanced features include cohort analysis, A/B testing
                        results, customer lifetime value tracking, geographic
                        performance mapping, and exportable data for further
                        analysis and business intelligence integration.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Order Management
                      </h3>
                      <p className={pClass}>
                        Automated workflows, status tracking, and customer
                        communication tools with advanced order processing
                        capabilities, inventory management, shipping
                        integration, and customer service automation. Streamline
                        your operations with bulk actions, smart routing,
                        priority handling, and customizable approval processes.
                        Features include automated notifications, delivery
                        tracking, return management, dispute resolution,
                        performance analytics, and integration with popular
                        shipping carriers and customer service platforms.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Fraud Prevention
                      </h3>
                      <p className={pClass}>
                        Advanced algorithms to detect and prevent fake orders
                        automatically using machine learning, behavioral
                        analysis, and risk scoring systems. Our fraud prevention
                        system analyzes multiple data points including customer
                        behavior patterns, device fingerprinting, geolocation
                        verification, and historical transaction data to
                        identify suspicious activities. Advanced features
                        include real-time risk assessment, customizable fraud
                        rules, manual review workflows, whitelist/blacklist
                        management, and detailed fraud analytics to help you
                        maintain high order quality while minimizing false
                        positives.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Customer Communication Hub
                      </h3>
                      <p className={pClass}>
                        Centralized communication platform for managing customer
                        interactions through multiple channels including email,
                        SMS, WhatsApp, and in-app messaging. Automate
                        follow-ups, send order updates, handle customer
                        inquiries, and provide support through our integrated
                        communication tools. Features include message templates,
                        automated workflows, conversation history, and
                        integration with popular customer service platforms to
                        streamline your customer communication processes.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Mobile App & Notifications
                      </h3>
                      <p className={pClass}>
                        Native mobile applications for iOS and Android that
                        allow you to manage orders, monitor performance, and
                        receive real-time notifications on the go. The mobile
                        app includes order management tools, customer
                        communication features, analytics dashboards, and push
                        notifications for important events. Stay connected to
                        your business with offline capabilities, biometric
                        authentication, and seamless synchronization across all
                        devices.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Advanced Customization
                      </h3>
                      <p className={pClass}>
                        Extensive customization options including custom CSS,
                        JavaScript injections, white-label solutions, and API
                        extensions to match your unique business requirements.
                        Create custom workflows, implement specialized business
                        logic, and integrate with proprietary systems through
                        our flexible architecture. Advanced features include
                        custom field types, conditional logic builders, theme
                        customization, and enterprise-grade security options for
                        complete brand control.
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        Enterprise Features
                      </h3>
                      <p className={pClass}>
                        Enterprise-grade features designed for large-scale
                        operations including multi-tenant architecture, advanced
                        user management, SSO integration, compliance tools, and
                        dedicated infrastructure. Access features like bulk
                        operations, advanced reporting, API rate limiting, data
                        export tools, and priority support. Enterprise customers
                        also benefit from dedicated account management, custom
                        SLAs, and specialized consulting services for complex
                        implementations.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Default Content */}
                  <h1
                    className={`text-4xl font-bold mb-6 ${
                      theme === "dark" ? "text-[#e9e7ee]" : "text-gray-900"
                    }`}
                  >
                    Onboarding
                  </h1>

                  <p className={`text-lg mb-8 leading-relaxed ${pClass}`}>
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
                      <h2
                        id="platform-overview"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Platform Overview
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
                      <h2
                        id="account-setup"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Account Setup
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
                      <h2
                        id="using-command-line"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Using the Command Line
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
                          <span className={pClass}>Deploy models</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#5e255dff] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className={pClass}>Run test requests</span>
                        </li>
                      </ul>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <h2
                        id="first-cod-form"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Your First COD Form
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
                      <h2
                        id="order-management"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Order Management
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
                      <h2
                        id="analytics-dashboard"
                        className="text-2xl font-semibold text-gray-900 mb-4"
                      >
                        Analytics Dashboard
                      </h2>
                      <p className={`leading-relaxed mb-4 ${pClass}`}>
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
          <div
            className={
              theme === "dark"
                ? "bg-transparent border-[#2d1129] rounded-lg p-4 shadow-sm text-[#e9e7ee]"
                : "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            }
          >
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
              {tocItems.length === 0 ? (
                <li
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  No headings found
                </li>
              ) : (
                tocItems.map((item) => (
                  <li key={item.id}>
                    <div
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) =>
                          handleTocClick(e, activeSection, item.id)
                        }
                        className="hover:text-[#c48fbf]"
                      >
                        {item.text}
                      </a>
                    </div>
                    {item.children && item.children.length > 0 && (
                      <ul className="ml-4 mt-2 space-y-1 text-sm">
                        {item.children.map((child) => (
                          <li
                            key={child.id}
                            className={`${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            <a
                              href={`#${child.id}`}
                              onClick={(e) =>
                                handleTocClick(e, activeSection, child.id)
                              }
                              className="hover:text-[#c48fbf]"
                            >
                              {child.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* <MiniFooter /> */}
    </div>
  );
};
export default Documentation;
