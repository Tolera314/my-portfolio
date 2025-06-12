
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './contact/ContactForm';
import ContactSidebar from './contact/ContactSidebar';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ContactSidebar />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
