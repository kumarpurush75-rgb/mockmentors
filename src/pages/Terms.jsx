import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600 space-y-6">
          <p><strong>Welcome to Mock Mentor!</strong> These Terms of Service ("Terms") govern your access and use of our platform, including our website, mobile application, and services. By using Mock Mentor, you agree to comply with these Terms.</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>"Mock Mentor"</strong> refers to the company operating this platform.</li>
            <li><strong>"User" ("you," "your")</strong> refers to anyone accessing or using our services.</li>
            <li><strong>"Services"</strong> include mock tests, study materials, and other resources provided by Mock Mentor.</li>
            <li><strong>"Platform"</strong> refers to our website, mobile app, and related digital services.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. Eligibility</h2>
          <p>By using Mock Mentor, you confirm that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are at least 18 years old, or if under 18, using it with parental/guardian consent.</li>
            <li>You provide accurate, complete, and updated information during registration.</li>
            <li>You are not restricted by any applicable laws from using our services.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Account Registration & Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must register an account to access certain services.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Any activity on your account is your responsibility. Notify us immediately in case of unauthorized access.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Use of Services</h2>
          <p>By using Mock Mentor, you agree:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To use our services only for personal and educational purposes.</li>
            <li>To respect copyrights and intellectual property rights.</li>
            <li>To not engage in fraud, hacking, or illegal activities.</li>
            <li>To not share or sell purchased mock tests or account details with others.</li>
          </ul>
          <p className="mt-4 font-semibold">You must not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Attempt to reverse-engineer, copy, or distribute our content.</li>
            <li>Use automated bots to access our platform.</li>
            <li>Upload or share harmful, illegal, or offensive content.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Payments, Subscriptions & Refunds</h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">A. Payment and Pricing</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Certain services may require a one-time payment or subscription.</li>
            <li>Prices are subject to change. We will notify users of any changes before they apply.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">B. Refund Policy</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payments are non-refundable, except in cases of unauthorized transactions or technical issues preventing access.</li>
            <li>Refund requests must be raised within 7 days of purchase.</li>
            <li>If a test or course is discontinued, eligible users may receive a partial refund or equivalent credits.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">C. Trial & Promotional Offers</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free trials or discounts may be offered at our discretion.</li>
            <li>We reserve the right to modify or revoke offers at any time.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All mock tests, study materials, website content, and logos are owned by Mock Mentor.</li>
            <li>Users cannot copy, reproduce, modify, or distribute our content without permission.</li>
            <li>Any violation may lead to legal action or account termination.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">7. User-Generated Content</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>If you submit comments, feedback, or content, you grant us a non-exclusive, royalty-free license to use, modify, or distribute it.</li>
            <li>You are responsible for ensuring that your content does not infringe copyrights, trademarks, or privacy rights.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Termination & Account Suspension</h2>
          <p>We reserve the right to suspend or terminate accounts if users:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Violate these terms.</li>
            <li>Engage in fraudulent or unethical activities.</li>
            <li>Share or distribute paid content without authorization.</li>
          </ul>
          <p>Users may request account deletion by contacting us at <strong>mockmentorofficial@gmail.com</strong></p>

          <h2 className="text-xl font-bold mt-8 mb-4">10. Third-Party Links & Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mock Mentor may contain links to third-party websites (e.g., payment gateways, external study resources).</li>
            <li>We are not responsible for the content, security, or privacy policies of third-party sites.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">11. Changes to These Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We may update these Terms from time to time.</li>
            <li>Continued use after updates means you accept the revised Terms.</li>
            <li>If major changes occur, we will notify users via email or website announcements.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">12. Governing Law & Dispute Resolution</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>These Terms are governed by the laws of India.</li>
            <li>Any disputes will be resolved through negotiation first. If unresolved, disputes will be settled in the courts.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">13. Contact Information</h2>
          <p>For questions or concerns regarding these terms, contact us at:</p>
          <p>📧 Email: <strong>mockmentorofficial@gmail.com</strong></p>
          
          <p className="mt-8 italic text-slate-500">By using Mock Mentor, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
