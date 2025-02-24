import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const [showCopied, setShowCopied] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('pulsetrackersolana@proton.me');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PulseTracker</h3>
            <p className="text-gray-300 text-sm">
              Discover profitable Solana wallets used by successful traders.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="text-gray-300 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#roadmap" onClick={(e) => handleNavClick(e, '#roadmap')} className="text-gray-300 hover:text-white transition-colors duration-200">Roadmap</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://solscan.io" className="text-gray-300 hover:text-white transition-colors duration-200">Solscan</a></li>
              <li><a href="https://dexscreener.com" className="text-gray-300 hover:text-white transition-colors duration-200">Dexscreener</a></li>
              <li><a href="https://phantom.app" className="text-gray-300 hover:text-white transition-colors duration-200">Phantom Wallet</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://t.me/cameronsol" className="text-gray-300 hover:text-white transition-colors duration-200">Telegram</a></li>
              <li><a href="https://twitter.com/PulseTrackerSol" className="text-gray-300 hover:text-white transition-colors duration-200">Twitter</a></li>
              <li>
                <button 
                  onClick={handleEmailClick} 
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative"
                >
                  Email
                  {showCopied && (
                    <span className="absolute left-full ml-2 bg-primary text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PulseTrackerSol. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};