import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Zap } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${SOCIAL_LINKS.EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8">GET_IN_TOUCH</h2>
            <p className="text-zinc-400 mb-12 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <ContactInfo icon={<Mail />} label="Email" value={SOCIAL_LINKS.EMAIL} />
              <ContactInfo icon={<Phone />} label="Phone" value="+91 9899701580" />
              <ContactInfo icon={<MapPin />} label="Location" value="Chennai, India" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-8 md:p-12 rounded-sm border-glow"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-electric outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-electric outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-4 focus:border-electric outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-electric text-black font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors group"
              >
                SEND_MESSAGE <Zap size={18} className="group-hover:animate-bounce" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-12 h-12 glass flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-black transition-all">
      {icon}
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  </div>
);
