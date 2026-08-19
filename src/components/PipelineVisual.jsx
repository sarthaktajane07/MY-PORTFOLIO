import React, { useState } from 'react';
import { Lightbulb, Layout, Code2, TestTube2, Rocket, CheckCircle2 } from 'lucide-react';

export const PipelineVisual = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const steps = [
    { title: 'Idea', icon: Lightbulb, desc: 'Requirements & Spec' },
    { title: 'Design', icon: Layout, desc: 'Figma & System Arch' },
    { title: 'Development', icon: Code2, desc: 'Clean Code & APIs' },
    { title: 'Testing', icon: TestTube2, desc: 'QA & Edge Cases' },
    { title: 'Deployment', icon: Rocket, desc: 'CI/CD & Vercel' },
    { title: 'Live', icon: CheckCircle2, desc: 'Production Ready' },
  ];

  return (
    <div className="w-full py-8 my-6 bg-card border border-border rounded-xl shadow-sm px-6 relative overflow-hidden transition-colors duration-300">
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0C8C7E] dark:text-[#14B8A6] bg-[#0C8C7E]/10 dark:bg-[#14B8A6]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 dark:border-[#14B8A6]/20">
          Software Development Lifecycle
        </span>
        <h3 className="text-lg font-bold text-foreground mt-2">Engineering Pipeline</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
        {/* Animated Traveling Line for Desktop */}
        <div className="hidden md:block absolute top-[24px] left-[8%] right-[8%] h-[2px] bg-border z-0 overflow-hidden">
          <div className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#0C8C7E] dark:via-[#14B8A6] to-transparent animate-pipeline-travel" />
        </div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;
          const isHighlighted = hoveredIdx !== null && Math.abs(hoveredIdx - idx) <= 1;

          return (
            <div 
              key={step.title} 
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex flex-col items-center text-center relative z-10 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 transform group-hover:-translate-y-1.5 ${
                isLast 
                  ? 'bg-[#0C8C7E] dark:bg-[#14B8A6] text-white shadow-sm scale-105' 
                  : isHighlighted
                  ? 'bg-[#0C8C7E]/20 dark:bg-[#14B8A6]/20 text-[#0C8C7E] dark:text-[#14B8A6] border border-[#0C8C7E]/50 scale-105 shadow-sm'
                  : 'bg-secondary text-foreground border border-border group-hover:border-[#0C8C7E]/50 group-hover:bg-card'
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              <span className={`text-xs font-bold uppercase tracking-wide transition-colors ${
                isLast || isHighlighted ? 'text-[#0C8C7E] dark:text-[#14B8A6]' : 'text-foreground'
              }`}>
                {step.title}
              </span>
              <span className="text-[11px] text-muted-foreground mt-1">{step.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
