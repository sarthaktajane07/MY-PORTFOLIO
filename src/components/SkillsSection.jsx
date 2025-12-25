import { 
  Boxes, 
  Database, 
  FileCode2, 
  GitBranch, 
  Globe, 
  Layers, 
  Server, 
  Terminal 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Boxes, level: 95 },
      { name: 'JavaScript', icon: FileCode2, level: 90 },
      { name: 'HTML/CSS', icon: Globe, level: 95 },
      { name: 'TypeScript', icon: FileCode2, level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server, level: 90 },
      { name: 'MongoDB', icon: Database, level: 85 },
      { name: 'Express.js', icon: Layers, level: 88 },
      { name: 'REST APIs', icon: Globe, level: 92 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: GitBranch, level: 90 },
      { name: 'VS Code', icon: Terminal, level: 95 },
      { name: 'Docker', icon: Boxes, level: 75 },
      { name: 'AWS', icon: Server, level: 70 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 relative"
      aria-labelledby="skills-heading"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            My Skills
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set over the years, constantly learning 
            and adapting to new technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="glass-card p-2 rounded-lg group-hover/skill:bg-primary/10 transition-colors">
                          <skill.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
