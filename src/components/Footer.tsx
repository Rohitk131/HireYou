
import React from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, ChevronRight } from 'lucide-react';

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
    <footer className="relative bg-dark-200 border-t border-white/10">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-neon-yellow animate-pulse-slow"></div>
                <div className="absolute inset-0.5 rounded-full bg-dark-200"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-neon-yellow">
                  AI
                </div>
              </div>
              <span className="font-bold text-xl text-white">AI Synergy<span className="text-neon-yellow">.</span></span>
            </a>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionize your hiring process with our AI-powered interview platform. 
              Create, share, and evaluate interviews with unprecedented efficiency and accuracy.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} AI Synergy. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-yellow text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
