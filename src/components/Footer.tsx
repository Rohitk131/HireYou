import React from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Case Studies', href: '#' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Updates', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Newsletter', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Tutorials', href: '#' }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' }
  ];
  
  return (
    <footer className="relative bg-gradient-to-b from-dark-200/30 to-dark-300/30 border-t border-white/10 overflow-hidden w-[70%] rounded-2xl mx-auto">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-neon-yellow/20 blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-[120px]"></div>
      </div>

      <div className="section-container py-8 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 relative">
            <motion.a 
              href="#" 
              className="flex items-center gap-3 mb-7"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-yellow to-yellow-400 shadow-[0_0_15px_rgba(255,221,87,0.5)]"></div>
                <div className="absolute inset-0.5 rounded-lg bg-dark-200"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-neon-yellow text-lg">
                  HY
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-wide">
                HireYou<span className="text-neon-yellow">.</span>
              </span>
            </motion.a>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Revolutionize your hiring process with our AI-powered interview platform. 
              Create, share, and evaluate interviews with unprecedented efficiency and accuracy.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-neon-yellow bg-dark-300/50 p-2.5 rounded-full border border-white/5 hover:border-neon-yellow/30 hover:shadow-[0_0_15px_rgba(255,221,87,0.2)] transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-white font-semibold mb-5 text-lg relative">
                {group.title}
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-neon-yellow/80 to-neon-yellow/0"></span>
              </h4>
              <ul className="space-y-3.5">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      <ChevronRight className="h-3 w-3 mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-neon-yellow" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} HireYou. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Modern curved edge at the top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-dark-200/0 backdrop-blur-sm"></div>
      
      {/* Bottom glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-yellow/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
