import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter"
        >
          <div className="w-8 h-8 bg-electric flex items-center justify-center text-black">
            <Terminal size={18} />
          </div>
          ANSH_JHA
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-12 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400"
        >
          <a href="#" className="hover:text-electric transition-colors">Home</a>
          <a href="#projects" className="hover:text-electric transition-colors">Projects</a>
          <a href="#experience" className="hover:text-electric transition-colors">Experience</a>
          <a href="#contact" className="hover:text-electric transition-colors">Contact</a>
        </motion.div>
      </div>
    </nav>
  );
};
