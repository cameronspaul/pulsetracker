import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/images/logo.png';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#try-now', label: 'Try Now' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind
        const offset = isMobile ? 50 : 0; // Add offset for mobile devices
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-background-dark' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-white font-bold text-xl flex items-center gap-0"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <img src={logo} alt="PulseTracker Logo" className="w-16 h-16" />
              PulseTrackerSol
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/PulseTrackerSol_bot?start=1"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try PulseTracker
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ 
              duration: 0.3,
              height: { duration: 0.3 },
              opacity: { duration: 0.2, delay: 0.1 }
            }}
            className="md:hidden bg-background-dark overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="px-2 pt-2 pb-3 space-y-1 text-center bg-background-dark"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-center"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="https://t.me/PulseTrackerSol_bot?start=1"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try PulseTracker
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};