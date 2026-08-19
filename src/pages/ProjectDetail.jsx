import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, User, Layers, Globe, Server, Database, CheckCircle2, AlertTriangle, Lightbulb, ShieldCheck } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F4F6F9] flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-[#12181F] mb-3">Project Not Found</h1>
        <p className="text-[#5B6573] mb-6 text-center max-w-md">
          The requested case study could not be located.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#0C8C7E] text-white hover:bg-[#097266] transition-colors font-medium text-sm gap-2 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Sarthak Tajane</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-[#F4F6F9] text-[#12181F]">
        <Navbar />
        
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            
            {/* Navigation & Header */}
            <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center text-sm font-semibold text-[#0C8C7E] hover:underline mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </button>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0C8C7E]/10 text-[#0C8C7E] border border-[#0C8C7E]/20 text-xs font-bold uppercase tracking-wider">
                  Technical Case Study
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCE2E8] text-[#5B6573] text-xs font-semibold">
                  {project.status || 'In Production'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#12181F] mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-[#5B6573] leading-relaxed mb-8">
                {project.longDescription || project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                {project.live && project.live !== '#' && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#0C8C7E] text-white hover:bg-[#097266] transition-colors font-medium text-sm gap-2 shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {project.github && project.github !== '#' && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white border border-[#DCE2E8] text-[#12181F] hover:bg-gray-50 transition-colors font-medium text-sm gap-2 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Feature Image Banner */}
            <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden border border-[#DCE2E8] bg-white shadow-md">
              <img 
                src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80'} 
                alt={`${project.title} Preview`}
                className="w-full h-auto object-cover max-h-[550px]"
              />
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Detailed Content */}
              <div className="lg:col-span-8 space-y-12 animate-slide-up">
                
                {/* Overview */}
                <section className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-[#12181F] mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#0C8C7E]" />
                    Overview
                  </h2>
                  <p className="text-[#5B6573] leading-relaxed text-sm">
                    {project.overview || project.longDescription}
                  </p>
                </section>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#12181F] mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#B8650F]" />
                      Problem
                    </h3>
                    <p className="text-[#5B6573] text-sm leading-relaxed">
                      {project.problem || "Cryptocurrency data is scattered across exchanges, causing navigation friction for users analyzing market movements."}
                    </p>
                  </div>

                  <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#12181F] mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0C8C7E]" />
                      Solution
                    </h3>
                    <p className="text-[#5B6573] text-sm leading-relaxed">
                      {project.solution || "Unified dashboard aggregating real-time price feeds into intuitive interactive charts with state optimization."}
                    </p>
                  </div>
                </div>

                {/* Architecture Flow Diagram */}
                <section className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-[#12181F] mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0C8C7E]" />
                    System Architecture & Data Flow
                  </h2>
                  
                  <div className="bg-[#F4F6F9] border border-[#DCE2E8] rounded-lg p-6 my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-[#DCE2E8] text-xs font-semibold text-[#12181F] shadow-xs">
                        <User className="w-4 h-4 text-[#0C8C7E]" />
                        <span>User</span>
                      </div>
                      <span className="text-xs text-[#5B6573] font-mono">↓ HTTP</span>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-[#DCE2E8] text-xs font-semibold text-[#12181F] shadow-xs">
                        <Globe className="w-4 h-4 text-[#0C8C7E]" />
                        <span>Frontend (React)</span>
                      </div>
                      <span className="text-xs text-[#5B6573] font-mono">↓ REST</span>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-[#DCE2E8] text-xs font-semibold text-[#12181F] shadow-xs">
                        <Server className="w-4 h-4 text-[#0C8C7E]" />
                        <span>API Gateway</span>
                      </div>
                      <span className="text-xs text-[#5B6573] font-mono">↓ Queries</span>
                      
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-[#DCE2E8] text-xs font-semibold text-[#12181F] shadow-xs">
                        <Database className="w-4 h-4 text-[#0C8C7E]" />
                        <span>Database</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#5B6573] leading-relaxed">
                    Data requests flow from the React client to external crypto market REST APIs, formatted via isolated state hooks before updating chart components.
                  </p>
                </section>

                {/* Technical Challenges & Decisions */}
                {(project.challenges?.length > 0 || project.technicalDecisions?.length > 0) && (
                  <section className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm space-y-6">
                    {project.challenges?.length > 0 && (
                      <div>
                        <h3 className="text-base font-bold text-[#12181F] mb-3">Technical Challenges</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#5B6573]">
                              <CheckCircle2 className="w-4 h-4 text-[#0C8C7E] shrink-0 mt-0.5" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technicalDecisions?.length > 0 && (
                      <div className="pt-4 border-t border-[#DCE2E8]">
                        <h3 className="text-base font-bold text-[#12181F] mb-3">Key Technical Decisions</h3>
                        <ul className="space-y-2">
                          {project.technicalDecisions.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#5B6573]">
                              <Lightbulb className="w-4 h-4 text-[#B8650F] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                )}

                {/* Learnings & Future Work */}
                {(project.learned?.length > 0 || project.futureImprovements?.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.learned?.length > 0 && (
                      <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-bold text-[#12181F] mb-3">What I Learned</h3>
                        <ul className="space-y-2">
                          {project.learned.map((l, i) => (
                            <li key={i} className="text-xs text-[#5B6573] leading-relaxed">
                              • {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.futureImprovements?.length > 0 && (
                      <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-bold text-[#12181F] mb-3">Future Improvements</h3>
                        <ul className="space-y-2">
                          {project.futureImprovements.map((f, i) => (
                            <li key={i} className="text-xs text-[#5B6573] leading-relaxed">
                              • {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Final CTAs */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white border border-[#DCE2E8] rounded-xl shadow-sm">
                  <span className="text-sm font-semibold text-[#12181F]">Interested in the implementation details?</span>
                  <div className="flex items-center gap-3">
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0C8C7E] hover:underline flex items-center gap-1">
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#12181F] hover:underline flex items-center gap-1">
                        View Source <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column: Metadata Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6573] mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium bg-[#F4F6F9] text-[#12181F] border border-[#DCE2E8] rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm space-y-4 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6573] mb-2">Project Metadata</h3>
                  <div className="flex justify-between border-b border-[#DCE2E8] pb-2">
                    <span className="text-[#5B6573]">Role</span>
                    <span className="font-semibold text-[#12181F]">{project.role || 'Developer'}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#DCE2E8] pb-2">
                    <span className="text-[#5B6573]">Status</span>
                    <span className="font-semibold text-[#0C8C7E]">{project.status || 'In Production'}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#DCE2E8] pb-2">
                    <span className="text-[#5B6573]">Timeline</span>
                    <span className="font-semibold text-[#12181F]">{project.duration || '2023 - Present'}</span>
                  </div>
                </div>

                {project.results?.length > 0 && (
                  <div className="bg-white border border-[#DCE2E8] rounded-xl p-6 shadow-sm space-y-3 text-xs">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B6573]">Key Characteristics</h3>
                    {project.results.map((r, i) => (
                      <div key={i} className="flex justify-between border-b border-[#DCE2E8] pb-2 last:border-0 last:pb-0">
                        <span className="text-[#5B6573]">{r.metric}</span>
                        <span className="font-semibold text-[#0C8C7E]">{r.value}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
