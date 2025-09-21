import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800/50 shadow-lg shadow-blue-500/10">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">EchoAssist</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <button 
            onClick={handleGetStarted}
            className="hidden md:block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            Get Started Today
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">Contact</button>
              <button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full">
                Get Started Today
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;