import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedGradient from './ui/animated-gradient';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const moveX = (mouseX - 0.5) * 30;
      const moveY = (mouseY - 0.5) * 30;
      
      const orbs = parallaxRef.current.querySelectorAll('.parallax-orb');
      
      orbs.forEach((orb, index) => {
        const speed = index * 0.2 + 0.5;
        (orb as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`; 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20 dark:opacity-10 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-orb absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="parallax-orb absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 dark:bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="parallax-orb absolute top-1/3 left-1/2 w-40 h-40 bg-accent/20 dark:bg-accent/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-primary dark:text-primary">Hello there, I'm</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground dark:text-white">
                Tolera Fayisa
              </h1>
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground dark:text-gray-300">
                Front-end Developer <span className="text-primary">&</span> Software Engineer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-xl">
                I specialize in creating beautiful and responsive web applications
                that provide exceptional user experiences using modern technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contact" className="btn-gradient">
                Hire Me
              </a>
              <a 
                href="/tolera-fayisa-resume.pdf" 
                download="Tolera-Fayisa-Resume.pdf"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md border border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/10 dark:border-primary/70 dark:text-primary/90 dark:hover:text-primary"
                aria-label="Download Resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex space-x-4 pt-4"
            >
              <a 
                href="https://github.com/Tolera314" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full border border-border dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tolera-fayisa-590387344/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full border border-border dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:tolefayiss@gmail.com" 
                className="p-2 rounded-full border border-border dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <AnimatedGradient className="w-72 h-72 rounded-full overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background dark:border-gray-800 p-1">
                <img
                  src="/toliImage.jpg"  // <-- Updated to reference public folder
                  alt="Tolera Fayisa"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </AnimatedGradient>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={30} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
