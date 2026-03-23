import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Cpu, Brain, Database, Code2, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-12 bg-electric" />
            <span className="text-electric font-mono text-sm tracking-widest uppercase">AI / ML Engineer</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
            ANSH <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>JHA</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Specializing in Computer Vision and Deep Learning. Building the next generation of 
            intelligent systems with a focus on high-performance neural architectures.
          </p>

          <div className="flex flex-wrap gap-6">
            <FlashButton 
              href={SOCIAL_LINKS.GITHUB} 
              icon={<Github size={20} />} 
              label="GitHub" 
              description="Check my repos"
            />
            <FlashButton 
              href={SOCIAL_LINKS.LINKEDIN} 
              icon={<Linkedin size={20} />} 
              label="LinkedIn" 
              description="Connect with me"
            />
            <FlashButton 
              href={SOCIAL_LINKS.RESUME} 
              icon={<FileText size={20} />} 
              label="Resume" 
              description="Download PDF"
            />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-electric text-black font-bold rounded-sm flex items-center gap-2 hover:bg-white transition-colors"
            >
              HIRE ME <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute right-10 bottom-20 hidden lg:block opacity-10">
        <div className="grid grid-cols-2 gap-12">
          <Cpu size={120} className="text-electric animate-pulse" />
          <Brain size={120} className="text-white" />
          <Database size={120} className="text-white" />
          <Code2 size={120} className="text-electric animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const FlashButton = ({ href, icon, label, description }: { href: string, icon: React.ReactNode, label: string, description: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-4 glass rounded-sm overflow-hidden min-w-[200px]"
      whileHover={{ x: 10 }}
    >
      <div className="absolute inset-0 bg-electric/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
      <div className="p-2 bg-zinc-800 rounded-sm text-electric group-hover:bg-electric group-hover:text-black transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm tracking-tight">{label}</div>
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">{description}</div>
      </div>
    </motion.a>
  );
};
