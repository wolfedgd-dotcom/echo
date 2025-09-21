import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  onPlanSelect: (plan: any) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onPlanSelect }) => {
  const testimonials = [
    {
      quote: "The AI receptionist saved me hours of missed calls! Our booking rate increased by 40% in just the first month.",
      name: "Sarah Johnson",
      position: "Owner, Johnson's Dental Practice",
      rating: 5
    },
    {
      quote: "My new AI-built website was live in days and looks incredibly professional. The best investment I've made for my business.",
      name: "Michael Chen", 
      position: "Founder, Chen's Restaurant Group",
      rating: 5
    },
    {
      quote: "The automated review system has transformed our online reputation. We went from 3.2 to 4.8 stars in just 3 months!",
      name: "Emma Rodriguez",
      position: "Manager, Rodriguez Auto Repair",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-32 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real businesses are saying about EchoAssist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 relative group hover:bg-gray-700/50 transition-colors border border-gray-700">
              <Quote className="w-12 h-12 text-blue-400 mb-6 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-6">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;