import { Code2, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Second Year',
    description: 'CSE Student',
  },
  {
    icon: Rocket,
    title: '4+ Projects',
    description: 'Academic & Personal',
  },
  {
    icon: Users,
    title: 'Open To Work',
    description: 'Seeking Internships',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-3xl" />

              {/* Profile Image Container */}
              <div className="relative glass-card rounded-3xl overflow-hidden aspect-square gradient-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="absolute inset-0">
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/images/profile.png"
                      alt="Sarthak Tajane"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block animate-flicker">
              [ SUBJECT.IDENTIFICATION ]
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 group"
            >
              Building My <span className="gradient-text animate-glitch inline-block">Future</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a dedicated Computer Science student passionate about Full-Stack Web Development.
              Currently pursuing my degree, I spend my time building projects, learning modern frameworks like React and Node.js,
              and exploring the latest trends in technology.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My goal is to leverage my skills in a real-world environment.
              I am actively looking for internship opportunities where I can contribute to meaningful projects,
              learn from experienced developers, and grow my career in software engineering.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl text-center hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* HUD Corners */}
                  <div className="hud-corner hud-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="hud-corner hud-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform animate-flicker" />
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
