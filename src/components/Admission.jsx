import { motion } from 'framer-motion';
import vanPoster from './images/1.jpeg';

const Admission = () => {
  const steps = [
    {
      title: 'Van Facility Available',
      desc: 'Convenient transport support for students and parents.',
      icon: 'directions_bus'
    },
    {
      title: 'Small Batch Sizes',
      desc: 'Focused classroom groups so every child receives attention.',
      icon: 'groups'
    },
    {
      title: 'Progress Reports for Parents',
      desc: 'Clear updates on tests, improvement areas, and next steps.',
      icon: 'bar_chart'
    },
    {
      title: 'Weekly Doubt Sessions',
      desc: 'Regular support to clear doubts before they become learning gaps.',
      icon: 'help'
    },
    {
      title: 'Homework & Test Support',
      desc: 'Guided help with assignments, revision, and exam preparation.',
      icon: 'fact_check'
    }
  ];

  return (
    <section className="py-section-gap relative overflow-hidden" id="facilities">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Facilities We Provide</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Practical support for students and parents</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 items-stretch">
          <div className="rounded-xl overflow-hidden card-shadow border border-outline-variant/30 bg-white">
            <img src={vanPoster} alt="Lakshya Coaching Classes van facility" className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default Admission;
