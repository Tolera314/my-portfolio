
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AnimatedGradient = ({ children, className, ...props }: AnimatedGradientProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-lg animate-gradient"></div>
      <div className="relative bg-background rounded-lg">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
