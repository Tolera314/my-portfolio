
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { icon: <Github className="h-5 w-5" />, link: 'https://github.com' },
    { icon: <Linkedin className="h-5 w-5" />, link: 'https://linkedin.com' },
    { icon: <Instagram className="h-5 w-5" />, link: 'https://instagram.com' },
  ];

  return (
    <div>
      <h4 className="font-medium mb-3">Find me on</h4>
      <div className="flex space-x-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
