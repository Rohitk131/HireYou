
import React from 'react';
import { Button } from '@/components/ui/button';
import GlowEffect from '@/components/ui/GlowEffect';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  const recruiterPerks = [
    'Create custom interview flows',
    'Access AI-generated insights',
    'Review and compare candidates',
    'Eliminate hiring bias'
  ];
  
  const candidatePerks = [
    'Interview on your schedule',
    'Showcase your true potential',
    'Receive fair evaluation',
    'Get personalized feedback'
  ];
  
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
    
      <div className="relative z-10 section-container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-neon-yellow/30 transition-all duration-300 animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">For Recruiters</h3>
              <p className="text-gray-300">
                Streamline your hiring process and make data-driven decisions with our AI-powered interview platform.
              </p>
            </div>
            
            <div className="mb-8">
              <ul className="space-y-4">
                {recruiterPerks.map((perk, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-neon-yellow/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-neon-yellow" />
                    </div>
                    <span className="text-white">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="bg-neon-yellow hover:bg-neon-yellow/90 text-dark font-medium w-full py-6">
              Create an Interview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-neon-yellow/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">For Candidates</h3>
              <p className="text-gray-300">
                Showcase your skills in a comfortable environment with our conversational AI interviewer.
              </p>
            </div>
            
            <div className="mb-8">
              <ul className="space-y-4">
                {candidatePerks.map((perk, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-neon-yellow/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-neon-yellow" />
                    </div>
                    <span className="text-white">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white font-medium w-full py-6">
              Take an Interview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
