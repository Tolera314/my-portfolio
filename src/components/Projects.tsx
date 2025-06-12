import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A modern dashboard for e-commerce platforms with real-time analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
      tags: ['React', 'Tailwind CSS', 'Redux'],
      liveLink: '#',
      githubLink: '#',
      category: 'Web App',
    },
    {
      title: 'Travel Blog',
      description: 'A responsive travel blog with dynamic content loading and a custom CMS for easy updates.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['JavaScript', 'CSS3', 'Firebase'],
      liveLink: '#',
      githubLink: '#',
      category: 'Website',
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application with workout plans and progress visualization.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['React Native', 'TypeScript', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      category: 'Mobile App',
    },
    {
      title: 'Portfolio Website',
      description: 'A creative portfolio website for a photographer with a custom image gallery and contact form.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      category: 'Website',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Take a look at some of my featured projects that showcase my skills and passion for web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          {/* Optional View All Projects link */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
