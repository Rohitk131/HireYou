
import React from 'react';
import { cn } from '@/lib/utils';
import GlowEffect from '@/components/ui/GlowEffect';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Talent Acquisition, TechCorp',
      image: 'https://source.unsplash.com/random/300x300/?portrait=1',
      content: 'The AI interview platform has cut our hiring time by 60%. The insights we get from each candidate are far more valuable than traditional screening methods.',
      stars: 5
    },
    {
      name: 'Michael Chen',
      role: 'Recruiting Manager, InnovateCo',
      image: 'https://source.unsplash.com/random/300x300/?portrait=2',
      content: 'We've seen a 40% improvement in candidate quality since implementing this platform. The anti-cheating measures ensure we're evaluating genuine responses.',
      stars: 5
    },
    {
      name: 'Rebecca Taylor',
      role: 'HR Director, Global Solutions',
      image: 'https://source.unsplash.com/random/300x300/?portrait=3',
      content: 'The leaderboard feature has transformed our decision-making process. We can quickly identify top performers based on objective metrics.',
      stars: 4
    }
  ];
  
  const stats = [
    { value: '78%', label: 'Reduction in Time-to-Hire' },
    { value: '3.5x', label: 'More Candidates Screened' },
    { value: '92%', label: 'Recruiter Satisfaction' },
    { value: '45%', label: 'Improved Hire Quality' }
  ];
  
  return (
    <section id="testimonials" className="relative py-24 bg-dark-100">
      <div className="absolute inset-0 mask-radial-gradient">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
      </div>
      
      {/* Glow effects */}
      <GlowEffect 
        color="purple" 
        size="lg" 
        className="absolute bottom-20 left-20 opacity-30 hidden lg:block" 
      />
      
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-neon-yellow mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Leading Companies
          </h3>
          <p className="text-gray-300 text-lg">
            Hear from recruiters who have transformed their hiring process with our 
            AI-powered interview platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <div className="glass-card rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div 
                  className="text-4xl md:text-5xl font-bold text-neon-yellow mb-2 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    content: string;
    stars: number;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 border border-white/10 hover:border-neon-yellow/30 transition-all duration-300 flex flex-col"
      style={{ 
        animationDelay: `${0.1 + index * 0.1}s`,
        opacity: 0,
        animation: 'fade-in-up 0.6s ease-out forwards' 
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "h-4 w-4",
              i < testimonial.stars ? "text-neon-yellow fill-neon-yellow" : "text-gray-500"
            )} 
          />
        ))}
      </div>
      
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-neon-yellow opacity-30" />
        <p className="text-gray-300 italic relative z-10">{testimonial.content}</p>
      </div>
      
      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
