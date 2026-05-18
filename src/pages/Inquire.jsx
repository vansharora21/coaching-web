import { motion } from 'framer-motion';

const Inquire = () => {
  const details = [
    ['location_on', '123 Academic Blvd, Education City'],
    ['call', '+1 (555) 123-4567'],
    ['mail', 'hello@academyelite.com'],
    ['schedule', 'Mon-Sat, 9:00 AM - 8:00 PM']
  ];

  return (
    <div className="pt-32 pb-24 bg-surface-container-lowest min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-4">Inquire about admissions</h1>
          <p className="text-body-lg text-secondary">Share a few details and our counselor will help you choose the right batch, subject plan, and demo timing.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 md:p-9 rounded-xl card-shadow border border-outline-variant/30"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-secondary uppercase font-bold">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Current Class</label>
                  <select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors">
                    <option>Class 1-3</option>
                    <option>Class 4-5</option>
                    <option>Class 6-8</option>
                    <option>Class 9-10</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Interested In</label>
                  <select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors">
                    <option>Complete coaching</option>
                    <option>Math and Science</option>
                    <option>English and Social Science</option>
                    <option>Board exam crash course</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-secondary uppercase font-bold">Message / Queries</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary transition-colors" placeholder="Tell us what your child needs help with."></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-primary p-8 rounded-xl text-on-primary shadow-xl">
              <h4 className="text-headline-sm mb-6">Talk to an academic counselor</h4>
              <div className="space-y-5">
                {details.map(([icon, text]) => (
                  <div key={text} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-fixed">{icon}</span>
                    <p className="text-primary-fixed-dim">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-outline-variant/30 card-shadow">
              <div className="text-label-caps text-on-primary-container uppercase mb-3">What happens next?</div>
              <ul className="space-y-4 text-on-surface-variant">
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span>We call to understand the student profile.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span>You receive batch and subject options.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span>A mentor recommends the right batch and plan.</span></li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow h-[280px] border border-outline-variant/30">
              <iframe
                title="Academy Elite location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234!2d77.1234!3d28.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjIiTiA3N8KwMDcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Inquire;
