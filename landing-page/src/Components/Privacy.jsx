import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 prose prose-lg dark:prose-invert">
      <div className="flex items-start justify-between gap-6">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      </div>

      <h2 id="info-collected" className="font-bold text-black mb-6">
        1. Information we collect
      </h2>
      <p>We collect information in the following categories:</p>
      <ul>
        <li>
          <strong>Information you provide</strong>: Name, email address, phone
          number, billing information, company name, and any other information
          you submit when contacting support, creating an account, subscribing
          to a newsletter, or using our Services.
        </li>
        <li>
          <strong>Usage data</strong>: Information about how you use our website
          and Services, including pages visited, features used, referral
          sources, time of access, and error logs.
        </li>
        <li>
          <strong>Cookies and tracking</strong>: We use cookies and similar
          technologies (e.g., local storage, web beacons) to recognize your
          device, remember preferences, and analyze usage. See the Cookies
          section below for details.
        </li>
        <li>
          <strong>Third-party data</strong>: We may receive information about
          you from third parties such as payment processors (e.g., Stripe),
          analytics providers (e.g., Google Analytics), or social networks if
          you connect accounts.
        </li>
      </ul>

      <h2 id="how-use" className="font-bold text-black mt-2 mb-6">
        2. How we use your information
      </h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, maintain and improve the Services.</li>
        <li>Process transactions and send billing receipts.</li>
        <li>
          Communicate with you, including sending updates, security alerts, and
          marketing (with your consent where required).
        </li>
        <li>Personalize your experience and provide customer support.</li>
        <li>Detect, investigate and prevent fraudulent or illegal activity.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 id="legal-bases" className="font-bold text-black mt-2 mb-6">
        3. Legal bases for processing & privacy laws
      </h2>
      <p>
        We process personal data based on various legal grounds, depending on
        your location and the context. We comply with applicable privacy laws,
        including but not limited to:
      </p>
      <ul>
        <li>
          <strong>GDPR (General Data Protection Regulation)</strong>: For users
          in the European Economic Area (EEA). We rely on grounds such as
          consent, contract performance, legitimate interests, and legal
          obligations. You have rights like access, rectification, erasure, and
          portability.
        </li>
        <li>
          <strong>CCPA (California Consumer Privacy Act)</strong>: For
          California residents. We collect categories of personal information as
          described above. You have rights to know what data we collect, delete
          it, opt-out of sales, and non-discrimination.
        </li>
        <li>
          <strong>
            PIPEDA (Personal Information Protection and Electronic Documents
            Act)
          </strong>
          : For Canadian users. We ensure accountability, identifying purposes,
          consent, limiting collection/use, accuracy, safeguards, openness,
          individual access, and challenging compliance.
        </li>
        <li>
          <strong>Other laws</strong>: We also consider laws like the UK GDPR,
          LGPD (Brazil), PDPA (Singapore), and others where applicable. If you
          are subject to a specific law, please contact us for details.
        </li>
      </ul>
      <p>
        If you are located in the EEA, we rely on one or more legal bases to
        process your personal data: your consent, performance of a contract,
        legitimate interests (e.g., improving and securing our Services), or
        compliance with legal obligations.
      </p>

      <h2 id="cookies" className="font-bold text-black mt-2 mb-6">
        4. Cookies and similar technologies
      </h2>
      <p>
        We use cookies and similar technologies to collect information to
        provide better experiences and to analyze site traffic. Cookies can be
        "session" (expire when you close your browser) or "persistent" (stay on
        your device until they expire or you delete them).
      </p>
      <p>
        You can manage cookie preferences via your browser settings. Note that
        disabling certain cookies may affect the functionality of the Services.
      </p>

      <h2 id="sharing" className="font-bold text-black mt-2 mb-6">
        5. Sharing and disclosure
      </h2>
      <p>We may share personal information with:</p>
      <ul>
        <li>
          Service providers and partners that perform services on our behalf
          (e.g., payment processors, hosting providers, analytics).
        </li>
        <li>Business partners for integrations and joint offerings.</li>
        <li>
          Law enforcement, regulators, or other parties when required by law or
          to protect our rights.
        </li>
        <li>
          In connection with a merger, acquisition, or asset sale — in such case
          we will notify affected users.
        </li>
      </ul>

      <h2 id="third-party" className="font-bold text-black mb-6">
        6. Third-party services and links
      </h2>
      <p>
        Our Services may contain links to third-party websites, and we use
        third-party services (e.g., analytics, advertising, payment processors).
        We are not responsible for the privacy practices of those third parties.
        Please review their privacy policies.
      </p>

      <h2 id="security" className="font-bold text-black mb-6">
        7. Data security
      </h2>
      <p>
        We implement reasonable technical and organizational measures designed
        to protect personal information. However, no system is completely secure
        — if you suspect a security breach, contact us immediately at
        support@codrocket.com.
      </p>

      <h2 id="retention" className="font-bold text-black mb-6">
        8. Data retention
      </h2>
      <p>
        We retain personal information as long as necessary to provide the
        Services, comply with legal obligations, resolve disputes, and enforce
        our agreements. Specific retention periods depend on the type of
        information and the purposes for which it was processed.
      </p>

      <h2 id="international" className="font-bold text-black mb-6">
        9. International transfers
      </h2>
      <p>
        COD Rocket is based in [Country]. If you are located outside of that
        country, your personal data may be transferred to, stored, and processed
        in countries with different data protection laws. We take steps to
        ensure appropriate safeguards are in place (e.g., Standard Contractual
        Clauses) where required.
      </p>

      <h2 id="children" className="font-bold text-black mb-6">
        10. Children
      </h2>
      <p>
        Our Services are not directed to children under 16. We do not knowingly
        collect personal information from children under 16. If you believe we
        have collected such data, contact us and we will take steps to remove
        it.
      </p>

      <h2 id="rights" className="font-bold text-black mb-6">
        11. Your rights
      </h2>
      <p>
        Depending on your jurisdiction, you may have rights regarding your
        personal data, such as: access, correction, deletion, restriction of
        processing, objection, and data portability. To exercise these rights,
        contact us at support@codrocket.com. We may need to verify your identity
        before acting on requests.
      </p>
      <p>
        Under GDPR, you have the right to lodge a complaint with a supervisory
        authority. Under CCPA, you can request to know, delete, or opt-out.
      </p>

      <h2 id="contact" className="font-bold text-black mb-6">
        12. How to contact us
      </h2>
      <p>
        For privacy inquiries, please contact: <br />
        COD Rocket — support@codrocket.com
      </p>

      <h2 id="changes" className="font-bold text-black mb-6">
        13. Changes to this policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        post the updated policy on this page with a new "Last updated" date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        This Privacy Policy is provided for informational purposes and does not
        constitute legal advice. If you need a legally compliant policy for your
        jurisdiction, consult a lawyer.
      </p>
    </div>
  );
};

export default Privacy;
