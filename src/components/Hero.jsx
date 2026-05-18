import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './images/3.jpeg';
import classroom from './images/4.jpeg';

const Hero = () => {
  return (
    <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-surface-bright">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,245,224,0.95),rgba(255,255,255,0.72)_44%,rgba(211,229,241,0.82))]"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-12 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-on-secondary-container rounded-full text-label-caps uppercase font-bold shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Classes 1 to 10 | All Subjects Covered | Personal Attention Guaranteed
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary max-w-3xl mx-auto lg:mx-0">
            Lakshya Coaching Classes <span className="text-gradient">Building Strong Foundations for a Brighter Future</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0">
            Where every child learns with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link to="/inquire">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                Inquire Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
            <a href="#programs" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white border border-outline-variant/50 text-primary rounded-full font-bold text-lg hover:border-primary/40 hover:bg-primary/5 transition-all active:scale-95">
                View Programs
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6">
            {[
              ['location_on', 'Jaipur Location'],
              ['groups', 'Experienced Faculty'],
              ['menu_book', 'CBSE / RBSE Curriculum'],
              ['psychology', 'Concept-Based Learning']
            ].map(([icon, label]) => (
              <div key={label} className="rounded-xl bg-white/80 border border-outline-variant/30 p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                <div className="text-[12px] md:text-sm text-secondary font-bold leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-tertiary-fixed opacity-70 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              alt="Lakshya Coaching Classes classroom"
              className="w-full object-cover aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5]"
              src={classroom}
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 left-4 md:-left-6 glass-panel p-5 md:p-6 rounded-xl shadow-xl max-w-[230px] md:max-w-[260px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logo} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-primary text-sm md:text-base">Lakshya Jr. Classes</div>
                <div className="text-[10px] md:text-[12px] text-secondary font-semibold">Classes I-X, all subjects</div>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '86%' }} transition={{ duration: 1.5 }} className="h-full bg-primary"></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
