import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
  const teachers = [
    {
      name: "Dr. Vikram Seth",
      subject: "Mathematics & Physics",
      exp: "15+ Years",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      subject: "English Literature",
      exp: "10+ Years",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Amitabh Raj",
      subject: "Science & Technology",
      exp: "12+ Years",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-low" id="faculty">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Our Experts</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Learn from the Best Minds</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden card-shadow hover:-translate-y-2 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="text-label-caps text-secondary uppercase mb-2">{teacher.subject}</div>
                <h4 className="text-headline-sm text-primary mb-1">{teacher.name}</h4>
                <p className="text-on-surface-variant font-semibold">{teacher.exp} Teaching Experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
