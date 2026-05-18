import React, { useState } from 'react';
import { CheckCircle2, Download, BookOpen, Star, FileText, CheckSquare, Settings } from 'lucide-react';

const DescriptiveWriting = () => {
  const [activeTab, setActiveTab] = useState('toppers');

  const tabs = [
    { id: 'about', label: 'About the course', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'toppers', label: 'Toppers Answers', icon: <Star className="w-4 h-4" /> },
    { id: 'evaluation', label: 'Evaluation System', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice Material', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Visual Area */}
          <div className="flex-1 relative w-full h-[400px] bg-slate-50 border border-slate-100 rounded-lg p-6 shadow-inner hidden md:block overflow-hidden">
            <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Q. Impact of CBDC on Indian Economy</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Central Bank Digital Currency (CBDC) is a digital form of fiat currency. <span className="bg-yellow-100">While UPI is a payment interface, CBDC is money itself.</span>
              <br/><br/>
              The introduction of E-Rupee will have profound implications on the banking sector...
            </p>
            
            {/* Tooltip Simulation */}
            <div className="absolute top-24 left-1/4 bg-[#111827] text-white p-4 rounded-xl shadow-2xl max-w-[280px] text-sm z-10 border border-slate-700">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <p className="font-medium text-xs leading-relaxed">Good distinction between UPI and CBDC. Add points on 'anonymity feature' for value addition.</p>
              </div>
              <p className="text-[10px] text-slate-400 text-right">- Evaluated by Diksha (AIR 14)</p>
            </div>
          </div>

          {/* Right Text Area */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The Descriptive <br/>Writing Hub</h1>
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              Phase II is make-or-break. Our flagship evaluation system gives you line-by-line feedback from previous year toppers. We don't just score you; we tell you exactly how to write like an AIR 1.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Detailed feedback on Intro, Body & Conclusion.",
                "Vocabulary and structural corrections.",
                "Value addition points for every specific answer.",
                "Access to evaluated sheets of Selected Candidates."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#111827] hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
              Explore Descriptive Hub
            </button>
          </div>
        </div>
      </section>

      {/* 2. Detailed Sections (Tabs) */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          
          {/* Tabs Header */}
          <div className="flex flex-wrap border-b border-slate-200 mb-10 gap-2 md:gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-colors ${
                  activeTab === tab.id 
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-white' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[400px]">
            
            {activeTab === 'toppers' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Answers by Selected Candidates</h3>
                <p className="text-slate-500 mb-10 font-medium">Download and analyze how RBI Grade B Toppers structure their answers.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Topper 1 */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex items-center gap-6">
                    <img src="https://i.pravatar.cc/150?img=5" alt="Diksha" className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Diksha</h4>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-700 font-bold text-xs px-2 py-1 rounded">AIR 14</span>
                        <span className="text-sm font-medium text-slate-500">Score: 78/100</span>
                      </div>
                      <button className="flex items-center gap-2 text-sm font-bold text-slate-600 border border-slate-300 bg-white px-4 py-2 rounded shadow-sm hover:bg-slate-50 transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                    </div>
                  </div>
                  
                  {/* Topper 2 */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex items-center gap-6">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Saurav" className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">Saurav</h4>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-700 font-bold text-xs px-2 py-1 rounded">AIR 25</span>
                        <span className="text-sm font-medium text-slate-500">Score: 75/100</span>
                      </div>
                      <button className="flex items-center gap-2 text-sm font-bold text-slate-600 border border-slate-300 bg-white px-4 py-2 rounded shadow-sm hover:bg-slate-50 transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">About the course</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   This section will contain every detail like what we offer, the schedule of evaluations, and how you can enroll to get your answers checked by selected candidates.
                 </p>
              </div>
            )}

            {activeTab === 'evaluation' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Evaluation metrics</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   This section details how we evaluate sample answers, the rubrics used for grading, and how to improve your score over time.
                 </p>
              </div>
            )}

            {activeTab === 'practice' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Practice material</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">
                   Find questions, prompts, and mock tests here to practice your descriptive writing before submitting them for evaluation.
                 </p>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default DescriptiveWriting;
