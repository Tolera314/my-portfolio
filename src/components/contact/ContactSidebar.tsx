
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const ContactSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-2 space-y-8"
    >
      <h3 className="text-2xl font-bold">Contact Information</h3>
      <p className="text-muted-foreground">
        Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
      </p>

      <ContactInfo />
      <SocialLinks />
    </motion.div>
  );
};

export default ContactSidebar;
