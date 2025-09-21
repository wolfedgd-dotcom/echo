import React from 'react';
import { Clock, DollarSign, TrendingUp, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Automate repetitive tasks and reduce operational costs by up to 60% with our AI solutions."
    },
    {
      icon: Zap, 
      title: "24/7 Availability",
      description: "Your AI assistant never sleeps. Provide customer support and capture leads around the clock."
    },
    {
      icon: TrendingUp,
      title: "Scalable AI Solutions", 
      description: "Grow your business with AI that adapts and scales with your needs, from startup to enterprise."
    },
    {
      icon: DollarSign,
      title: "Easy to Get Started",
      description: "No technical expertise required. Our team handles setup and training so you can focus on your business."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose EchoAssist?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group relative z-10">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;