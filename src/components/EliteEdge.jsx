import { motion } from 'framer-motion';

const EliteEdge = () => {
  const pillars = [
    {
      label: '01',
      title: 'Strong Focus on Basics & Concepts',
      text: 'Every chapter starts with fundamentals so students understand the topic before moving to exercises and exams.',
      icon: 'auto_stories'
    },
    {
      label: '02',
      title: 'Experienced and Caring Teachers',
      text: 'Students learn in a supportive environment where teachers explain patiently and track individual needs.',
      icon: 'edit_note'
    },
    {
      label: '03',
      title: 'Regular Tests & Performance Tracking',
      text: 'Tests, revision, and correction help parents and students understand progress clearly.',
      icon: 'analytics'
    }
  ];

  const outcomes = [
    ['Personal attention', 'Every child gets focused support'],
    ['All subjects', 'Covered under one roof'],
    ['Positive environment', 'Calm, disciplined, and encouraging'],
    ['Concept learning', 'Clarity before speed']
  ];

  return (
    <section className="py-section-gap bg-primary text-on-primary overflow-hidden" id="why-us">
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
              Why Choose Us
            </div>
            <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg">
              Why Parents Trust Us
            </h3>
            <p className="text-body-lg text-primary-fixed-dim max-w-xl">
              Lakshya combines strong basics, caring faculty, regular testing, and a disciplined classroom environment for dependable school progress.
            </p>
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
