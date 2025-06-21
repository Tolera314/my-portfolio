
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card backdrop-blur-md bg-black/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-110">
              <span className="relative">
                TF
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-lg transform scale-150 group-hover:opacity-40 transition-all duration-300"></div>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-item group relative px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* 3D Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300 origin-center"></div>
                  
                  {/* 3D Border Effect */}
                  <div className="absolute inset-0 border border-neon-blue/30 rounded-lg transform translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-neon-blue/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 text-sm tracking-wide group-hover:text-neon-blue transition-colors duration-300">
                    {item.name}
                  </span>
                  
                  {/* Underline Effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-card p-2 rounded-lg text-white hover:text-neon-blue transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-card mx-4 mb-4 rounded-xl border border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-neon-blue/20 hover:text-neon-blue transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  <span>{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
