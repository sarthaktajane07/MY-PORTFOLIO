import React from 'react';
import { Github, Star, ArrowUpRight, Code2 } from 'lucide-react';

export const GithubSection = () => {
  const repos = [
    {
      name: "Alforge",
      desc: "Production AI Knowledge Platform featuring RAG, semantic search, and streaming LLM responses.",
      tech: "Python • Next.js • Qdrant",
      stars: 15
    },
    {
      name: "Coinzilla-clone",
      desc: "Cryptocurrency analytics platform with interactive charting & price feeds.",
      tech: "React • JavaScript",
      stars: 12
    },
    {
      name: "DineFlow",
      desc: "Role-based restaurant management system built on the MERN stack.",
      tech: "MongoDB • Express • React • Node",
      stars: 8
    }
  ];

  return (
    <section id="github" className="py-20 border-t border-[#DCE2E8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4 animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20">
              Building in Public
            </span>
            <h2 className="text-3xl font-bold text-[#12181F]">Open Source & Code</h2>
            <p className="text-base font-semibold text-[#0C8C7E]">
              "I don't just learn technologies. I build with them."
            </p>
            <p className="text-sm text-[#5B6573] leading-relaxed">
              I commit code consistently, practice version control best practices, and maintain documented repositories on GitHub.
            </p>
            
            <a 
              href="https://github.com/sarthaktajane07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#12181F] text-white hover:bg-black transition-colors font-medium text-sm gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 space-y-4 animate-slide-up animation-delay-100">
            {repos.map((repo) => (
              <div key={repo.name} className="bg-white border border-[#DCE2E8] rounded-xl p-5 shadow-sm hover:border-[#0C8C7E]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#0C8C7E]" />
                    <h3 className="text-sm font-bold text-[#12181F]">{repo.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#5B6573]">
                    <Star className="w-3.5 h-3.5 text-[#B8650F]" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
                <p className="text-xs text-[#5B6573] mb-3 leading-relaxed">{repo.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#0C8C7E]">{repo.tech}</span>
                  <a 
                    href={`https://github.com/sarthaktajane07/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B6573] hover:text-[#12181F] font-medium inline-flex items-center gap-0.5"
                  >
                    Repository <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
