import { motion } from 'framer-motion';
import classroomCard from './images/4.jpeg';

const About = () => {
  const points = [
    'High-quality education for students from Classes 1 to 10',
    'Strong conceptual understanding beyond syllabus completion',
    'Structured learning methods with a supportive environment'
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
              alt="Lakshya students during a classroom test"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              src={classroomCard}
            />
          </div>
          <div className="absolute -bottom-8 right-4 md:right-10 bg-white rounded-xl card-shadow border border-outline-variant/30 p-5 max-w-xs">
            <div className="text-label-caps text-secondary uppercase mb-2">Learning Method</div>
            <div className="text-primary font-bold text-xl">Padhai. Practice. Progress.</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 pt-8 lg:pt-0"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase font-bold tracking-widest">About Lakshya Coaching Classes</h2>
          <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-primary leading-tight">Focused learning for Classes 1 to 10.</h3>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Lakshya Coaching Classes is dedicated to providing high-quality education for students from Classes 1 to 10.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Our focus is not just on completing the syllabus, but on building strong conceptual understanding that helps students excel academically and develop confidence.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            With experienced teachers, structured learning methods, and a supportive environment, we ensure that every student gets the attention they deserve.
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
