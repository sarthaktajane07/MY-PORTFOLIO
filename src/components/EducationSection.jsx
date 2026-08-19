import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export const EducationSection = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Web Development',
    'Computer Networks',
    'Operating Systems',
  ];

  return (
    <section id="education" className="py-20 border-t border-[#DCE2E8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 mb-3">
            Academic Foundation
          </span>
          <h2 className="text-3xl font-bold text-[#12181F]">Education</h2>
          <div className="w-12 h-1 bg-[#0C8C7E] rounded-full mt-3"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#DCE2E8] rounded-xl p-8 shadow-sm animate-slide-up">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#DCE2E8]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0C8C7E]/10 flex items-center justify-center text-[#0C8C7E] border border-[#0C8C7E]/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#12181F]">B.Tech — Computer Science & Engineering</h3>
                  <p className="text-sm font-semibold text-[#0C8C7E] mt-0.5">ITM Skill University, Navi Mumbai</p>
                </div>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F4F6F9] border border-[#DCE2E8] text-xs font-semibold text-[#5B6573] self-start md:self-auto">
                Expected 2027
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#12181F]">
                <BookOpen className="w-4 h-4 text-[#0C8C7E]" />
                <span>Relevant Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span 
                    key={course} 
                    className="px-3 py-1.5 bg-[#F4F6F9] text-[#12181F] text-xs font-medium rounded-md border border-[#DCE2E8]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
