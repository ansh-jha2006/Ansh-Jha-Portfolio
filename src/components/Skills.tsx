import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Layers, Cpu, Globe } from 'lucide-react';

const skills = [
  { name: 'Python', level: 'Advanced', icon: <Terminal />, category: 'Languages' },
  { name: 'TensorFlow', level: 'Expert', icon: <Layers />, category: 'Frameworks' },
  { name: 'PyTorch', level: 'Advanced', icon: <Cpu />, category: 'Frameworks' },
  { name: 'OpenCV', level: 'Expert', icon: <Globe />, category: 'Libraries' },
  { name: 'C++', level: 'Intermediate', icon: <Code2 />, category: 'Languages' },
  { name: 'MySQL', level: 'Advanced', icon: <Database />, category: 'Tools' },
];

export const Skills = () => {
  return (
    <section className="py-24 px-6 bg-dark-surface border-y border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">TECHNICAL_CORE</h2>
            <p className="text-zinc-500 font-mono text-sm">SYSTEM_CAPABILITIES_V2.0</p>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-zinc-700">
            01000001 01001001 00100000 01001101 01001100
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-bg p-8 group hover:bg-zinc-900 transition-colors cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-electric group-hover:scale-110 transition-transform">
                  {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '80%' : '60%' }}
                    className="h-full bg-electric"
                  />
                </div>
                <span className="text-[10px] font-mono text-electric">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
