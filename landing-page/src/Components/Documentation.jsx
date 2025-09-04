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
          <div className="max-w-4xl mx-14 px-8 py-12 mb-9">
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
              ) : activeSection === "documentation" ? (
                <>
                  {/* Documentation Section */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Documentation
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        API Documentation
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Integration Guides
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Code Examples
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        SDK & Libraries
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Testing & Debugging
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Version Control & Updates
                      </h3>
                      <p className="text-gray-600">
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
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Onboarding
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Account Setup
                      </h3>
                      <p className="text-gray-600">
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
                      <p className="text-gray-600">
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
                      <p className="text-gray-600">
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
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Team Training
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Success Metrics
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600">
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
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Toolkit Features
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Form Builder Tools
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Analytics Dashboard
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Order Management
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Fraud Prevention
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Customer Communication Hub
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Mobile App & Notifications
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Advanced Customization
                      </h3>
                      <p className="text-gray-600">
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Enterprise Features
                      </h3>
                      <p className="text-gray-600">
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
