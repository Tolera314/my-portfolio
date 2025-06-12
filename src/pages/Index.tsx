
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MotionConfig } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import emailjs from 'emailjs-com';

const Index = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = 'Tolera Fayisa | Front-end Developer';
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    // Initialize EmailJS
    emailjs.init("X1GW-TllRkn5GKxHG"); 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        {/* Theme toggle button */}
        <button 
          onClick={toggleTheme}
          className="fixed right-6 top-24 z-50 p-2 rounded-full bg-card dark:bg-gray-800 border border-border dark:border-gray-700 shadow-md transition-all hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Index;
