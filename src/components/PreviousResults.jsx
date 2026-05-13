import React from 'react';
import { motion } from 'framer-motion';

const PreviousResults = () => {
  const toppers = [
    { name: "Rahul S.", score: "98.5%", board: "CBSE Class 10", year: "2024", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
    { name: "Priya M.", score: "97.2%", board: "ICSE Class 10", year: "2024", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=200&auto=format&fit=crop" },
    { name: "Ishan K.", score: "96.8%", board: "CBSE Class 10", year: "2024", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { name: "Ananya V.", score: "99.0%", board: "Olympiad Gold", year: "2023", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="results">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Academic Brilliance</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Previous Year Hall of Fame</h3>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((topper, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-fixed group-hover:border-primary transition-colors shadow-lg">
                <img src={topper.img} alt={topper.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="text-display-lg-mobile font-bold text-primary mb-1">{topper.score}</div>
              <h4 className="font-bold text-lg text-primary">{topper.name}</h4>
              <p className="text-secondary text-sm font-semibold">{topper.board} • {topper.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousResults;
