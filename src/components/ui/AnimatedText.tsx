
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  highlight = false,
  as: Component = 'span'
}) => {
  const letters = text.split('');
  
  return (
    <Component className={cn('inline-block', className)}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={cn(
            'inline-block opacity-0 animate-fade-in',
            highlight && letter !== ' ' ? 'text-neon-yellow' : ''
          )}
          style={{
            animationDelay: `${delay + index * 0.03}s`,
            animationFillMode: 'forwards'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </Component>
  );
};

export default AnimatedText;
