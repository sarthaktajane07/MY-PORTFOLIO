import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight, Check, Copy } from 'lucide-react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "sarthaktajane@example.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-border bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
          
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0C8C7E] dark:text-[#14B8A6] bg-[#0C8C7E]/10 dark:bg-[#14B8A6]/10 px-3 py-1 rounded-full border border-[#0C8C7E]/20 dark:border-[#14B8A6]/20">
            &lt;get_in_touch /&gt;
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let's Build Something.</h2>
          <div className="w-12 h-1 bg-[#0C8C7E] dark:bg-[#14B8A6] rounded-full mx-auto"></div>
          
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I'm currently looking for software development internships and opportunities to work on real-world projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 relative">
            
            {/* Email Button with Copy Feedback */}
            <div className="relative">
              <button 
                onClick={handleCopyEmail}
                className="btn-sheen group inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#0C8C7E] dark:bg-[#14B8A6] text-white hover:bg-[#097266] dark:hover:bg-[#0D9488] transition-all duration-200 font-medium text-sm gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                title="Click to copy email"
              >
                {copied ? <Check className="w-4 h-4 text-white animate-bounce" /> : <Mail className="w-4 h-4" />}
                <span>{copied ? 'Copied Email!' : 'Email Me'}</span>
                {!copied && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
              </button>

              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-mono rounded shadow-md animate-fade-in pointer-events-none whitespace-nowrap">
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>

            <a 
              href="https://www.linkedin.com/in/sarthak-tajane-a3a05a312/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 font-medium text-sm gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/sarthaktajane07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 font-medium text-sm gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a 
              href="/resume" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-card border border-border text-[#0C8C7E] dark:text-[#14B8A6] hover:bg-secondary transition-all duration-200 font-medium text-sm gap-2 shadow-sm hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
