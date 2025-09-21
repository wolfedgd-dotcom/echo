import React from 'react';
import { ArrowRight, Bot, Globe, Phone, Star, Zap } from 'lucide-react';

interface HeroProps {
  onPlanSelect: (plan: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onPlanSelect }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-semibold">AI-Powered Business Solutions</span>
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Smarter Business.
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Powered by AI.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                We help businesses grow with AI reviews, website building, and intelligent receptionists that handle calls, texts, and customers 24/7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:bg-blue-400/10 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Book Free Consultation
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700 relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110 border border-blue-500/30">
                    <Bot className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Reviews</h3>
                </div>
                <div className="text-center group">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110 border border-green-500/30">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Websites</h3>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110 border border-purple-500/30">
                    <Phone className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Receptionist</h3>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-50"></div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">AI Efficiency</span>
                  <span className="text-sm font-semibold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-2 rounded-full w-[98%] transition-all duration-1000 shadow-lg shadow-green-400/25"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;