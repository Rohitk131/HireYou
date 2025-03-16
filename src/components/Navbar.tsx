import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-600 py-4 px-6 w-1/2 mx-auto bg-dark-100/80 backdrop-blur-md shadow-md rounded-full  mt-2 border '
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <motion.div
          className="relative h-10 w-10 rounded-full bg-neon-yellow shadow-[0_0_10px_#ffdd57] flex items-center justify-center text-dark font-bold"
          whileHover={{ scale: 1.1 }}
        >
          HY
        </motion.div>
        <span className="font-bold text-lg text-white tracking-wide">
          HireYou<span className="text-neon-yellow">.</span>
        </span>
      </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-neon-yellow hover:bg-dark-200">
              Log in
            </Button>
            <Button className="bg-neon-yellow text-dark hover:bg-neon-yellow/90 font-medium">
              Sign up
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-100/95 backdrop-blur-md p-4 flex flex-col gap-4 border-t border-white/10 animate-fade-in">
          <NavLinks mobile />
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <Button variant="ghost" className="justify-center text-white hover:text-neon-yellow hover:bg-dark-200">
              Log in
            </Button>
            <Button className="justify-center bg-neon-yellow text-dark hover:bg-neon-yellow/90 font-medium">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { text: 'Features', href: '#features' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Pricing', href: '#pricing' },
  ];
  
  return (
    <div className={cn(mobile ? 'flex flex-col gap-4' : 'flex items-center gap-8')}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-white hover:text-neon-yellow transition-colors duration-200 font-medium"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Navbar;