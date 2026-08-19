import React from 'react';
import { FileText, Download, Brain, Code, Terminal, Cpu } from 'lucide-react';

export const ResumeSection = () => {
  return (
    <section id="resume-overview" className="py-20 border-t border-[#DCE2E8]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4 animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C8C7E] bg-[#0C8C7E]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20">
              Professional Profile
            </span>
            <h2 className="text-3xl font-bold text-[#12181F]">Resume & Qualifications</h2>
            <p className="text-base font-semibold text-[#0C8C7E]">
              "Bridging the gap between algorithms and applied AI."
            </p>
            <p className="text-sm text-[#5B6573] leading-relaxed">
              Aspiring Full-Stack Developer and AI Engineer. I combine a strong foundation in Data Structures and Algorithms with applied experience building RAG pipelines, REST APIs, and responsive frontends.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="/resume" 
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#12181F] text-white hover:bg-black transition-colors font-medium text-sm gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </a>
              <a 
                href="/resume" 
                download
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white border border-[#DCE2E8] text-[#12181F] hover:bg-gray-50 transition-colors font-medium text-sm gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#0C8C7E]" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 animate-slide-up animation-delay-100">
            <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm hover:border-[#0C8C7E]/40 transition-colors">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#0C8C7E]/10 flex items-center justify-center text-[#0C8C7E]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12181F]">Sarthak Sunil Tajane</h3>
                  <p className="text-xs text-[#5B6573]">B.Tech IT • ITM Skills University (2024-2028)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#0C8C7E]" />
                    <span className="text-sm font-bold text-[#12181F]">Full-Stack Engineering</span>
                  </div>
                  <p className="text-xs text-[#5B6573] leading-relaxed">
                    React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL. Designing robust APIs and responsive UIs.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#0C8C7E]" />
                    <span className="text-sm font-bold text-[#12181F]">AI & MLOps</span>
                  </div>
                  <p className="text-xs text-[#5B6573] leading-relaxed">
                    Python, FastAPI, RAG Pipelines, Vector DBs (Qdrant), LLM APIs, and Docker containerization.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#0C8C7E]" />
                    <span className="text-sm font-bold text-[#12181F]">Core Fundamentals</span>
                  </div>
                  <p className="text-xs text-[#5B6573] leading-relaxed">
                    Strong grasp of Data Structures, Algorithms (C++, Java), Operating Systems, and DBMS.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#0C8C7E]" />
                    <span className="text-sm font-bold text-[#12181F]">Architecture & DevOps</span>
                  </div>
                  <p className="text-xs text-[#5B6573] leading-relaxed">
                    Git version control, CI/CD pipelines, Docker deployments, and modular system design.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
