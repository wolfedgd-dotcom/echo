import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (planName: string) => {
    scrollToSection('contact');
  };

  const plans = [
    {
      name: "Regular",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Automated Reviews",
        "Starter Website (up to 3 pages)",
        "Basic AI Receptionist (calls OR texts)",
        "Support: Email only",
        "Basic analytics",
        "Setup assistance"
      ],
      popular: false,
      buttonText: "Choose Plan"
    },
    {
      name: "Pro", 
      price: "$199",
      period: "per month",
      description: "Ideal for growing businesses that need comprehensive AI solutions",
      features: [
        "Everything in Regular",
        "Full Website (up to 6 pages)", 
        "AI Receptionist (calls + texts)",
        "Monthly Performance Report",
        "Support: Email + Chat",
        "Advanced analytics",
        "Custom integrations",
        "Priority setup"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Premium",
      price: "$399", 
      period: "per month",
      description: "For established businesses requiring enterprise-level AI capabilities",
      features: [
        "Everything in Pro",
        "Unlimited Website Pages",
        "Custom Integrations (CRM, Calendars, etc.)",
        "Priority Support (24/7)",
        "Dedicated AI Consultant",
        "White-label options",
        "Advanced reporting suite",
        "Custom AI training"
      ],
      popular: false,
      buttonText: "Choose Plan"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features with no hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 ${plan.popular ? 'border-2 border-blue-500 transform scale-105 shadow-blue-500/20' : 'border border-gray-700'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600 hover:border-blue-500/50'
              }`}>
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {plan.buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;