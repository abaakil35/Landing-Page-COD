import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

const Cookies = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen w-full py-24 px-6 overflow-hidden ${
        isDark
          ? "bg-[#0f0712]"
          : "bg-gradient-to-br from-white via-[#f9f4f9] to-[#f7eaf7]"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Cookies Policy
        </h1>

        <div
          className={`border-l-4 p-4 mb-6 ${
            isDark
              ? "bg-gray-800/50 border-purple-500 text-gray-300"
              : "bg-blue-50 border-blue-500 text-gray-800"
          }`}
        >
          <p>
            At COD Rocket, we use cookies and similar technologies to enhance
            your experience on our website. This policy explains how we use
            cookies, the types of cookies we employ, and your options for
            managing them.
          </p>
        </div>

        <h2
          id="introduction"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          1. Introduction
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Welcome to COD Rocket's Cookies Policy. This policy explains how we
          use cookies and similar technologies on our website. By using our
          website, you consent to the use of cookies in accordance with this
          policy.
        </p>

        <h2
          id="what-are-cookies"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          2. What Are Cookies
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Cookies are small text files that are stored on your device when you
          visit a website. They help us remember your preferences, improve your
          browsing experience, and provide personalized content. Cookies can be
          session-based (temporary) or persistent (stored longer-term).
        </p>

        <h2
          id="how-we-use-cookies"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          3. How We Use Cookies
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We use cookies to enhance your experience on our website, analyze
          website traffic, and improve our services. Specifically, cookies help
          us:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>Remember your login status and preferences</li>
          <li>Analyze website usage and performance</li>
          <li>Provide personalized content and recommendations</li>
          <li>Ensure website security and prevent fraud</li>
        </ul>

        <h2
          id="types-of-cookies"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          4. Types of Cookies We Use
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
          <p
            className={`leading-relaxed mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            These cookies are necessary for the website to function properly.
            They enable core functionality such as security, network management,
            and accessibility. You cannot opt out of these cookies.
          </p>

          <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
          <p
            className={`leading-relaxed mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We use analytics cookies to understand how visitors interact with
            our website. This helps us improve our content and user experience.
            We use Google Analytics for this purpose.
          </p>

          <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
          <p
            className={`leading-relaxed mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            These cookies remember your preferences and settings, such as
            language or region, to provide a more personalized experience.
          </p>

          <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
          <p
            className={`leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Marketing cookies are used to track visitors across websites to
            display relevant advertisements. We may use these cookies to show
            you ads for COD Rocket products on other websites.
          </p>
        </div>

        <h2
          id="managing-cookies"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          5. Managing Your Cookie Preferences
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          You have several options for managing cookies:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            <strong>Browser Settings:</strong> Most web browsers allow you to
            control cookies through their settings. You can usually find these
            options in the 'Options' or 'Preferences' menu.
          </li>
          <li>
            <strong>Opt-out Links:</strong> For analytics cookies, you can opt
            out by visiting the Google Analytics opt-out page.
          </li>
          <li>
            <strong>Our Cookie Banner:</strong> When you first visit our
            website, you'll see a cookie banner where you can accept or reject
            non-essential cookies.
          </li>
        </ul>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Please note that disabling certain cookies may affect the
          functionality of our website.
        </p>

        <h2
          id="third-party-cookies"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          6. Third-Party Cookies
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We may allow third-party service providers to place cookies on your
          device. These include:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>Google Analytics for website analytics</li>
          <li>Social media platforms for sharing functionality</li>
          <li>Payment processors for secure transactions</li>
        </ul>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          These third parties have their own privacy policies and cookie
          practices. We encourage you to review their policies.
        </p>

        <h2
          id="changes-to-policy"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          7. Changes to This Cookies Policy
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We may update this Cookies Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes by posting the
          updated policy on our website and updating the "Last updated" date.
        </p>

        <h2
          id="contact-us"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          8. Contact Us
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          If you have any questions about this Cookies Policy or our use of
          cookies, please contact us:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>Email: support@codrocket.com</li>
          <li>Phone: +212 656-588699</li>
        </ul>
      </div>
    </div>
  );
};

export default Cookies;
