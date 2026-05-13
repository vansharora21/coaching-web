import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    { 
      id: 'whatsapp', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670051.png', 
      color: 'bg-[#25D366]', 
      link: 'https://wa.me/15551234567',
      label: 'WhatsApp'
    },
    { 
      id: 'call', 
      icon: 'call', 
      isIcon: true,
      color: 'bg-primary', 
      link: 'tel:+15551234567',
      label: 'Call'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col gap-4 z-[100] items-end">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-primary rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-outline-variant/30"
          >
            <span className="material-symbols-outlined">arrow_upward</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable Contact FAB */}
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col gap-3 mb-3 items-end"
            >
              {actions.map((action) => (
                <motion.a
                  key={action.id}
                  href={action.link}
                  target={action.id === 'whatsapp' ? '_blank' : undefined}
                  rel={action.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  className={`${action.color} text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-3 group`}
                >
                  <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md pointer-events-none">
                    {action.label}
                  </span>
                  {action.isIcon ? (
                    <span className="material-symbols-outlined text-2xl">{action.icon}</span>
                  ) : (
                    <img src={action.icon} alt={action.label} className="w-6 h-6" />
                  )}
                  <span className="font-bold hidden md:block">{action.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-95 z-50 ${isOpen ? 'bg-inverse-surface text-inverse-on-surface rotate-45' : 'bg-primary text-on-primary'}`}
        >
          <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'add_call'}</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
