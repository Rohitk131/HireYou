
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth page reveal on load
  useEffect(() => {
    document.body.classList.add('opacity-0');
    
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 100);
    
    return () => {
      document.body.classList.remove('transition-opacity', 'duration-500', 'opacity-100');
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
