import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/sarthaktajane07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-tajane-a3a05a312/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sarthaktajane07@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 relative" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold gradient-text mb-4 inline-block">
              &lt;Dev /&gt;
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              CSE Student & Full-Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Sarthak Tajane. Made with{' '}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};
