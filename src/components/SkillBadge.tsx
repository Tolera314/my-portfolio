
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon: string;
  progress: number;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, progress, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className={cn(
        "relative flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
        "bg-card border border-border hover:border-primary/50",
        "hover:shadow-md hover:shadow-primary/10"
      )}>
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
          <img src={icon} alt={name} className="w-6 h-6" />
        </div>
        <div className="flex-grow min-w-0">
          <p className="font-medium">{name}</p>
          <div className="w-full h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
