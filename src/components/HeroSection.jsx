import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Download, Terminal, CheckCircle2, RotateCcw, FileCode, Braces } from 'lucide-react';
import { PipelineVisual } from './PipelineVisual';
import { CardTilt } from './CardTilt';

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [visibleCount, setVisibleCount] = useState(1);

  const terminalLines = [
    { text: "$ whoami", type: "command" },
    { text: "sarthak@developer:~$ ./portfolio --init", type: "command" },
    { text: "> Building practical web applications...", type: "output" },
    { text: "> Practicing DSA & System Architecture...", type: "output" },
    { text: "> Exploring Cloud & DevOps tooling...", type: "output" },
    { text: "✓ System ready for software engineering roles", type: "success" }
  ];

  const systemConfigCode = `// system.config.ts
export const config = {
  engineer: "Sarthak Tajane",
  status: "Open to Internships",
  architecture: "Full-Stack Web & APIs",
  coreLanguages: ["C++", "Java", "Python", "JS"],
  frontend: ["React", "Tailwind CSS"],
  backend: ["Node.js", "Express", "REST APIs"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Docker", "VS Code"],
};`;

  const skillsJsonCode = `{
  "developer": "Sarthak Tajane",
  "degree": "B.Tech CSE",
  "university": "ITM Skill University",
  "focus": [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Scalable Web Architecture"
  ]
}`;

  useEffect(() => {
    if (activeTab === 'terminal' && visibleCount < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, terminalLines.length, activeTab]);

  const handleResetTerminal = () => {
    setVisibleCount(1);
  };

  const floatingTags = [
    { name: 'C++', style: 'top-[-12px] left-[8%]', delay: '0s', anim: 'animate-float-slow' },
    { name: 'Java', style: 'top-[18%] right-[-12px]', delay: '1s', anim: 'animate-float-reverse' },
    { name: 'React', style: 'bottom-[25%] left-[-15px]', delay: '1.5s', anim: 'animate-float-slow' },
    { name: 'Node.js', style: 'bottom-[-12px] right-[12%]', delay: '2s', anim: 'animate-float-reverse' },
  ];

  return (
    <section id="hero" className="pt-28 pb-16 relative overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border shadow-xs animate-slide-up hover:border-[#0C8C7E]/40 dark:hover:border-[#14B8A6]/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C8C7E] dark:bg-[#14B8A6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0C8C7E] dark:bg-[#14B8A6]"></span>
              </span>
              <span className="text-xs font-semibold text-foreground">Open to Software Development Internships</span>
            </div>
            
            {/* Main Titles */}
            <div className="animate-slide-up animation-delay-100">
              <p className="text-sm font-bold text-[#0C8C7E] dark:text-[#14B8A6] uppercase tracking-wider mb-2">Hi, I'm Sarthak Tajane.</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Computer Science Student & Software Developer
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
              I build practical web applications and software solutions with a focus on clean code, problem solving, and real-world development.
            </p>

            {/* Live deployment indicator */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground animate-slide-up animation-delay-200">
              <span className="w-2 h-2 rounded-full bg-[#0C8C7E] dark:bg-[#14B8A6] animate-pulse"></span>
              <span className="font-semibold text-foreground">Live</span>
              <span>·</span>
              <span>Deployed on Vercel</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 animate-slide-up animation-delay-300">
              <a 
                href="#projects" 
                className="btn-sheen group inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] dark:hover:bg-[#0D9488] transition-all duration-200 font-medium gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a 
                href="/resume" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card text-foreground border border-border hover:bg-secondary transition-all duration-200 font-medium gap-2 shadow-sm hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6]" />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center gap-2 pl-2">
                <a 
                  href="https://github.com/sarthaktajane07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-card border border-border text-muted-foreground hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] hover:border-[#0C8C7E]/40 hover:-translate-y-0.5 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/sarthak-tajane" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-card border border-border text-muted-foreground hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] hover:border-[#0C8C7E]/40 hover:-translate-y-0.5 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
          
          {/* Developer Visual / Multi-Tab Code Panel with 3D Tilt */}
          <div className="lg:col-span-5 relative animate-fade-in">
            
            {/* Floating Tech Pills */}
            {floatingTags.map((tag) => (
              <div 
                key={tag.name} 
                className={`hidden sm:block absolute ${tag.style} z-20 px-3 py-1 bg-card border border-border rounded-full text-xs font-mono font-semibold text-[#0C8C7E] dark:text-[#14B8A6] shadow-sm ${tag.anim}`}
                style={{ animationDelay: tag.delay }}
              >
                {tag.name}
              </div>
            ))}

            <CardTilt maxTilt={6}>
              <div className="bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative z-10">
                
                {/* Header Bar with Code Tabs */}
                <div className="bg-secondary/60 px-3 py-2.5 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-background/50 p-1 rounded-md border border-border">
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium transition-all ${
                        activeTab === 'terminal' 
                          ? 'bg-card text-[#0C8C7E] dark:text-[#14B8A6] shadow-xs' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      <span>terminal.sh</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('config')}
                      className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium transition-all ${
                        activeTab === 'config' 
                          ? 'bg-card text-[#0C8C7E] dark:text-[#14B8A6] shadow-xs' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span>config.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('json')}
                      className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium transition-all ${
                        activeTab === 'json' 
                          ? 'bg-card text-[#0C8C7E] dark:text-[#14B8A6] shadow-xs' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Braces className="w-3 h-3" />
                      <span>skills.json</span>
                    </button>
                  </div>

                  {/* Terminal Replay Action */}
                  {activeTab === 'terminal' && (
                    <button 
                      onClick={handleResetTerminal} 
                      className="p-1 text-muted-foreground hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] transition-colors rounded hover:bg-secondary"
                      title="Replay terminal execution"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                
                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs text-foreground leading-relaxed min-h-[230px] overflow-x-auto">
                  {activeTab === 'terminal' && (
                    <div className="space-y-2">
                      {terminalLines.slice(0, visibleCount).map((line, idx) => (
                        <div key={idx} className="flex items-start gap-2 animate-fade-in">
                          {line.type === 'command' && <span className="text-[#0C8C7E] dark:text-[#14B8A6] font-bold">▶</span>}
                          {line.type === 'output' && <span className="text-muted-foreground">│</span>}
                          {line.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-[#0C8C7E] dark:text-[#14B8A6] shrink-0 mt-0.5" />}
                          <span className={line.type === 'success' ? 'text-[#0C8C7E] dark:text-[#14B8A6] font-bold' : ''}>
                            {line.text}
                          </span>
                        </div>
                      ))}
                      {visibleCount < terminalLines.length && (
                        <span className="inline-block w-2 h-4 bg-[#0C8C7E] dark:bg-[#14B8A6] animate-cursor-blink ml-1"></span>
                      )}
                    </div>
                  )}

                  {activeTab === 'config' && (
                    <pre className="text-xs text-foreground font-mono animate-fade-in whitespace-pre-wrap leading-relaxed">
                      <code>{systemConfigCode}</code>
                    </pre>
                  )}

                  {activeTab === 'json' && (
                    <pre className="text-xs text-foreground font-mono animate-fade-in whitespace-pre-wrap leading-relaxed">
                      <code>{skillsJsonCode}</code>
                    </pre>
                  )}
                </div>

              </div>
            </CardTilt>

          </div>

        </div>

        {/* Pipeline Workflow Visual */}
        <div className="mt-12 animate-slide-up">
          <PipelineVisual />
        </div>

      </div>
    </section>
  );
};
