
import React from 'react';
import { cn } from '@/lib/utils';
import GlowEffect from '@/components/ui/GlowEffect';
import { Mic, Video, Shield, Users, BarChart, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-neon-yellow" />,
      title: 'Voice-Driven Interviews',
      description: 'Our AI conducts natural conversations, asking tailored questions to reveal candidate potential.'
    },
    {
      icon: <Video className="h-8 w-8 text-neon-blue" />,
      title: 'Video Response Analysis',
      description: 'Capture both verbal and non-verbal communication for comprehensive evaluation.'
    },
    {
      icon: <Shield className="h-8 w-8 text-neon-purple" />,
      title: 'Anti-Cheating Measures',
      description: 'Advanced monitoring ensures interview integrity with real-time tracking.'
    },
    {
      icon: <Users className="h-8 w-8 text-neon-yellow" />,
      title: 'Candidate Leaderboard',
      description: 'Rank top candidates based on performance metrics for easier decision-making.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-neon-blue" />,
      title: 'Performance Analytics',
      description: 'Detailed insights into candidate responses and engagement metrics.'
    },
    {
      icon: <Zap className="h-8 w-8 text-neon-purple" />,
      title: 'Seamless Integration',
      description: 'Connect with your existing recruitment workflows and ATS systems.'
    }
  ];
  
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Glow effects */}
      <GlowEffect 
        color="yellow" 
        size="lg" 
        className="absolute top-40 right-20 opacity-30 hidden lg:block" 
      />
      
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-neon-yellow mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Reimagine Your Interview Process
          </h3>
          <p className="text-gray-300 text-lg">
            Our AI-powered platform transforms traditional interviews into dynamic, 
            insightful interactions that save time and improve hiring decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 border border-white/10 hover:border-neon-yellow/30 transition-all duration-300 hover:transform hover:-translate-y-1"
      style={{ 
        animationDelay: `${0.1 + index * 0.1}s`,
        opacity: 0,
        animation: 'fade-in-up 0.6s ease-out forwards' 
      }}
    >
      <div className="w-16 h-16 rounded-lg bg-dark-200 flex items-center justify-center mb-6">
        {feature.icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  );
};

export default Features;
