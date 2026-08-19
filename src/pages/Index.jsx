import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { WorkshopsSection } from '@/components/WorkshopsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sarthak Tajane | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Computer Science Student and Software Developer. View my portfolio, projects, and skills."
        />
        <meta
          name="keywords"
          content="Software Engineer, Portfolio, Developer, Intern, React, Node.js"
        />
        <meta name="author" content="Sarthak Tajane" />
        <meta property="og:title" content="Sarthak Tajane | Software Developer Portfolio" />
        <meta
          property="og:description"
          content="Computer Science Student and Software Developer. View my portfolio and projects."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sarthak Tajane | Software Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Computer Science Student and Software Developer."
        />
      </Helmet>

      <div className="min-h-screen bg-background animate-fade-in relative overflow-hidden">
        {/* Subtle background gradient for a premium look */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <WorkshopsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
