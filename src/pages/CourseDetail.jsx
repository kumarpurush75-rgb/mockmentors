import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PlayCircle, FileText, Target, ArrowRight } from 'lucide-react';

const CourseDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center tracking-tight">Compare Our Flagship Programs</h1>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto items-center lg:items-stretch">
          
          {/* Elite Course Image Card */}
          <div className="flex-1 flex flex-col group w-full max-w-lg">
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-200 bg-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] relative flex-grow">
              <img src="/elite_compare.png" alt="Elite Course Comparison" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>
            <div className="mt-6 flex justify-center">
              <a href="https://www.mockmentor.in/learn/RBI-Grade-B-2026-Full-Package" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden w-full max-w-sm rounded-xl p-[1px] group shadow-md hover:shadow-lg transition-shadow">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-white group-hover:bg-transparent transition-colors duration-300 rounded-xl px-8 py-4 flex items-center justify-center gap-2">
                  <span className="font-extrabold text-blue-900 group-hover:text-white transition-colors duration-300 text-lg">ENROLL NOW - ELITE</span>
                  <ArrowRight className="w-5 h-5 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>

          {/* Super Elite Course Image Card */}
          <div className="flex-1 flex flex-col group w-full max-w-lg">
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-amber-200 bg-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(251,_191,_36,_0.15)] relative flex-grow">
              <img src="/super_elite_compare.jp" alt="Super Elite Course Comparison" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              
              {/* Premium Badge */}
              <div className="absolute -top-1 -right-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 blur-[8px] opacity-80 rounded-full"></div>
                  <div className="bg-gradient-to-br from-amber-300 to-yellow-600 text-white font-black text-[10px] uppercase tracking-widest py-1.5 px-4 rounded-bl-xl shadow-lg relative border border-yellow-300/50">
                    Most Recommended
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <a href="https://www.mockmentor.in/learn/RBI-Grade-B-2026-Super-elite" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden w-full max-w-sm rounded-xl p-[1px] group shadow-md hover:shadow-lg transition-shadow">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 transition-colors duration-300 rounded-xl px-8 py-4 flex items-center justify-center gap-2 shadow-inner border border-yellow-400/50">
                  <span className="font-extrabold text-white text-lg drop-shadow-sm">ENROLL NOW - SUPER ELITE</span>
                  <ArrowRight className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
