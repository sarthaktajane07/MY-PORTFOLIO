import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-[#DCE2E8] bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6573]">
          <div>
            Sarthak Tajane © 2026
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/sarthaktajane07" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C8C7E] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sarthak-tajane-a3a05a312/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C8C7E] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sarthaktajane@example.com" className="hover:text-[#0C8C7E] transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
