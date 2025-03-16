
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlowEffect from "@/components/ui/GlowEffect";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark p-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Glow effects */}
      <GlowEffect 
        color="yellow" 
        size="lg" 
        className="absolute top-20 left-20 opacity-30" 
      />
      <GlowEffect 
        color="blue" 
        size="lg" 
        className="absolute bottom-20 right-20 opacity-30" 
      />
      
      <div className="relative z-10 glass-card rounded-2xl p-8 md:p-12 border border-white/10 text-center max-w-md w-full animate-scale-in">
        <h1 className="text-6xl md:text-8xl font-bold text-neon-yellow mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white mb-6">Oops! Page not found</p>
        <p className="text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-neon-yellow hover:bg-neon-yellow/90 text-dark font-medium px-8 py-6"
          onClick={() => window.location.href = "/"}
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
