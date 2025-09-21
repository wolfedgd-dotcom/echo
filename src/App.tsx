import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PaymentPage from './components/PaymentPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'payment'>('home');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setCurrentView('payment');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedPlan(null);
  };

  if (currentView === 'payment' && selectedPlan) {
    return <PaymentPage plan={selectedPlan} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header onPlanSelect={handlePlanSelect} />
      <Hero onPlanSelect={handlePlanSelect} />
      <Services onPlanSelect={handlePlanSelect} />
      <Pricing onPlanSelect={handlePlanSelect} />
      <Benefits onPlanSelect={handlePlanSelect} />
      <Testimonials onPlanSelect={handlePlanSelect} />
      <About onPlanSelect={handlePlanSelect} />
      <Contact onPlanSelect={handlePlanSelect} />
      <Footer onPlanSelect={handlePlanSelect} />
    </div>
  );
}

export default App;