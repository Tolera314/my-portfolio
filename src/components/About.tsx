
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Lightbulb, UserRound } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code following best practices and design patterns.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices is a priority in my development workflow.',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex problems and finding efficient, elegant solutions.',
    },
    {
      icon: <UserRound className="h-6 w-6" />,
      title: 'User-Focused',
      description: 'I build applications with the end user in mind, prioritizing usability and accessibility.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Get to know more about me and what drives my passion for front-end development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="photo-1498050108023-c5249f4df085.avif"
                  alt="Coding Setup"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I'm a passionate Front-end Developer with a love for creating beautiful web experiences
            </h3>
            <p className="text-muted-foreground">
              As a fourth-year Software Engineering student, I've developed a strong foundation in software development principles and practices. My journey has equipped me with problem-solving skills and attention to detail that I apply to every project.
            </p>
            <p className="text-muted-foreground">
              I specialize in modern web technologies like React, Tailwind CSS, and JavaScript, creating responsive and user-friendly interfaces. I'm committed to writing clean, maintainable code and continuously learning new technologies to stay at the forefront of web development.
            </p>
            <a href="#contact" className="btn-gradient inline-block">
              Let's Talk
            </a>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border p-6 relative"
            >
              <div className="relative z-10">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
