
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover rounded-xl overflow-hidden bg-card"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className={cn(
                "text-xs py-1 px-2 rounded-full text-white", 
                i % 3 === 0 ? "bg-primary/80" : 
                i % 3 === 1 ? "bg-secondary/80" : "bg-accent/80"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex space-x-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
