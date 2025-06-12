
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'backdrop-blur-lg bg-background/80 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-bg text-transparent bg-clip-text">
          Tolera<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-foreground/80 hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-20">
    {/* Close Button inside Sidebar */}
    <button 
      className="absolute top-5 right-5 text-foreground"
      onClick={() => setIsMobileMenuOpen(false)}
      aria-label="Close menu"
    >
      <X size={24} />
    </button>

    <nav className="container mx-auto px-4 flex flex-col space-y-6 items-center">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.name}
        </a>
      ))}
    </nav>
  </div>
)}
    </header>
  );
};

export default Navbar;
