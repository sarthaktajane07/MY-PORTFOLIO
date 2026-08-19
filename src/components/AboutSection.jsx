import React from 'react';
import { UserCheck, Code, Database, Brain } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    { title: 'Software Development', icon: Code, desc: 'Building clean, maintainable web applications and backend APIs.' },
    { title: 'DSA & Logic', icon: Brain, desc: 'Strong foundation in Data Structures, Algorithms, and problem solving.' },
    { title: 'Databases & Web Tech', icon: Database, desc: 'Designing normalized schemas and responsive modern interfaces.' },
  ];

  return (
    <section id="about" className="py-20 border-t border-[#DCE2E8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 mb-3">
              Background & Focus
            </span>
            <h2 className="text-3xl font-bold text-[#12181F]">About Me</h2>
            <div className="w-12 h-1 bg-[#0C8C7E] rounded-full mt-3"></div>
          </div>

          <div className="bg-white border border-[#DCE2E8] rounded-xl p-8 shadow-sm space-y-6 text-[#5B6573] leading-relaxed animate-slide-up">
            <p className="text-lg text-[#12181F] font-medium">
              I am a Computer Science student at ITM Skill University focused on software engineering principles, algorithm design, and modern full-stack web development.
            </p>
            <p>
              My technical approach centers on writing clean, scalable code and understanding full-stack architectures from database modeling to user interface delivery. I actively practice Data Structures & Algorithms, explore cloud tooling, and build practical applications that address real-world software requirements.
            </p>
            <p>
              I am currently seeking Software Development Internships and entry-level engineering roles where I can contribute to production codebases, collaborate with experienced engineers, and solve meaningful technical problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm hover:border-[#0C8C7E]/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#0C8C7E]/10 flex items-center justify-center text-[#0C8C7E] mb-4 border border-[#0C8C7E]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#12181F] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5B6573]">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
