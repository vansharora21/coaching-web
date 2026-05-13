import React from 'react';
import { motion } from 'framer-motion';

const Admission = () => {
  const steps = [
    {
      title: "Discovery Inquiry",
      desc: "Connect with us to begin your child's transformative educational path.",
      icon: "chat_bubble"
    },
    {
      title: "Strategic Counseling",
      desc: "Detailed evaluation of academic goals with our master mentors.",
      icon: "psychology"
    },
    {
      title: "Experience Session",
      desc: "Direct interaction with our unique teaching philosophy in a live demo.",
      icon: "visibility"
    },
    {
      title: "Empowered Enrollment",
      desc: "Seamless integration into the Academy Elite learning ecosystem.",
      icon: "verified"
    }
  ];

  return (
    <section className="py-section-gap relative overflow-hidden" id="admission">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Strategic Enrollment</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Your Path to Global Leadership</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-white rounded-3xl card-shadow border border-outline-variant/30 hover:border-primary/20 transition-colors"
            >
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <div className="absolute top-8 right-8 text-display-lg-mobile font-bold text-primary/5">{idx + 1}</div>
              <h4 className="text-headline-sm text-primary mb-3">{step.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admission;
