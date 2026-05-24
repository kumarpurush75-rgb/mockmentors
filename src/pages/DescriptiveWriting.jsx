import React, { useState, useEffect } from 'react';
import { CheckCircle2, Download, BookOpen, Star, FileText, CheckSquare, Settings, Clock, FileCheck, Timer, BookText, Newspaper, PlayCircle } from 'lucide-react';

const DescriptiveWriting = () => {
  const [activeTab, setActiveTab] = useState('course-details');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'course-details', label: 'Course Details', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'toppers', label: 'Toppers Answers', icon: <Star className="w-4 h-4" /> },
    { id: 'free-material', label: 'Free Material', icon: <FileText className="w-4 h-4" /> },
  ];

  const strategyData = [
    { name: 'Kumari Deeksha', rank: 2, img: '/deeksha_portrait_1779098675776.jpeg', notesUrl: 'https://drive.google.com/file/d/1YkRNSCITsYTajbLU9VS66zzA--oRDrlz/view?usp=drive_link', isDescriptive: true, badges: ['FM Desc: 39 (Highest)', 'Interview: 58 (2nd Highest)'] },
    { name: 'Saurabh Sharma', rank: 31, img: '/saurabh_portrait_1779098656404.jpeg', notesUrl: 'https://drive.google.com/file/d/1Uyn-Po2biy-ehlBHqakZB1PVdVAOlYaO/view?usp=drive_link', isDescriptive: true, badges: ['ESI Obj: 29.25 (2nd Highest)'] },
    { name: 'Himanshi Tulsiani', rank: 15, img: '/himanshi_portrait_1779098692272.png', notesUrl: 'https://drive.google.com/file/d/1XN91bhHP2XuZeOSsKTFX9uGjCNwgCy6P/view?usp=drive_link', isDescriptive: true, badges: ['FM Obj: 44 (Top Score)'] },
    { name: 'Hari Jagan', rank: 53, img: '/hari_jegan_portrait_1779098790015.jpeg', notesUrl: 'https://drive.google.com/drive/folders/14U19auYxO3eNdP222zaHKYudBOeW41R4?usp=drive_link', isDescriptive: false },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-black text-[#1c4897] mb-6 tracking-tight leading-tight">
            Master RBI Phase 2 <span className="text-emerald-600">Descriptive Writing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed font-medium">
            Descriptive writing plays a decisive role in RBI Phase 2, carrying a total weightage of 200 marks. Excelling in this stage requires more than knowledge, it demands the right strategy, structured practice, personalized feedback, and expert mentorship.
          </p>

          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            At MockMentor, we specialize in building high-scoring answer-writing skills through a result-driven approach. Our outcomes speak for themselves. In 2025, our students secured some of the highest descriptive scores in the country:
          </p>

          {/* Success Stories Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500 border-t border-r border-b border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
               <img src="/deeksha_portrait_1779098675776.jpeg" alt="Kumari Deeksha" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-100 shrink-0" />
               <div>
                  <h4 className="font-bold text-lg text-slate-900">Kumari Deeksha</h4>
                  <p className="text-sm text-slate-600 leading-snug mt-1">
                    Secured the <strong className="text-emerald-700">highest marks in Finance & Management Descriptive — 39 marks</strong>.
                  </p>
               </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#1c4897] border-t border-r border-b border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
               <img src="/hari_vishal_portrait_1779098769758.jpeg" alt="Hari Vishal" className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 shrink-0" />
               <div>
                  <h4 className="font-bold text-lg text-slate-900">Hari Vishal</h4>
                  <p className="text-sm text-slate-600 leading-snug mt-1">
                    Scored <strong className="text-[#1c4897]">36 marks in ESI Descriptive</strong>, the highest in the subject, and also emerged with the <strong className="text-[#1c4897]">highest overall Phase 2 score</strong>.
                  </p>
               </div>
            </div>
          </div>

          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            MockMentor proudly produced top performers in both FM and ESI descriptive sections, reinforcing our reputation for delivering high-quality mentorship and proven results.
          </p>

          <p className="text-lg font-bold text-slate-800 mb-10 bg-slate-100 py-3 px-6 rounded-lg inline-block w-full text-center">
            We welcome you to the <span className="text-[#1c4897]">MockMentor RBI Writing Program</span> designed to help you write with clarity, structure, precision, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start">
            <a 
              href="https://www.mockmentor.in/learn/categories/descriptive-writing?categoryCustomName=descriptive-writing&type=100&show=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#488890] hover:bg-[#3a6d73] text-white px-10 py-4 rounded-xl font-bold shadow-lg ring-4 ring-[#488890]/30 ring-offset-2 hover:ring-[#488890]/50 transform hover:-translate-y-1 transition-all duration-300 text-center inline-flex items-center justify-center"
            >
              Explore Descriptive Program
            </a>
          </div>

        </div>
      </section>

      {/* 2. Detailed Sections (Tabs) */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          
          {/* Tabs Header */}
          <div className="flex flex-wrap border-b-2 border-slate-200 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-bold transition-all duration-300 relative ${
                  activeTab === tab.id 
                    ? 'text-blue-700 bg-blue-50/50' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className={`${activeTab === tab.id ? 'scale-110' : ''} transition-transform duration-300`}>
                  {tab.icon}
                </div>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-blue-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[400px]">
            
            {activeTab === 'course-details' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Course Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <Clock className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Fast Evaluation</h4>
                      <p className="text-sm text-slate-600 font-medium">Detailed evaluation returned to you within 48 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <FileCheck className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Step Marking Evaluation</h4>
                      <p className="text-sm text-slate-600 font-medium mb-2">Exam relevant step-by-step marking process.</p>
                      <a href="https://drive.google.com/file/d/1orFStnxmy-6saObe1N9xbOhZgMzQWJRP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">
                        <Download className="w-3 h-3" /> Sample PDF
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <Timer className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Exam-Like Interface</h4>
                      <p className="text-sm text-slate-600 font-medium">Timer running & word limit displayed. Auto submits once limit hits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                    <BookText className="w-8 h-8 text-purple-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Topic-Wise Static Questions</h4>
                      <p className="text-sm text-slate-600 font-medium">Standard questions on ESI, Finance, and Management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow md:col-span-2">
                    <Newspaper className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Comprehensive Current Affairs</h4>
                      <p className="text-sm text-slate-600 font-medium">Coverage of schemes, reports, Union Budget, economic survey, circulars, etc.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8 pt-6 border-t border-slate-100">
                  <a href="https://www.mockmentor.in/learn/home/RBI-Grade-B-2026-Super-elite/Descriptive/section/713871/lesson/4546560" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#488890] hover:bg-[#3a6d73] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-colors">
                    Take a Free Trial Attempt
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'toppers' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Answers by Selected Candidates</h3>
                <p className="text-slate-500 mb-10 font-medium">Download and analyze how RBI Grade B Toppers structure their answers.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {strategyData.map((topper, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#1c4897]">
                      <div className="relative shrink-0">
                        <img src={topper.img} alt={topper.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#1c4897]" />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                          AIR {topper.rank}
                        </div>
                      </div>
                      <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left mt-2 sm:mt-0">
                        <div className="flex flex-col sm:flex-row items-center gap-2 mb-1 flex-wrap justify-center sm:justify-start">
                          <h4 className="font-bold text-xl text-gray-900">{topper.name}</h4>
                          {topper.highestPhase2 && (
                            <span className="bg-emerald-100 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200">
                              Highest in Phase 2
                            </span>
                          )}
                          {topper.badges && topper.badges.map((badge, idx) => (
                            <span key={idx} className="bg-emerald-100 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200">
                              {badge}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 font-medium mb-4">
                          {topper.isDescriptive ? 'Evaluated Descriptive Answers' : 'Detailed Strategy & Preparation Notes'}
                        </p>
                        <a href={topper.notesUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full sm:w-auto bg-[#e6f4f1] text-[#0d7d6b] hover:bg-[#0d7d6b] hover:text-white border border-[#b2e2d9] hover:border-[#0d7d6b] px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 group">
                          <Download className="w-4 h-4 text-[#0d7d6b] group-hover:text-white transition-colors" /> {topper.isDescriptive ? 'View Descriptive Answers' : 'View Strategy Notes'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'free-material' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Study Material</h3>
                 <p className="text-slate-500 mb-10 font-medium">Access ultimate guides, video lectures, and perfect conclusion templates.</p>
                 
                 <div className="grid grid-cols-1 gap-6">
                   <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                         <PlayCircle className="w-6 h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-slate-900">How to Master Descriptive Writing</h4>
                         <p className="text-sm font-medium text-slate-600">The Ultimate Guide (Video Lecture)</p>
                       </div>
                     </div>
                     <a href="https://drive.google.com/file/d/1Ku0k_hipcS3AgtXghPvprHY5aEJCcmeC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-white bg-red-600 px-6 py-3 rounded-lg shadow-sm hover:bg-red-700 transition-colors">
                       <PlayCircle className="w-4 h-4" /> Watch Video
                     </a>
                   </div>

                   <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                         <FileText className="w-6 h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-slate-900">Descriptive Writing Ultimate Guide</h4>
                         <p className="text-sm font-medium text-slate-600">Comprehensive PDF guide</p>
                       </div>
                     </div>
                     <a href="https://drive.google.com/file/d/1Iygn_d4w9ZNCq04Hr4-7HGqwQFypvZzU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-slate-700 bg-white border border-slate-300 px-6 py-3 rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                       <Download className="w-4 h-4" /> Download PDF
                     </a>
                   </div>

                   <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                         <FileCheck className="w-6 h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-slate-900">How to Write a Perfect Conclusion</h4>
                         <p className="text-sm font-medium text-slate-600">Master the ending of your answers</p>
                       </div>
                     </div>
                     <a href="https://drive.google.com/file/d/1-Ulm615gQKvSxvN149SwH8bz9xND2y2K/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-2 text-sm font-bold text-slate-700 bg-white border border-slate-300 px-6 py-3 rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
                       <Download className="w-4 h-4" /> Download PDF
                     </a>
                   </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default DescriptiveWriting;
