import React, { useState } from 'react';
import { ArrowLeft, Check, CreditCard, Shield, Star } from 'lucide-react';

interface PaymentPageProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
  };
  onBack: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ plan, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', { plan: plan.name, formData });
    // Here you would integrate with a payment processor like Stripe
    alert(`Payment processing for ${plan.name} plan would be handled here!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Pricing
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Plan Summary */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-fit">
            <div className="text-center mb-6">
              {plan.popular && (
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-300 ml-2">{plan.period}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-4">What's included:</h3>
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="flex items-center text-blue-400 mb-2">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">30-Day Money Back Guarantee</span>
              </div>
              <p className="text-sm text-gray-300">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <CreditCard className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Payment Details</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="Your Company"
                />
              </div>

              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Payment Information</h4>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      required
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      value={formData.cvv}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Billing Address</h4>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="billingAddress"
                    required
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="Los Angeles"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="90210"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Complete Payment - {plan.price}
              </button>

              <p className="text-sm text-gray-400 text-center">
                Your payment is secured with 256-bit SSL encryption
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;