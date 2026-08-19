import React from 'react';
import { Award } from 'lucide-react';

export const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Git & GitHub Workshop",
      subtitle: "3-Day Technical Workshop",
      description: "Practical training in version control, branch management, pull requests, and Git rebase workflows."
    },
    {
      title: "Data Structures & Algorithms",
      subtitle: "5-Workshop Series",
      description: "Intensive problem-solving series covering arrays, linked lists, trees, graphs, dynamic programming, and complexity analysis."
    },
    {
      title: "Figma / UI UX Workshop",
      subtitle: "4-Day Workshop",
      description: "Hands-on UI wireframing, component design systems, prototyping, and developer handoff best practices."
    }
  ];

  return (
    <section id="workshops" className="py-20 border-t border-[#DCE2E8] bg-[#F4F6F9]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 mb-3">
            Continuous Development
          </span>
          <h2 className="text-3xl font-bold text-[#12181F]">Workshops & Training</h2>
          <div className="w-12 h-1 bg-[#0C8C7E] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workshops.map((ws, i) => (
            <div 
              key={ws.title} 
              className={`bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm hover:border-[#0C8C7E]/40 transition-all duration-300 animate-slide-up animation-delay-${(i + 1) * 100}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#0C8C7E]/10 flex items-center justify-center text-[#0C8C7E] mb-4 border border-[#0C8C7E]/20">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#12181F] mb-1">{ws.title}</h3>
              <p className="text-xs font-semibold text-[#0C8C7E] mb-3">{ws.subtitle}</p>
              <p className="text-xs text-[#5B6573] leading-relaxed">
                {ws.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
