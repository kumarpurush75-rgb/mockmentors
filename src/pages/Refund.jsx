import React, { useEffect } from 'react';

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Refund Policy</h1>
        
        <div className="prose prose-slate max-w-none text-lg text-slate-700 leading-relaxed space-y-6">
          <p>
            At Mock Mentor, we are committed to providing high-quality mock tests and study materials. Due to the nature of digital content, all purchases are non-refundable, except in specific cases.
          </p>
          <p>
            Refunds will only be considered if you experience technical issues preventing access, have been charged multiple times, or if a purchase was made fraudulently without your consent. If Mock Mentor discontinues a paid service, a pro-rated refund or equivalent credit may be issued.
          </p>
          <p>
            Refunds will not be granted for change of mind, incomplete test attempts, exam failure, internet issues, or Terms of Service violations. Subscription cancellations do not qualify for refunds, but access will continue until the billing cycle ends.
          </p>
          <p>
            To request a refund, email <strong>mockmentorofficial@gmail.com</strong> within 7 days of purchase with your order ID, registered email, and issue details. Requests will be reviewed within 5-7 business days, and if approved, refunds will be processed to the original payment method within 7-10 business days.
          </p>
          <p>
            Mock Mentor reserves the right to update this policy at any time. By making a purchase, you agree to these terms. For any queries, contact us at <strong>mockmentorofficial@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
