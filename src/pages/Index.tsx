
import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navigation from '../components/Navigation';
import DarkModeToggle from '../components/DarkModeToggle';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import ScrollAnimations from '../components/ScrollAnimations';
import { ScrollToTop } from "../components/scroll-to-top";
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-animated text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <DarkModeToggle />
      <ScrollAnimations />
      
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="certificates">
          <CertificatesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
<ScrollToTop />
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400">
            © 2024 Tolera Fayisa. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
