
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowEffectProps {
  className?: string;
  children?: React.ReactNode;
  color?: 'yellow' | 'blue' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  className,
  children,
  color = 'yellow',
  size = 'md',
  pulse = true
}) => {
  const colorMap = {
    yellow: 'rgba(250, 255, 0, 0.3)',
    blue: 'rgba(0, 240, 255, 0.3)',
    purple: 'rgba(255, 0, 245, 0.3)'
  };
  
  const sizeMap = {
    sm: 'w-20 h-20',
    md: 'w-40 h-40',
    lg: 'w-60 h-60'
  };
  
  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'absolute rounded-full -z-10 blur-3xl',
          sizeMap[size],
          pulse && 'animate-glow-pulse'
        )}
        style={{ backgroundColor: colorMap[color] }}
      />
      {children}
    </div>
  );
};

export default GlowEffect;
