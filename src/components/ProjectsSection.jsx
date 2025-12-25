import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 relative"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block animate-flicker">
            [ DATA.PROJECTS ]
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Featured{' '}
            <span className="gradient-text">Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analyzing recent development cycles and deployment modules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* HUD Corners */}
              <div className="hud-corner hud-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="hud-corner hud-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="hud-corner hud-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="hud-corner hud-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Dot Matrix Overlay on Card */}
              <div className="absolute inset-0 bg-dot-matrix opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              {/* Project Image */}
              <Link to={`/project/${project.id}`} className="block relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`View ${project.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {project.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </Link>

              {/* Project Info */}
              <div className="p-6">
                <Link to={`/project/${project.id}`}>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
