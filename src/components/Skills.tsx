
import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', icon: '/react.svg', progress: 80 },
    { name: 'JavaScript', icon: '/javascript.svg', progress: 85 },
    { name: 'Tailwind CSS', icon: '/tailwind.svg', progress: 85 },
    { name: 'HTML5', icon: '/html5.svg', progress: 90 },
    { name: 'CSS3', icon: '/css3.svg', progress: 85 },
  ];

  const otherSkills = [
    { name: 'Node.js', icon: '/nodejs.svg', progress: 65 },
    { name: 'Git', icon: '/git.svg', progress: 80 },
    { name: 'Figma', icon: '/figma.svg', progress: 55 },
    
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in the web development ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-2">F</span>
              Frontend Development
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  progress={skill.progress}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white mr-2">O</span>
              Other Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  progress={skill.progress}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-6 bg-card rounded-xl border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-4xl font-bold text-primary mb-2">3+</h4>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
