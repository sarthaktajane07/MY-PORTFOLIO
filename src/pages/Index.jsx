import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <Helmet>
        <title>Sarthak Tajane | Student & Full-Stack Developer</title>
        <meta
          name="description"
          content="Computer Science Student and Aspiring Full-Stack Developer. View my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Student, Portfolio, Web Developer, React, Node.js"
        />
        <meta name="author" content="Sarthak Tajane" />
        <meta property="og:title" content="Sarthak Tajane | Student & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Computer Science Student and Aspiring Full-Stack Developer. View my portfolio and projects."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sarthak Tajane | Student & Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Computer Science Student and Aspiring Full-Stack Developer."
        />
      </Helmet>

      {showWelcome ? (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      ) : (
        <div className="min-h-screen bg-background animate-fade-in relative overflow-hidden">
          {/* Global Background Effects */}
          <div className="fixed inset-0 bg-dot-matrix opacity-[0.03] pointer-events-none" />
          <div className="fixed inset-0 bg-data-stream opacity-[0.05] pointer-events-none" />

          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
