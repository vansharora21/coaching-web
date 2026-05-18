import { motion } from 'framer-motion';

const Faculty = () => {
  const teachers = [
    {
      name: 'Dr. Vikram Seth',
      subject: 'Mathematics & Physics',
      exp: '15+ Years',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      subject: 'English & Social Science',
      exp: '10+ Years',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Amitabh Raj',
      subject: 'Science & Technology',
      exp: '12+ Years',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="faculty">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Our Faculty</h2>
          <h3 className="text-headline-md font-display-lg text-primary">Experienced teachers who know the school journey</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden card-shadow border border-outline-variant/30 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/4] overflow-hidden">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="text-label-caps text-secondary uppercase mb-2">{teacher.subject}</div>
                <h4 className="text-headline-sm text-primary mb-1">{teacher.name}</h4>
                <p className="text-on-surface-variant font-semibold">{teacher.exp} teaching experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
