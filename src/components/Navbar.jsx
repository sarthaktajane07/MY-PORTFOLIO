import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [istTime, setIstTime] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const formattedTime = new Intl.DateTimeFormat([], options).format(new Date());
      setIstTime(`${formattedTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for Section Tracking
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-30% 0px -40% 0px'
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      {/* Top Scroll Progress Indicator Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-[#0C8C7E] dark:bg-[#14B8A6] transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] transition-colors">
              Sarthak Tajane
            </a>

            {/* Monospace IST Clock with subtle pulsing dot */}
            {istTime && (
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-card border border-border text-xs font-mono text-muted-foreground shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C8C7E] dark:bg-[#14B8A6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0C8C7E] dark:bg-[#14B8A6]"></span>
                </span>
                <span>{istTime}</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name} className="relative py-1">
                    <a 
                      href={link.href} 
                      className={`text-sm font-medium transition-all duration-200 ${
                        isActive ? 'text-[#0C8C7E] dark:text-[#14B8A6] font-semibold' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0C8C7E] dark:bg-[#14B8A6] rounded-full animate-fade-in" />
                    )}
                  </li>
                );
              })}
            </ul>
            
            <ThemeToggle />

            <a 
              href="/resume" 
              className="btn-sheen inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] dark:hover:bg-[#0D9488] transition-all duration-200 text-sm font-medium gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center p-6 animate-fade-in">
          <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
            {istTime && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-mono text-muted-foreground mb-4">
                <span className="h-2 w-2 rounded-full bg-[#0C8C7E] dark:bg-[#14B8A6] animate-pulse"></span>
                <span>{istTime}</span>
              </div>
            )}

            <ul className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center border-b border-border pb-3">
                  <a 
                    href={link.href} 
                    className="text-xl font-semibold text-foreground block w-full hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="/resume" 
              className="btn-sheen inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white text-base font-semibold gap-2 mt-4 w-full shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
