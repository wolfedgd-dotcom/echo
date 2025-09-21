import React from 'react';
import { Star, Globe, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onPlanSelect: (plan: any) => void;
}

const Services: React.FC<ServicesProps> = ({ onPlanSelect }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Star,
      title: "AI Reviews",
      description: "We analyze and automate customer reviews to boost your reputation and drive engagement.",
      features: ["Automated review requests", "Sentiment analysis", "Response automation", "Reputation monitoring"],
      color: "blue"
    },
    {
      icon: Globe,
      title: "AI Website Building", 
      description: "Modern, AI-built websites tailored to your brand — fast, mobile-friendly, and optimized.",
      features: ["Custom design", "SEO optimized", "Mobile responsive", "Fast loading"],
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "AI Receptionist & SMS",
      description: "Never miss a customer again. Our AI handles calls, schedules appointments, and responds to texts instantly.",
      features: ["24/7 availability", "Appointment scheduling", "Call handling", "SMS automation"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-400 bg-blue-500/20",
      green: "text-green-400 bg-green-500/20", 
      purple: "text-purple-400 bg-purple-500/20"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our AI-Powered Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions designed to save time, increase efficiency, and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-8 bg-gray-700/50 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 group-hover:bg-blue-600/20 group-hover:text-blue-400 flex items-center justify-center group/btn relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;