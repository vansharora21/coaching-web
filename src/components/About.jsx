import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-section-gap bg-surface-container-lowest overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase font-bold tracking-widest">Why Academy Elite?</h2>
          <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-primary leading-tight">Engineering the Future of Education.</h3>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            We believe that education is not just about memorizing facts, but about learning to think critically and solve problems. Our holistic approach ensures every student receives the attention they deserve.
          </p>
          <ul className="space-y-5 pt-4">
            {[
              "Small Batch Sizes for Individual Focus",
              "Highly Experienced Faculty & Mentors",
              "Regular Parent-Teacher Sync-ups"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-primary text-white p-1 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div className="font-semibold text-primary">{item}</div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-[2rem] overflow-hidden card-shadow relative group">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              alt="Elite Learning Environment" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
