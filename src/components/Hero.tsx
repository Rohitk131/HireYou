import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/ui/AnimatedText';
import GlowEffect from '@/components/ui/GlowEffect';
import { ArrowRight, ChevronDown, User, Mic, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  const audioVisualizerRef = useRef<HTMLCanvasElement>(null);
  const audioAnimationRef = useRef<number>(0);

  // Initialize and animate the audio visualizer
  useEffect(() => {
    if (!audioVisualizerRef.current) return;

    const canvas = audioVisualizerRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const centerX = canvas.width / (2 * dpr);
    const centerY = canvas.height / (2 * dpr);
    const radius = Math.min(centerX, centerY) - 10;

    // Number of bars in the visualizer
    const barCount = 48;

    const drawVisualizer = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circular bars
      for (let i = 0; i < barCount; i++) {
        const angle = (i / barCount) * Math.PI * 2;

        // Generate a dynamic height based on time for animation
        const time = Date.now() / 1000;
        const frequency = 1 + (i % 5) * 0.2;
        const amplitude = 5 + Math.sin(i * 0.2) * 3;

        // Calculate height using multiple sine waves for natural movement
        const heightMultiplier = Math.sin(time * frequency) * 0.5 + 0.5;
        const height = 10 + heightMultiplier * amplitude;

        // Calculate bar position
        const innerRadius = radius - 15;
        const outerRadius = innerRadius + height;

        const startX = centerX + Math.cos(angle) * innerRadius;
        const startY = centerY + Math.sin(angle) * innerRadius;
        const endX = centerX + Math.cos(angle) * outerRadius;
        const endY = centerY + Math.sin(angle) * outerRadius;

        // Draw the bar
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 3;

        // Yellow gradient with opacity
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, 'rgba(242, 233, 78, 0.3)');
        gradient.addColorStop(1, 'rgba(242, 233, 78, 0.8)');
        ctx.strokeStyle = gradient;

        ctx.lineCap = 'round';
        ctx.stroke();
      }

      audioAnimationRef.current = requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();

    // Clean up
    return () => {
      cancelAnimationFrame(audioAnimationRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden ">
      <style jsx global>{`
  @keyframes cosmic-glow {
    0% { opacity: 0.6; filter: blur(80px); }
    50% { opacity: 0.8; filter: blur(120px); }
    100% { opacity: 0.6; filter: blur(80px); }
  }

  .yellow-glow {
    animation: cosmic-glow 8s ease-in-out infinite;
    background: radial-gradient(circle at center, 
      rgba(255, 223, 0, 0.4) 0%, /* Yellow color with opacity */
      rgba(255, 223, 0, 0.2) 50%, 
      transparent 100%);
  }

  .shadow-yellow-glow {
    filter: drop-shadow(0 0 8px rgba(255, 223, 0, 0.6)); /* Yellow color with opacity */
  }

  .glass-panel {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background: rgba(19, 24, 38, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] yellow-glow opacity-70" />
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/50 to-dark"></div>



      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-2xl animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 text-neon-yellow text-sm font-medium mb-4">
                <Sparkles className="mr-1 h-3 w-3" /> Next-Gen Interview Technology
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              AI Interviews,
              <br />
              <span className='bg-gradient-to-b bg-clip-text text-transparent from-white to-yellow-300'>
                Real Results
              </span>
            </h1>

            <p className="text-lg text-gray-300 md:text-xl max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Discover how our cutting-edge AI interview platform eliminates bias, detects authenticity, and identifies top talent with 85% greater accuracy than traditional interviews.
            </p>

            <div className="flex flex-wrap gap-4 mt-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-neon-yellow/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-neon-yellow" />
                </div>
                <span className="text-white text-sm">Anti-cheating technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-neon-yellow/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-neon-yellow" />
                </div>
                <span className="text-white text-sm">AI-powered analysis</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Button className="bg-neon-yellow hover:bg-neon-yellow/90 text-dark font-medium text-base px-8 py-6">
                Launch Interview Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white font-medium text-base px-8 py-6">
                See Demo Interview
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
                <span className="text-white font-semibold">2,500+</span> recruiters trust our platform
              </p>
            </div>
          </div>

          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="aspect-square max-w-md mx-auto">
              <div className="glass-card rounded-3xl overflow-hidden p-6 flex flex-col h-full backdrop-blur-xl border border-white/10 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-neon-yellow animate-pulse"></div>
                    <span className="text-white font-medium">Interview AI Assistant</span>
                  </div>
                  <div className="text-xs px-2 py-1 rounded-full bg-neon-yellow/10 text-neon-yellow">
                    Live Recording
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="relative w-48 h-48 rounded-full bg-dark-300/50 border border-white/10 flex items-center justify-center animate-float">
                    <div className="absolute inset-0 rounded-full border-2 border-neon-yellow/20 animate-pulse-slow"></div>

                    {/* Canvas-based circular audio visualizer */}
                    <div className="absolute inset-0">
                      <canvas
                        ref={audioVisualizerRef}
                        className="w-full h-full"
                        style={{ transform: 'rotate(-90deg)' }}
                      ></canvas>
                    </div>

                    <div className="relative w-24 h-24 rounded-full bg-dark/80 backdrop-blur-md border border-white/20 flex items-center justify-center z-10 shadow-glow">
                      <Mic className="h-10 w-10 text-neon-yellow animate-subtle-pulse" />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="glass-card rounded-xl p-4 border border-white/10">
                    <p className="text-white text-sm leading-relaxed">
                      "Describe how you leveraged data to drive a significant business decision in your previous role."
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="flex-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-neon-yellow animate-pulse"></div>
                        <div className="h-1 bg-white/20 w-full rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-neon-yellow/50 rounded-full animate-progress"></div>
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
        <span className="text-white/60 text-sm mb-2">Scroll to explore features</span>
        <div className="p-2 rounded-full border border-white/10 bg-dark-100/50 animate-bounce">
          <ChevronDown className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
