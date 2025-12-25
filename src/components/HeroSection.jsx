import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingEffect } from '@/components/TypingEffect';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[100px] w-full" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="gradient-text">Sarthak Tajane</span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up animation-delay-200 min-h-[40px]">
            <TypingEffect text="Full-Stack Web Developer" speed={70} delay={500} />
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-400">
            I craft scalable web applications with modern technologies.
            Passionate about clean code, user experience, and building products that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                Download Resume
                <Download className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="glass-card p-3 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
