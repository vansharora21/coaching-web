import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-surface-bright">
      {/* Floating Particles */}

      <motion.span
        animate={{ y: [0, 20, 0], rotate: [-10, -15, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="material-symbols-outlined academic-particle text-[60px] md:text-[80px] bottom-40 right-[5%]"
      >science</motion.span>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-label-caps uppercase font-bold">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Top-Rated Coaching 2024
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary leading-tight">
            Building Strong <span className="text-gradient">Foundations</span> for Future Success
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto md:mx-0">
            Personalized coaching for Classes 1–10. We blend academic excellence with confidence-building mentorship to prepare students for the world of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link to="/inquire">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                Book Free Demo
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
            <a href="#programs" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-all active:scale-95">
                Explore Courses
              </button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 md:pt-12 border-t border-outline-variant/30">
            {[{ v: "1000+", l: "Students" }, { v: "95%", l: "Success" }, { v: "10+", l: "Years" }].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-headline-md font-bold text-primary">{s.v}</div>
                <div className="text-[10px] md:text-label-caps text-secondary uppercase font-bold">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-primary-fixed opacity-20 blur-3xl rounded-full"></div>
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              alt="Elite Student"
              className="w-full h-auto object-cover aspect-[4/5]"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-4 md:-left-6 glass-panel p-5 md:p-6 rounded-2xl shadow-xl max-w-[200px] md:max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div>
                <div className="font-bold text-primary text-sm md:text-base">Board Prep</div>
                <div className="text-[10px] md:text-[12px] text-secondary font-semibold">Expert Guidance</div>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1.5 }} className="h-full bg-primary"></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
