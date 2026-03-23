import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Target, Scan } from 'lucide-react';
import { PROJECT_LINKS } from '../constants';

const projects = [
  {
    title: 'Advanced Vision Transformer (ViT)',
    tech: 'Python, TensorFlow, Keras',
    description: 'Architected a ViT model including a custom PatchEncoder for linear projection and 8-layer Transformer encoder.',
    icon: <Layers />,
    image: 'https://picsum.photos/seed/transformer/800/600',
    link: PROJECT_LINKS.VIT
  },
  {
    title: 'Deep Learning Landmark Detection',
    tech: 'Python, VGG19, OpenCV',
    description: 'Developed a landmark classification model using Transfer Learning (VGG19), integrating Batch Normalization.',
    icon: <Target />,
    image: 'https://picsum.photos/seed/landmark/800/600',
    link: PROJECT_LINKS.LANDMARK
  },
  {
    title: 'Intelligent License Plate Recognition',
    tech: 'Python, Flask, OpenCV, Tesseract',
    description: 'Developed a Flask-based web app for real-time Indian license plate detection using Haar cascades.',
    icon: <Scan />,
    image: 'https://picsum.photos/seed/vision/800/600',
    link: PROJECT_LINKS.LICENSE_PLATE
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">SELECTED_WORKS</h2>
          <div className="h-1 w-24 bg-electric" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-surface border border-dark-border overflow-hidden rounded-sm"
            >
              <div className="aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-electric">
                  {project.icon}
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    {project.tech}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 glass hover:bg-electric hover:text-black transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 glass hover:bg-electric hover:text-black transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-electric opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
