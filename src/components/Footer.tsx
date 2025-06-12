
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
  <footer>    
  <div className="border-t border-border mt-8 pt-8 flex justify-center">
    <p className="text-muted-foreground text-sm text-center">
      © {currentYear} Tolera Fayisa. All rights reserved.
    </p>       
  </div>
</footer>

  );
};

export default Footer;
