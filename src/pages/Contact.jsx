import React, { useEffect } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Contact Us</h1>
        <p className="text-slate-600 mb-10 text-lg">You can contact us through following details. We're always here to help you with your preparation journey.</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">E-Mail ID</h3>
              <a href="mailto:mockmentorofficial@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors break-all">mockmentorofficial@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Student Support</h3>
              <a href="https://t.me/Mockmentor" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium transition-colors break-all">https://t.me/Mockmentor</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Helpline Number</h3>
              <a href="tel:+919431986819" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">+91 94319 86819</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
