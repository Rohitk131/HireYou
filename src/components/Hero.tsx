
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/ui/AnimatedText';
import GlowEffect from '@/components/ui/GlowEffect';
import { ArrowRight, ChevronDown, User, Mic, Shield } from 'lucide-react';

const Hero = () => {
  const audioVisualizerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/50 to-dark"></div>
      
      {/* Glow effects */}
      <GlowEffect 
        color="yellow" 
        size="lg" 
        className="absolute -top-20 -left-20 opacity-40 hidden lg:block" 
      />
      <GlowEffect 
        color="blue" 
        size="lg" 
        className="absolute bottom-10 -right-20 opacity-30 hidden lg:block" 
      />
      
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-2xl animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 text-neon-yellow text-sm font-medium mb-4">
                AI-Powered Interview Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <AnimatedText text="Talk to AI," delay={0.1} />
              <br />
              <AnimatedText text="Get Hired" className="gradient-text" delay={0.4} />
            </h1>
            
            <p className="text-lg text-gray-300 md:text-xl max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Revolutionize your hiring process with our AI-powered interview platform. Create, share, and evaluate interviews with unprecedented efficiency and accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Button className="bg-neon-yellow hover:bg-neon-yellow/90 text-dark font-medium text-base px-8 py-6">
                Create an Interview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white font-medium text-base px-8 py-6">
                Take an Interview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-dark-200 border-2 border-dark flex items-center justify-center text-xs text-white">
                    <User className="h-4 w-4" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> recruiters trust our platform
              </p>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="aspect-square max-w-md mx-auto">
              <div className="glass-card rounded-3xl overflow-hidden p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-neon-yellow"></div>
                    <span className="text-white font-medium">AI Assistant</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Recording...
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="relative w-48 h-48 rounded-full bg-dark-300/50 border border-white/10 flex items-center justify-center animate-float">
                    <div className="absolute inset-0 rounded-full border-2 border-neon-yellow/20 animate-pulse-slow"></div>
                    
                    {/* Circular audio visualizer */}
                    <div ref={audioVisualizerRef} className="absolute inset-4 flex items-center justify-center">
                      <div className="relative h-full w-full">
                        <div className="absolute left-1/2 top-0 w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-1 rounded-full"></div>
                        <div className="absolute left-[75%] top-[25%] w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-2 rounded-full"></div>
                        <div className="absolute left-[92%] top-1/2 w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-3 rounded-full"></div>
                        <div className="absolute left-[75%] top-[75%] w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-4 rounded-full"></div>
                        <div className="absolute left-1/2 top-[100%] w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-5 rounded-full"></div>
                        <div className="absolute left-[25%] top-[75%] w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-4 rounded-full"></div>
                        <div className="absolute left-[8%] top-1/2 w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-3 rounded-full"></div>
                        <div className="absolute left-[25%] top-[25%] w-0.5 h-10 bg-neon-yellow/60 origin-bottom animate-waveform-2 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="relative w-24 h-24 rounded-full bg-dark/50 border border-white/10 flex items-center justify-center z-10">
                      <Mic className="h-10 w-10 text-neon-yellow" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="glass-card rounded-xl p-4 border border-white/10">
                    <p className="text-white text-sm leading-relaxed">
                      "Tell me about a time when you had to solve a complex problem. What was your approach?"
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="flex-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-neon-yellow animate-pulse"></div>
                        <div className="h-1 bg-white/20 w-full rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-neon-yellow/50 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-xs text-white/70 ml-2">00:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="p-2 rounded-full border border-white/10 bg-dark-100/50 animate-bounce">
          <ChevronDown className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
