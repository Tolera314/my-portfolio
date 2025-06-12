import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Ethio-Digital-Academy',
      description: 'An educational platform designed to provide accessible digital learning resources for Ethiopian students. Features include video tutorials, downloadable materials, and interactive lessons across various subjects.',
      image: 'ethio_digital.png',
      tags: ['typescript', 'Tailwind CSS'],
      // liveLink: '#',
      githubLink: 'https://github.com/Tolera314/ethio-digital-learning',
      category: 'Website',
    },
    {
      title: 'Wether App',
      description: 'A sleek and responsive weather application that provides real-time weather updates based on user location or searched cities. Built with clean UI and API integration to display temperature, conditions, and forecasts.',
      image: 'wether_app.png',
      tags: ['JavaScript', 'Tailwind CSS', 'OpenWeatherMap API'],
      // liveLink: '#',
      githubLink: 'https://github.com/Tolera314/weather-app',
      category: 'Website',
    },

    {
      title: 'My Portfolio',
      description: 'A creative portfolio website built to showcase my work as a front-end developer, featuring a custom project gallery and a fully functional contact form for collaboration opportunities.',
      image: 'portfolio.png',
      tags: ['typescript', 'tailwind', 'JavaScript'],
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
