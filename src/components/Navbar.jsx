import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './images/3.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Why Us', path: '/#why-us' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Facilities', path: '/#facilities' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] glass-panel shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0" onClick={() => setIsOpen(false)}>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center shadow-md shadow-primary/10 overflow-hidden border border-outline-variant/30">
            <img src={logo} alt="Lakshya Coaching Classes logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-white/60 border border-outline-variant/30 rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="px-4 py-2 rounded-full text-sm font-semibold text-secondary transition-colors hover:bg-white hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/inquire">
            <button className="px-5 py-2.5 md:px-6 bg-primary text-on-primary rounded-full font-semibold hover:bg-primary/90 transition-all active:scale-95 shadow-md shadow-primary/20 text-sm md:text-base">
              Inquire
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-outline-variant/30 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors py-3"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
