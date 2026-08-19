import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led a team of 5 developers on a major product launch',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client-facing applications using React and Node.js ecosystem.',
    achievements: [
      'Developed 15+ web applications from scratch',
      'Integrated third-party APIs and payment systems',
      'Improved test coverage from 40% to 90%',
    ],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'WebAgency Co.',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Collaborated on various client projects, focusing on frontend development and responsive design.',
    achievements: [
      'Contributed to 20+ client projects',
      'Learned and implemented modern JavaScript frameworks',
      'Received Employee of the Quarter award',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University of California',
    location: 'Berkeley, CA',
    period: '2015 - 2019',
    description: 'Focused on software engineering, data structures, and web technologies.',
    achievements: [
      'Graduated with Honors (GPA: 3.8)',
      'President of Web Development Club',
      'Completed internship at Google',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 lg:py-32 relative"
      aria-labelledby="experience-heading"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            My Journey
          </span>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and educational background.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 animate-pulse-glow" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="glass-card p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
