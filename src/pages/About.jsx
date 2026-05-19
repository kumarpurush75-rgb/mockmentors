import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">About Us</h1>
        
        <div className="prose prose-slate max-w-none text-lg text-slate-700 leading-relaxed space-y-6">
          <p>
            <strong>Mock Mentor</strong> is a trusted mock test platform designed for aspirants preparing for regulatory, banking, and insurance exams. 
          </p>
          <p>
            This platform is built on a foundation of transparency, experience, and expert analysis, our platform provides highly exam-relevant mock tests through a thorough review of previous year questions.
          </p>
          <p>
            With fortnightly MCQs covering essential topics like PIB, RBI & SEBI circulars, schemes, and reports, we provide a one-stop solution for comprehensive preparation.
          </p>
          <p>
            Trusted by toppers, Mock Mentors empowers candidates with well-research content, fostering confidence and success throughout their preparation journey. our platform delivers quality, accuracy, and a structured approach to help aspirants stay ahead in their exam journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
