import React from 'react';
import { cn } from '@/lib/utils';
import GlowEffect from '@/components/ui/GlowEffect';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// SVG Patterns for backgrounds


const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Talent Acquisition, TechCorp',
      image: 'https://source.unsplash.com/random/300x300/?portrait=1',
      content: 'The AI interview platform has cut our hiring time by 60%. The insights we get from each candidate are far more valuable than traditional screening methods.',
      stars: 5,
      highlight: 'Reduced hiring time by 60%'
    },
    {
      name: 'Michael Chen',
      role: 'Recruiting Manager, InnovateCo',
      image: 'https://source.unsplash.com/random/300x300/?portrait=2',
      content: 'We\'ve seen a 40% improvement in candidate quality since implementing this platform. The anti-cheating measures ensure we\'re evaluating genuine responses.',
      stars: 5,
      highlight: '40% better candidate quality'
    },
    {
      name: 'Rebecca Taylor',
      role: 'HR Director, Global Solutions',
      image: 'https://source.unsplash.com/random/300x300/?portrait=3',
      content: 'The leaderboard feature has transformed our decision-making process. We can quickly identify top performers based on objective metrics.',
      stars: 4,
      highlight: 'Better decision making'
    }
  ];
  
  const stats = [
    { value: '78%', label: 'Reduction in Time-to-Hire' },
    { value: '3.5x', label: 'More Candidates Screened' },
    { value: '92%', label: 'Recruiter Satisfaction' },
    { value: '45%', label: 'Improved Hire Quality' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 mask-radial-gradient">
        <div className="absolute inset-0 grid-bg opacity-90"></div>
      </div>
      
      <div className="relative z-10 section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block mb-3">
            <motion.div 
              className="bg-neon-yellow/10 border border-neon-yellow/20 rounded-full px-4 py-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-neon-yellow">Testimonials</h2>
            </motion.div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Leading Companies
          </h3>
          <p className="text-gray-300 text-lg">
            Hear from recruiters who have transformed their hiring process with our 
            AI-powered interview platform.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="relative rounded-2xl p-10 border border-white/10 overflow-hidden bg-gradient-to-br from-dark-200/70 to-dark-300/70 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-yellow/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-neon-yellow mb-3"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
    highlight: string;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
    >
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-br from-neon-yellow/50 to-purple-500/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
      />
      
      <motion.div 
        className="relative bg-gradient-to-br from-dark-200/90 to-dark-300/90 rounded-xl p-7 border border-white/10 transition-all duration-300 flex flex-col h-full overflow-hidden backdrop-blur-sm"
        whileHover={{ y: -5 }}
      >
      
        
        <div className="flex justify-between items-start mb-5 items-center">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Star 
                  className={cn(
                    "h-4 w-4",
                    i < testimonial.stars ? "text-neon-yellow fill-neon-yellow" : "text-gray-500"
                  )} 
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-xs font-medium px-3 py-1 rounded-full bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle size={12} />
              <span>{testimonial.highlight}</span>
            </div>
          </motion.div>
        </div>
        
        <div className="relative mb-6 flex-grow">
          <Quote className="absolute -top-1 -left-1 h-8 w-8 text-neon-yellow opacity-20" />
          <p className="text-gray-300 relative z-10 pl-2">{testimonial.content}</p>
        </div>
        
        <motion.div 
          className="mt-auto pt-5 border-t border-white/5 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
            <motion.img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
