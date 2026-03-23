import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Languify',
    role: 'AI/ML Intern',
    period: 'July 2025 – Aug 2025',
    location: 'Remote',
    description: [
      'Engineered a dual-headed CNN for concurrent digit classification and object detection, achieving 99.2% accuracy.',
      'Developed a Vision Transformer (ViT) model for CIFAR-10 using TensorFlow and Keras.',
      'Contributed to model explainability by visualizing attention maps and tuning hyperparameters.'
    ]
  },
  {
    company: 'Reliance',
    role: 'AI/ML Intern',
    period: 'Dec 2024 – Jan 2025',
    location: 'Jamnagar, Gujarat',
    description: [
      'Developed and deployed predictive ML models for Gasifier Reactor Refractory Run Length Prediction.',
      'Analyzed large-scale operational data from 10+ industrial gasifiers, identifying correlations.',
      'Delivered actionable insights that contributed to data-driven decision-making in plant operations.'
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <Briefcase className="text-electric" /> EXPERIENCE
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-zinc-800"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-electric rounded-full shadow-[0_0_10px_#00f2ff]" />
              
              <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-electric font-mono text-sm tracking-wide">{exp.company}</p>
                </div>
                <div className="flex flex-col items-end text-zinc-500 font-mono text-xs gap-1">
                  <div className="flex items-center gap-2"><Calendar size={14} /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} /> {exp.location}</div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-400 leading-relaxed flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-zinc-700 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
