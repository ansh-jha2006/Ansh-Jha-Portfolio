import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bolt {
  id: number;
  x: number;
  y: number;
  points: string;
}

export const ThunderboltCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bolts, setBolts] = useState<Bolt[]>([]);
  const boltIdCounter = useRef(0);
  const lastBoltTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Generate a bolt occasionally when moving
      const now = Date.now();
      if (now - lastBoltTime.current > 150) {
        createBolt(e.clientX, e.clientY);
        lastBoltTime.current = now;
      }
    };

    const createBolt = (x: number, y: number) => {
      const id = boltIdCounter.current++;
      const segments = 4;
      let currentX = x;
      let currentY = y;
      let points = `${currentX},${currentY}`;

      for (let i = 0; i < segments; i++) {
        currentX += (Math.random() - 0.5) * 40;
        currentY += 15 + Math.random() * 20;
        points += ` ${currentX},${currentY}`;
      }

      const newBolt: Bolt = { id, x, y, points };
      setBolts((prev) => [...prev.slice(-10), newBolt]);

      setTimeout(() => {
        setBolts((prev) => prev.filter((b) => b.id !== id));
      }, 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block" 
        style={{ left: position.x, top: position.y }} 
      />
      <div 
        className="cursor-outline hidden md:block" 
        style={{ left: position.x, top: position.y }} 
      />
      
      <svg className="fixed inset-0 pointer-events-none z-[9997] w-full h-full">
        <AnimatePresence>
          {bolts.map((bolt) => (
            <motion.polyline
              key={bolt.id}
              points={bolt.points}
              fill="none"
              stroke="#00f2ff"
              strokeWidth="2"
              initial={{ opacity: 1, pathLength: 0 }}
              animate={{ opacity: 0, pathLength: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
            />
          ))}
        </AnimatePresence>
      </svg>
    </>
  );
};
