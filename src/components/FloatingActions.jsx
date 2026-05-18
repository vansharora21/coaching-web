import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      id: 'call',
      icon: 'call',
      link: 'tel:+15551234567',
      label: 'Call'
    },
    {
      id: 'whatsapp',
      icon: 'forum',
      link: 'https://wa.me/15551234567',
      label: 'WhatsApp',
      external: true
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-primary border border-outline-variant/40 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="glass-panel rounded-full shadow-xl shadow-primary/10 p-1.5 flex items-center gap-1.5">
        {actions.map((action) => (
          <motion.a
            key={action.id}
            href={action.link}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-primary border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label={action.label}
          >
            <span className="material-symbols-outlined text-[22px]">{action.icon}</span>
            <span className="pointer-events-none absolute right-0 bottom-full mb-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all whitespace-nowrap">
              {action.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FloatingActions;
