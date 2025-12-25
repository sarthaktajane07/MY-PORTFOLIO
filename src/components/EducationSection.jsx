import { GraduationCap } from 'lucide-react';

const education = [
    {
        type: 'education',
        degree: 'B.Tech in Computer Science',
        institution: 'XYZ Institute of Technology',
        location: 'Mumbai, India',
        period: '2022 - 2026',
        description: 'Specializing in Full Stack Development and Cloud Computing.',
        achievements: [
            'Current GPA: 8.5/10',
            'Core Coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks',
            'Lead Developer at Coding Club',
        ],
    },
    {
        type: 'education',
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'ABC Junior College',
        location: 'Pune, India',
        period: '2020 - 2022',
        description: 'Science Stream with Computer Science focus.',
        achievements: [
            'Scored 92% in Board Exams',
            'First rank in Mathematics',
        ],
    },
];

export const EducationSection = () => {
    return (
        <section
            id="education"
            className="py-20 lg:py-32 relative"
            aria-labelledby="education-heading"
        >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-hero-glow opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                        Academic Background
                    </span>
                    <h2
                        id="education-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A timeline of my academic journey and key milestones.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 animate-pulse-glow" />

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                                    {/* Icon */}
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <div className="glass-card p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                                            <GraduationCap className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                                    <p className="text-muted-foreground text-sm mb-4">{edu.location}</p>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {edu.description}
                                    </p>

                                    {/* Achievements */}
                                    <ul className="space-y-2">
                                        {edu.achievements.map((achievement, achIndex) => (
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
