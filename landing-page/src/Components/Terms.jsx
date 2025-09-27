import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContextContext.js";

const Terms = () => {
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
          Terms of Service
        </h1>

        <div
          className={`border-l-4 p-4 mb-6 ${
            isDark
              ? "bg-gray-800/50 border-purple-500 text-gray-300"
              : "bg-blue-50 border-blue-500 text-gray-800"
          }`}
        >
          <p>
            These Terms of Service ("Terms") govern your use of COD Rocket's
            website and services. By accessing or using our services, you agree
            to be bound by these Terms. If you do not agree, please do not use
            our services.
          </p>
        </div>

        <h2
          id="acceptance"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          1. Acceptance of Terms
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          By accessing and using COD Rocket's services, you accept and agree to
          be bound by the terms and provision of this agreement. If you do not
          agree to abide by the above, please do not use this service.
        </p>

        <h2
          id="description"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          2. Description of Service
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          COD Rocket provides a platform for Call of Duty gaming services,
          including but not limited to game boosting, coaching, and related
          digital services. Our services are provided "as is" and are subject to
          availability.
        </p>

        <h2
          id="user-accounts"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          3. User Accounts
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          To access certain features of our service, you may be required to
          create an account. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account. You agree to notify us immediately of
          any unauthorized use of your account.
        </p>

        <h2
          id="acceptable-use"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          4. Acceptable Use
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          You agree to use our services only for lawful purposes and in
          accordance with these Terms. You agree not to:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            Use our services in any way that violates applicable laws or
            regulations
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or networks
          </li>
          <li>Transmit any harmful or malicious code</li>
          <li>Interfere with the proper functioning of our services</li>
          <li>Use our services to harass, abuse, or harm others</li>
        </ul>

        <h2
          id="intellectual-property"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          5. Intellectual Property
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          All content, trademarks, and materials provided through our services
          are owned by COD Rocket or our licensors and are protected by
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our express written permission.
        </p>

        <h2
          id="payment"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          6. Payment and Billing
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Certain services may require payment. All fees are non-refundable
          unless otherwise specified. You agree to pay all charges associated
          with your account. We reserve the right to change our pricing at any
          time with reasonable notice.
        </p>

        <h2
          id="termination"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          7. Termination
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We may terminate or suspend your account and access to our services at
          our sole discretion, without prior notice, for conduct that we believe
          violates these Terms or is harmful to other users, us, or third
          parties, or for any other reason.
        </p>

        <h2
          id="disclaimers"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          8. Disclaimers and Limitation of Liability
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Our services are provided on an "as is" and "as available" basis. We
          make no warranties, expressed or implied, regarding the operation of
          our services or the information, content, or materials included. To
          the fullest extent permitted by law, we disclaim all warranties,
          express or implied.
        </p>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          In no event shall COD Rocket be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or relating
          to your use of our services.
        </p>

        <h2
          id="indemnification"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          9. Indemnification
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          You agree to indemnify and hold COD Rocket harmless from any claims,
          damages, losses, or expenses arising out of your use of our services,
          your violation of these Terms, or your violation of any rights of
          another party.
        </p>

        <h2
          id="governing-law"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          10. Governing Law
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Jurisdiction], without regard to its conflict of law
          provisions. Any disputes arising from these Terms shall be resolved in
          the courts of [Your Jurisdiction].
        </p>

        <h2
          id="changes"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          11. Changes to Terms
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We reserve the right to modify these Terms at any time. We will notify
          users of any material changes by posting the updated Terms on our
          website and updating the "Last updated" date. Your continued use of
          our services after such changes constitutes acceptance of the new
          Terms.
        </p>

        <h2
          id="contact"
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          12. Contact Information
        </h2>
        <p
          className={`leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          If you have any questions about these Terms of Service, please contact
          us:
        </p>
        <ul
          className={`list-disc list-inside leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>Email: support@codrocket.com</li>
          <li>Phone: +212 656-588699 </li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
