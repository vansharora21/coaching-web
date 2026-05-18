import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 overflow-hidden text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-7">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <span className="text-headline-sm font-display-lg font-bold">Academy Elite</span>
            </Link>
            <p className="text-primary-fixed-dim max-w-sm">Premium coaching for Classes 1-10 with structured teaching, weekly testing, and visible progress.</p>
            <Link to="/inquire" className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full font-bold">
              Inquire now <span className="material-symbols-outlined text-[18px]">east</span>
            </Link>
          </div>

          <div className="lg:pl-20">
            <h4 className="text-white font-bold mb-7 text-xl">Navigation</h4>
            <ul className="space-y-4">
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#programs">Our Programs</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#about">About the Academy</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#faculty">Expert Faculty</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#results">Hall of Fame</a></li>
              <li><Link className="text-primary-fixed-dim hover:text-white transition-colors" to="/inquire">Inquire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-7 text-xl">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">location_on</span>
                <span className="text-primary-fixed-dim">123 Academic Blvd, Education City</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">call</span>
                <span className="text-primary-fixed-dim">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">mail</span>
                <span className="text-primary-fixed-dim">hello@academyelite.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim/60 text-sm text-center md:text-left">
            Copyright 2026 Academy Elite. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed text-sm">verified</span>
            <span className="text-primary-fixed text-sm font-bold">ISO 9001:2015 Certified Institute</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
