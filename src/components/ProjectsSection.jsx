import React from 'react';
import { ArrowUpRight, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { CardTilt } from './CardTilt';

export const ProjectsSection = () => {
  const getStatusBadge = (status) => {
    if (status === 'In Production') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0C8C7E]/10 dark:bg-[#14B8A6]/10 text-[#0C8C7E] dark:text-[#14B8A6] border border-[#0C8C7E]/20 dark:border-[#14B8A6]/20 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C8C7E] dark:bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0C8C7E] dark:bg-[#14B8A6]"></span>
          </span>
          ● In Production
        </span>
      );
    }
    if (status === 'In Development') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B8650F]/10 text-[#B8650F] dark:text-amber-400 border border-[#B8650F]/20 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8650F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8650F]"></span>
          </span>
          ● In Development
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border text-xs font-medium">
        <span className="h-2 w-2 rounded-full bg-muted-foreground"></span>
        Completed
      </span>
    );
  };

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0C8C7E] dark:text-[#14B8A6] bg-[#0C8C7E]/10 dark:bg-[#14B8A6]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 dark:border-[#14B8A6]/20 mb-3">
            &lt;proof_of_work /&gt;
          </span>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-12 h-1 bg-[#0C8C7E] dark:bg-[#14B8A6] rounded-full mt-3 mb-4"></div>
          <p className="text-muted-foreground max-w-2xl text-base">
            High-impact software engineering projects built with clean architecture, real APIs, and modern frontend/backend frameworks.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <CardTilt key={project.id} maxTilt={4}>
              <div 
                className={`bg-card border border-border hover:border-[#0C8C7E]/40 dark:hover:border-[#14B8A6]/40 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group animate-slide-up animation-delay-${(index + 1) * 100}`}
              >
                {/* Project Screenshot */}
                <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-border bg-secondary aspect-video">
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#12181F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={`/projects/${project.id}`} 
                      className="bg-card text-foreground text-xs font-bold px-4 py-2 rounded-md shadow-md inline-flex items-center gap-1.5 hover:bg-[#0C8C7E] dark:hover:bg-[#14B8A6] hover:text-white transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:col-span-6 space-y-4">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {getStatusBadge(project.status)}
                    <span className="text-xs font-mono text-muted-foreground">{project.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    <a href={`/projects/${project.id}`} className="hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] transition-colors">
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono font-medium bg-secondary text-foreground border border-border rounded group-hover:border-[#0C8C7E]/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a 
                      href={`/projects/${project.id}`} 
                      className="btn-sheen inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] dark:hover:bg-[#0D9488] transition-colors text-xs font-semibold gap-1.5 shadow-sm"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {project.live && project.live !== '#' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-card border border-border text-foreground hover:bg-secondary transition-colors text-xs font-medium gap-1 shadow-sm"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                      </a>
                    )}

                    {project.github && project.github !== '#' && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-xs font-medium gap-1 shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </CardTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
