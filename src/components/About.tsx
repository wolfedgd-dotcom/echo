import React from 'react';
import { Target, Users, Lightbulb, ArrowRight } from 'lucide-react';

interface AboutProps {
  onPlanSelect: (plan: any) => void;
}

const About: React.FC<AboutProps> = ({ onPlanSelect }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-800 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-56 h-56 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                About EchoAssist
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We make AI accessible for small businesses. Whether you need better reviews, a powerful website, or 24/7 customer support — we've got you covered.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">To empower small businesses with enterprise-level AI capabilities that drive growth and efficiency.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30 hover:bg-green-500/30 transition-colors">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Team</h3>
                  <p className="text-gray-300">Expert AI developers and business consultants dedicated to your success and growth.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-300">A future where every business, regardless of size, can leverage AI to compete and thrive.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg text-center border border-blue-500/20 relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <p className="text-gray-200 font-semibold text-xl">
                  "Making AI simple, powerful, and accessible for everyone."
                </p>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;