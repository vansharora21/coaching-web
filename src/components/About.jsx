import { motion } from 'framer-motion';

const About = () => {
  const points = [
    'Small batches with individual attention',
    'Weekly assessments with correction classes',
    'Parent updates that explain progress clearly'
  ];

  return (
    <section className="py-section-gap bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden card-shadow relative group border border-white">
            <img
              alt="Teacher guiding students during a focused study session"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop"
            />
          </div>
          <div className="absolute -bottom-8 right-4 md:right-10 bg-white rounded-xl card-shadow border border-outline-variant/30 p-5 max-w-xs">
            <div className="text-label-caps text-secondary uppercase mb-2">Learning Method</div>
            <div className="text-primary font-bold text-xl">Teach. Test. Correct. Repeat.</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 pt-8 lg:pt-0"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase font-bold tracking-widest">Why Academy Elite?</h2>
          <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-primary leading-tight">A coaching system built around how students actually improve.</h3>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Students do not need more pressure. They need structure, clear explanations, timely practice, and mentors who notice when a topic has not landed yet.
          </p>
          <ul className="space-y-4 pt-2">
            {points.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/70 border border-outline-variant/30 rounded-xl p-4"
              >
                <div className="bg-primary text-white p-1 rounded-full flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div className="font-semibold text-primary">{item}</div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
