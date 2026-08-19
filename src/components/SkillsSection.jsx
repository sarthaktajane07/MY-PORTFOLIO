import React from 'react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma"]
    },
    {
      title: "Currently Exploring",
      skills: ["Docker", "Kubernetes", "Terraform", "Cloud"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-[#DCE2E8] bg-[#F4F6F9]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 mb-3">
            &lt;technical_stack /&gt;
          </span>
          <h2 className="text-3xl font-bold text-[#12181F]">Technical Skills</h2>
          <div className="w-12 h-1 bg-[#0C8C7E] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const isExploring = category.title === "Currently Exploring";
            return (
              <div 
                key={category.title} 
                className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  isExploring ? 'border-[#B8650F]/40 bg-white' : 'border-[#DCE2E8] hover:border-[#0C8C7E]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#12181F] flex items-center gap-1.5">
                    <span>{category.title}</span>
                  </h3>
                  {isExploring && (
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#B8650F]/10 text-[#B8650F] border border-[#B8650F]/20 animate-pulse-subtle">
                      Learning
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-3 py-1.5 text-sm font-mono font-medium rounded-md border transition-all duration-200 hover:scale-105 cursor-default ${
                        isExploring 
                          ? 'bg-[#B8650F]/5 text-[#B8650F] border-[#B8650F]/20 hover:border-[#B8650F]/50'
                          : 'bg-[#F4F6F9] text-[#12181F] border-[#DCE2E8] hover:border-[#0C8C7E]/40 hover:text-[#0C8C7E] hover:bg-white'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
