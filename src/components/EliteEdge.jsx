import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EliteEdge = () => {
  const pillars = [
    {
      label: '01',
      title: 'Concept First Teaching',
      text: 'Every chapter starts with the why, not shortcuts. Students build the base before moving into speed and exam patterns.',
      icon: 'auto_stories'
    },
    {
      label: '02',
      title: 'Practice With Feedback',
      text: 'Classwork, worksheets, and doubt correction happen in one loop so mistakes are fixed while the topic is still fresh.',
      icon: 'edit_note'
    },
    {
      label: '03',
      title: 'Weekly Score Review',
      text: 'Short assessments track accuracy, presentation, speed, and weak topics. Parents get updates that are easy to act on.',
      icon: 'analytics'
    }
  ];

  const outcomes = [
    ['Small batches', 'Focused teacher attention'],
    ['Chapter tests', 'Every week, not just before exams'],
    ['Parent updates', 'Clear progress and next steps'],
    ['Exam discipline', 'Revision plans and answer practice']
  ];

  return (
    <section className="py-section-gap bg-primary text-on-primary overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-primary-fixed text-label-caps uppercase font-bold">
              <span className="material-symbols-outlined text-[17px]">school</span>
              The Elite Ecosystem
            </div>
            <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg">
              A serious study system, not just extra classes.
            </h3>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl">
              The section that matters most is the daily learning loop: clear teaching, guided practice, honest testing, and correction before the next chapter begins.
            </p>
            <Link to="/inquire" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-primary-fixed transition-colors">
              Inquire now <span className="material-symbols-outlined text-[18px]">east</span>
            </Link>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-5 bg-white text-primary rounded-xl p-6 md:p-7 border border-white/10 shadow-xl shadow-black/10"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <div>
                  <div className="text-label-caps text-secondary uppercase mb-2">{pillar.label}</div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{pillar.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {outcomes.map(([title, text]) => (
                <div key={title} className="rounded-xl border border-white/15 bg-white/10 p-5">
                  <div className="font-bold text-white mb-1">{title}</div>
                  <div className="text-sm text-primary-fixed-dim">{text}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteEdge;
