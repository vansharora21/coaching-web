import { motion } from 'framer-motion';

const Admission = () => {
  const steps = [
    {
      title: 'Inquiry',
      desc: "Tell us your child's class, board, and current academic needs.",
      icon: 'chat_bubble'
    },
    {
      title: 'Counseling',
      desc: 'A mentor reviews strengths, gaps, school schedule, and exam goals.',
      icon: 'psychology'
    },
    {
      title: 'Class Fit',
      desc: 'Understand the teaching style, batch level, and subject plan before joining.',
      icon: 'visibility'
    },
    {
      title: 'Batch Plan',
      desc: 'Receive a clear timetable, test plan, and parent update cadence.',
      icon: 'verified'
    }
  ];

  return (
    <section className="py-section-gap relative overflow-hidden" id="admission">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Admissions</h2>
          <h3 className="text-headline-md font-display-lg text-primary">A simple start, then a serious academic plan</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-7 bg-white rounded-xl card-shadow border border-outline-variant/30 hover:border-primary/20 transition-colors"
            >
              <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <div className="absolute top-7 right-7 text-5xl font-bold text-primary/5">{idx + 1}</div>
              <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admission;
