import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600 space-y-6">
          <p><strong>Welcome to Mock Mentor.</strong> Your privacy is important to us, and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or purchase our services.</p>
          <p>By using our services, you agree to the terms of this privacy policy.</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect different types of information depending on how you use our platform:</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">A. Personal Information (PII—Personal Identifiable Information)</h3>
          <p>We may collect the following personal data when you register or interact with our platform:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Name:</strong> Required for account creation and personalization.</li>
            <li><strong>Email Address:</strong> Used for login credentials, notifications, and communication.</li>
            <li><strong>Phone Number:</strong> Used for OTP verification and customer support.</li>
            <li><strong>Payment Information:</strong> Includes billing details, UPI, bank details, or card details (processed securely through third-party payment gateways).</li>
            <li><strong>Government-issued ID (if applicable):</strong> Required for identity verification in certain cases.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">B. Non-Personal Information</h3>
          <p>We also collect non-personal information, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device type.</li>
            <li><strong>Usage Data:</strong> Pages visited, mock tests attempted, time spent, and interaction history.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> To enhance user experience and track website behavior.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">A. Providing and Improving Our Services</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>To create and manage user accounts.</li>
            <li>To provide access to mock tests and track your performance.</li>
            <li>To process payments securely.</li>
            <li>To personalize the user experience and recommend relevant tests.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">B. Communication & Customer Support</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>To send transactional emails, OTPs, and important account notifications.</li>
            <li>To respond to customer support requests and queries.</li>
            <li>To send promotional offers, newsletters, and updates (users can opt-out).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">C. Security & Fraud Prevention</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To monitor suspicious activities and prevent fraud or unauthorized access.</li>
            <li>To ensure compliance with legal regulations and policies.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
          <p>We do not sell or trade your personal data. However, we may share information in the following circumstances:</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">A. With Service Providers</h3>
          <p>We work with trusted third-party vendors for payment processing, analytics, hosting, and customer support. These providers have access to your data only to perform their functions and are contractually obligated to protect your privacy.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">B. Legal Compliance</h3>
          <p>We may disclose your data if required by law, regulation, court order, or to protect our legal rights, prevent fraud, or ensure user safety.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Cookies & Tracking Technologies</h2>
          <p>We use cookies and similar tracking tools for:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Session management:</strong> Keeping users logged in.</li>
            <li><strong>Analytics & performance tracking:</strong> Understanding user behavior.</li>
          </ul>
          <p>Users can control cookies via browser settings. However, disabling cookies may impact the functionality of our platform.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Data Security Measures</h2>
          <p>We prioritize your data security by implementing:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>End-to-end encryption (E2EE):</strong> protecting sensitive transactions.</li>
            <li><strong>Secure Payment Gateways (PCI DSS Compliant):</strong> We never store full payment details.</li>
            <li><strong>Two-Factor Authentication (2FA):</strong> optional for additional security.</li>
            <li>Regular security audits and compliance checks.</li>
          </ul>
          <p>Despite our best efforts, no online platform is 100% secure. In case of a security breach, affected users will be notified immediately.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
          <p>As a user, you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>A. Right to Access & Portability:</strong> Users can request a copy of their stored data.</li>
            <li><strong>B. Right to Rectification:</strong> Users can update or correct their data via account settings or by contacting us.</li>
            <li><strong>C. Right to Deletion ("Right to be Forgotten"):</strong> Users can request account deletion and permanent removal of their data.</li>
            <li><strong>D. Right to Restrict Processing:</strong> Users can limit how their data is used in certain cases.</li>
            <li><strong>E. Right to Object (For Marketing Emails & Ads):</strong> Users can opt-out of marketing communications anytime.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <strong>mockmentorofficial@gmail.com</strong></p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Data Retention Policy</h2>
          <p>We retain personal data only for as long as necessary for the purposes outlined in this privacy policy:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Account Data:</strong> Retained until you delete your account.</li>
            <li><strong>Payment Data:</strong> Retained for tax and legal compliance (as required by financial regulations).</li>
            <li><strong>Mock Test Performance Data:</strong> Retained for analytics and user convenience.</li>
          </ul>
          <p>Once data is no longer needed, we securely delete or anonymize it.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
          <p>If you access Mock Mentor from outside India, your data may be processed and stored on servers within India or other jurisdictions. We ensure compliance with international privacy laws when transferring data across borders.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. Third-Party Links & Services</h2>
          <p>Our platform may contain links to third-party websites (e.g., payment gateways, external resources). We are not responsible for their privacy practices. Users should review the respective privacy policies before sharing their data.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The latest version will always be available on our website. If there are significant changes, we will notify users via email or app notifications.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">11. Contact Us</h2>
          <p>For any privacy-related concerns, data access requests, or complaints, contact us:</p>
          <p>📧 Email: <strong>mockmentorofficial@gmail.com</strong></p>

          <h2 className="text-xl font-bold mt-8 mb-4">Compliance with Laws</h2>
          <p>IT Act 2000 & Data Protection Bill – India</p>
          
          <p className="mt-8 italic text-slate-500">By using Mock Mentor, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
