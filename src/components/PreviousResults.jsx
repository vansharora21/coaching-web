import { motion } from 'framer-motion';
import lakshyaLogo from './images/3.jpeg';

const PreviousResults = () => {
  const toppers = [
    { name: 'Class X Batch', score: 'Board', board: 'Maths & Science', year: 'Regular tests' },
    { name: 'Class IX Batch', score: 'Core', board: 'Social Science', year: 'Answer writing' },
    { name: 'Class VI-VIII', score: 'Base', board: 'All subjects', year: 'Weekly practice' },
    { name: 'Class I-V', score: 'Junior', board: 'Foundation classes', year: 'Homework support' }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="results">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Academic Brilliance</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Previous year hall of fame</h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, idx) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl p-6 border border-outline-variant/30 card-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary-fixed group-hover:border-primary transition-colors">
                  <img src={lakshyaLogo} alt="" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">{topper.name}</h4>
                  <p className="text-secondary text-sm font-semibold">{topper.board}</p>
                </div>
              </div>
              <div className="text-display-lg-mobile font-bold text-primary mb-1">{topper.score}</div>
              <p className="text-secondary text-sm font-semibold">{topper.year} result</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousResults;
