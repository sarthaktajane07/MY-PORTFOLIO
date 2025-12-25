import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  Tag,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Boxes,
  Server,
  Database,
  CreditCard,
  Zap,
  Brain,
  MapPin,
  BarChart,
  Smartphone,
  GitBranch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById, projects } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

const iconMap = {
  Boxes,
  Server,
  Database,
  CreditCard,
  Zap,
  Brain,
  MapPin,
  BarChart,
  Smartphone,
  GitBranch,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id || '');
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
          <Button variant="hero" asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{project.title} | Alex Chen - Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Alex Chen`} />
        <meta property="og:description" content={project.description} />
        <link rel="canonical" href={`https://alexchen.dev/project/${project.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-20">
          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-hero-glow opacity-50" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Back Button */}
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Project Info */}
                <div>
                  {project.featured && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Featured Project
                    </span>
                  )}
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Tag className="w-4 h-4" />
                        <span className="text-xs">Category</span>
                      </div>
                      <p className="font-semibold">{project.category}</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">Duration</span>
                      </div>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <User className="w-4 h-4" />
                        <span className="text-xs">Role</span>
                      </div>
                      <p className="font-semibold">{project.role}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="hero-outline" size="lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Main Screenshot */}
                <div className="relative">
                  <div className="glass-card rounded-2xl overflow-hidden gradient-border">
                    <img
                      src={project.screenshots[activeScreenshot]}
                      alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  
                  {/* Screenshot Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={() => setActiveScreenshot((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1))}
                      className="glass-card p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex gap-2">
                      {project.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveScreenshot(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeScreenshot 
                              ? 'bg-primary w-6' 
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setActiveScreenshot((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0))}
                      className="glass-card p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">
                Tech Stack <span className="gradient-text">Deep Dive</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                A detailed look at the technologies used and how they contribute to the project.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {project.techDetails.map((tech, index) => {
                  const IconComponent = iconMap[tech.icon] || Boxes;
                  return (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="glass-card p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {tech.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-hero-glow opacity-30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="glass-card p-3 rounded-xl">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Challenges</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="glass-card p-5 rounded-xl hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="glass-card p-3 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Solutions</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="glass-card p-5 rounded-xl hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                            ✓
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="glass-card p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Results & Impact</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="glass-card p-8 rounded-2xl text-center hover:border-primary/30 transition-all duration-300 group"
                  >
                    <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                      {result.value}
                    </p>
                    <p className="text-muted-foreground">{result.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screenshot Gallery */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-hero-glow opacity-30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl font-bold mb-8">
                Project <span className="gradient-text">Gallery</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                      index === activeScreenshot ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-2xl">
                {prevProject ? (
                  <Link
                    to={`/project/${prevProject.id}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <span className="text-xs block">Previous</span>
                      <span className="font-semibold">{prevProject.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                <Button variant="glass" asChild>
                  <Link to="/#projects">All Projects</Link>
                </Button>

                {nextProject ? (
                  <Link
                    to={`/project/${nextProject.id}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="text-right">
                      <span className="text-xs block">Next</span>
                      <span className="font-semibold">{nextProject.title}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
