import React from 'react';
import { motion } from 'framer-motion';

const EliteEdge = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-section-gap bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4 font-bold tracking-widest">The Elite Ecosystem</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Nurturing Excellence, Empowering Potential</h3>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[160px]"
        >
          {/* Smart Class */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-2 glass-panel p-8 rounded-3xl shadow-sm flex flex-col justify-between group hover:bg-white transition-all">
            <span className="material-symbols-outlined text-5xl text-primary group-hover:scale-110 transition-transform">smart_display</span>
            <div>
              <h4 className="text-headline-sm text-primary mb-2 font-bold">Smart Classrooms</h4>
              <p className="text-on-surface-variant font-medium">Interactive learning with 3D visuals and professional digital toolsets for modern education.</p>
            </div>
          </motion.div>

          {/* Parent Reports */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-1 bg-primary text-on-primary p-8 rounded-3xl shadow-lg flex items-center gap-6 group hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-4xl text-primary-fixed group-hover:rotate-12 transition-transform">monitoring</span>
            <h4 className="font-bold text-lg leading-tight">Weekly Comprehensive Progress Audits</h4>
          </motion.div>

          {/* Doubt Sessions */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-2 glass-panel p-8 rounded-3xl shadow-sm flex flex-col justify-between border-2 border-primary/10 group hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-5xl text-primary group-hover:rotate-[-12deg] transition-transform">live_help</span>
            <div>
              <h4 className="text-headline-sm text-primary mb-2 font-bold">24/7 Expert Support</h4>
              <p className="text-on-surface-variant font-medium">Get queries resolved instantly via our dedicated learning portal, ensuring no student is left behind.</p>
            </div>
          </motion.div>

          {/* Olympiad Prep */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-1 bg-white p-8 rounded-3xl shadow-sm flex items-center gap-6 border border-outline-variant/30 group hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-4xl text-on-primary-container group-hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            <h4 className="font-bold text-lg">Olympiad Training Excellence</h4>
          </motion.div>

          {/* Strategy */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 row-span-1 bg-secondary-fixed text-on-secondary-fixed p-8 rounded-3xl shadow-sm flex items-center gap-6 group hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-4xl">strategy</span>
            <h4 className="font-bold text-lg leading-tight">Advanced Board Examination Mastery Strategies</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EliteEdge;
