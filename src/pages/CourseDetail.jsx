import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PlayCircle, FileText, Target, ArrowRight } from 'lucide-react';

const CourseDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Details & Recommendations</h1>
        
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto items-center lg:items-stretch">
          
          {/* Super Elite Course (Dark Card) */}
          <div className="bg-[#1a1c29] text-white rounded-3xl p-8 lg:p-10 flex-1 relative overflow-hidden shadow-xl w-full max-w-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="bg-[#2a2d3d] text-xs font-bold px-3 py-1 rounded inline-block mb-6 tracking-wide text-gray-300">
              PREMIUM PACKAGE
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Super Elite Course</h2>
            <p className="text-gray-400 mb-8 font-medium">1-on-1 interview mentorship.</p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                400+ Hrs Video
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Descriptive Checking
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Interview Guidance
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Printed Materials
              </div>
            </div>
            
            <div className="mt-auto flex justify-between items-end">
              <div>
                <p className="text-gray-500 line-through text-sm mb-1">₹24,999</p>
                <p className="text-3xl font-bold">₹14,999</p>
              </div>
              <button className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Elite Course (Light Card) */}
          <div className="bg-white text-gray-900 rounded-3xl p-8 lg:p-10 flex-1 shadow-lg border border-gray-100 flex flex-col w-full max-w-lg">
            <div className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded inline-block mb-6 tracking-wide self-start">
              CORE FOUNDATION
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Elite Course</h2>
            <p className="text-gray-500 mb-8 text-sm font-medium">Comprehensive coverage of Phase I and Phase II</p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                <PlayCircle className="w-5 h-5 text-blue-500 shrink-0" />
                Complete Phase 1 & 2 Video Course
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                Detailed PDF Notes
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                <Target className="w-5 h-5 text-blue-500 shrink-0" />
                25+ Full-Length Mock Tests
              </div>
            </div>
            
            <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-6">
              <p className="text-2xl font-bold">₹7,999</p>
              <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2 text-sm">
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
