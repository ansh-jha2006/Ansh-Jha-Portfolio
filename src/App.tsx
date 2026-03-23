/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThunderboltCursor } from './components/ThunderboltCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SOCIAL_LINKS } from './constants';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-electric selection:text-black">
      <ThunderboltCursor />
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-electric z-[101] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        
        <div id="skills">
          <Skills />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-dark-border bg-dark-surface text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase mb-4">
            Designed & Developed by Ansh Jha © 2026
          </p>
          <div className="flex justify-center gap-6 text-zinc-400">
            <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="hover:text-electric transition-colors">GITHUB</a>
            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-electric transition-colors">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
