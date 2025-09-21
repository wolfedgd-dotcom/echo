import React from 'react';
import { Linkedin, Twitter, Facebook, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">EchoAssist</div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with intelligent AI solutions for reviews, websites, and customer service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800 hover:scale-110 border border-transparent hover:border-blue-500/30">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800 hover:scale-110 border border-transparent hover:border-blue-500/30">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800 hover:scale-110 border border-transparent hover:border-blue-500/30">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800 hover:scale-110 border border-transparent hover:border-blue-500/30">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">AI Reviews</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Website Building</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">AI Receptionist</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">SMS Automation</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Services</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Pricing</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-400">
            © 2025 EchoAssist. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500/30"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;