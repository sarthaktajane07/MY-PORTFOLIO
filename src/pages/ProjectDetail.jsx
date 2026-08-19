import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, User, Layers, Globe, Server, Database, CheckCircle2, AlertTriangle, Lightbulb, ShieldCheck, Cpu, Search, FileText, Zap, Lock, Activity, Sliders } from 'lucide-react';
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
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-foreground mb-3">Project Not Found</h1>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          The requested case study could not be located.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] transition-colors font-medium text-sm gap-2 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio
        </button>
      </div>
    );
  }

  const isAIForge = project.id === 'aiforge';

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Sarthak Tajane</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            
            {/* Navigation & Header */}
            <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center text-sm font-semibold text-[#0C8C7E] dark:text-[#14B8A6] hover:underline mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </button>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0C8C7E]/10 dark:bg-[#14B8A6]/10 text-[#0C8C7E] dark:text-[#14B8A6] border border-[#0C8C7E]/20 dark:border-[#14B8A6]/20 text-xs font-mono font-bold uppercase tracking-wider">
                  Technical Case Study
                </span>
                <span className="px-3 py-1 rounded-full bg-card border border-border text-muted-foreground text-xs font-semibold">
                  {project.status || 'In Production'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.longDescription || project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                {project.live && project.live !== '#' && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-sheen inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] transition-colors font-medium text-sm gap-2 shadow-sm"
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
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-card border border-border text-foreground hover:bg-secondary transition-colors font-medium text-sm gap-2 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Feature Image Banner */}
            <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden border border-border bg-card shadow-md">
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
                <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.overview || project.longDescription}
                  </p>
                </section>

                {/* AIForge Special: RAG Pipeline Data Flow */}
                {isAIForge && (
                  <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                      RAG Pipeline & Document Flow
                    </h2>
                    
                    <div className="bg-secondary/60 border border-border rounded-lg p-5 my-4 space-y-3 font-mono text-xs text-foreground">
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-card rounded border border-border">
                        <span className="font-bold text-[#0C8C7E] dark:text-[#14B8A6]">1. User Upload</span>
                        <span className="text-muted-foreground">PDF / DOCX / TXT / CSV</span>
                      </div>
                      <div className="text-center text-muted-foreground text-[10px]">↓ Parsing & Text Extraction</div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-card rounded border border-border">
                        <span className="font-bold text-[#0C8C7E] dark:text-[#14B8A6]">2. Intelligent Chunking</span>
                        <span className="text-muted-foreground">Recursive Overlapping Windows</span>
                      </div>
                      <div className="text-center text-muted-foreground text-[10px]">↓ Vector Embedding Generation</div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-card rounded border border-border">
                        <span className="font-bold text-[#0C8C7E] dark:text-[#14B8A6]">3. Qdrant Vector Indexing</span>
                        <span className="text-muted-foreground">Dense Vector Similarity Store</span>
                      </div>
                      <div className="text-center text-muted-foreground text-[10px]">↓ Hybrid Search + Reranker</div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-card rounded border border-border">
                        <span className="font-bold text-[#0C8C7E] dark:text-[#14B8A6]">4. Grounded LLM Response</span>
                        <span className="text-muted-foreground">Streaming Tokens + Source Citations</span>
                      </div>
                    </div>
                  </section>
                )}

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#B8650F] dark:text-amber-400" />
                      Problem
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.problem || "Cryptocurrency data is scattered across exchanges, causing navigation friction for users analyzing market movements."}
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6]" />
                      Solution
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution || "Unified dashboard aggregating real-time price feeds into intuitive interactive charts with state optimization."}
                    </p>
                  </div>
                </div>

                {/* Architecture Flow Diagram */}
                <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                    Technical Architecture
                  </h2>
                  
                  <div className="bg-secondary/60 border border-border rounded-lg p-6 my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                      <div className="flex items-center gap-2 bg-card px-3 py-2 rounded border border-border text-xs font-semibold text-foreground shadow-xs">
                        <Globe className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <span>Next.js Client</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">↓ REST / Stream</span>
                      
                      <div className="flex items-center gap-2 bg-card px-3 py-2 rounded border border-border text-xs font-semibold text-foreground shadow-xs">
                        <Server className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <span>FastAPI Backend</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">↓ Queries</span>
                      
                      <div className="flex items-center gap-2 bg-card px-3 py-2 rounded border border-border text-xs font-semibold text-foreground shadow-xs">
                        <Database className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <span>Qdrant / Postgres</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* AIForge Features Grid */}
                {isAIForge && (
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold text-foreground mb-4">Key Engineering Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-2">
                        <FileText className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <h3 className="font-bold text-foreground text-sm">Document Intelligence</h3>
                        <p className="text-xs text-muted-foreground">Processes PDF, DOCX, TXT, and CSV files into structured chunked embeddings.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-2">
                        <Search className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <h3 className="font-bold text-foreground text-sm">Hybrid Vector Search</h3>
                        <p className="text-xs text-muted-foreground">Combines dense Qdrant vector similarity with sparse keyword matching & cross-encoder reranking.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-2">
                        <Zap className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <h3 className="font-bold text-foreground text-sm">Streaming Responses</h3>
                        <p className="text-xs text-muted-foreground">Token-by-token real-time SSE streaming for a responsive ChatGPT-style UX.</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-2">
                        <Lock className="w-5 h-5 text-[#0C8C7E] dark:text-[#14B8A6]" />
                        <h3 className="font-bold text-foreground text-sm">Security & Rate Limiting</h3>
                        <p className="text-xs text-muted-foreground">Redis-backed rate limiting, JWT authentication, and document access controls.</p>
                      </div>
                    </div>
                  </section>
                )}

                {/* Technical Challenges & Decisions */}
                {(project.challenges?.length > 0 || project.technicalDecisions?.length > 0) && (
                  <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
                    {project.challenges?.length > 0 && (
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-3">Technical Challenges</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-[#0C8C7E] dark:text-[#14B8A6] shrink-0 mt-0.5" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technicalDecisions?.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h3 className="text-base font-bold text-foreground mb-3">Key Technical Decisions</h3>
                        <ul className="space-y-2">
                          {project.technicalDecisions.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Lightbulb className="w-4 h-4 text-[#B8650F] dark:text-amber-400 shrink-0 mt-0.5" />
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
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-bold text-foreground mb-3">What I Learned</h3>
                        <ul className="space-y-2">
                          {project.learned.map((l, i) => (
                            <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                              • {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.futureImprovements?.length > 0 && (
                      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                        <h3 className="text-base font-bold text-foreground mb-3">Future Improvements</h3>
                        <ul className="space-y-2">
                          {project.futureImprovements.map((f, i) => (
                            <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                              • {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Final CTAs */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-card border border-border rounded-xl shadow-sm">
                  <span className="text-sm font-semibold text-foreground">Interested in the implementation details?</span>
                  <div className="flex items-center gap-3">
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0C8C7E] dark:text-[#14B8A6] hover:underline flex items-center gap-1">
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-foreground hover:underline flex items-center gap-1">
                        View Source <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column: Metadata Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono font-medium bg-secondary text-foreground border border-border rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Project Metadata</h3>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-semibold text-foreground">{project.role || 'Developer'}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-semibold text-[#0C8C7E] dark:text-[#14B8A6]">{project.status || 'In Production'}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-semibold text-foreground">{project.duration || '2024 - Present'}</span>
                  </div>
                </div>

                {project.results?.length > 0 && (
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3 text-xs">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Key Characteristics</h3>
                    {project.results.map((r, i) => (
                      <div key={i} className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground">{r.metric}</span>
                        <span className="font-semibold text-[#0C8C7E] dark:text-[#14B8A6]">{r.value}</span>
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
