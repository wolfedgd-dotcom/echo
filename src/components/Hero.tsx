import React from 'react';
import { ArrowRight, Bot, Globe, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Smarter Business.
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Powered by AI.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                We help businesses grow with AI reviews, website building, and intelligent receptionists that handle calls, texts, and customers 24/7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                Book Free Consultation
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors">
                    <Bot className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Reviews</h3>
                </div>
                <div className="text-center group">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/30 transition-colors">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Websites</h3>
                </div>
                <div className="text-center group">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-200">AI Receptionist</h3>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">AI Efficiency</span>
                  <span className="text-sm font-semibold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[98%] transition-all duration-1000"></div>
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