import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 overflow-hidden text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {/* Branding & Map */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <span className="text-headline-sm font-display-lg font-bold tracking-tight">Academy Elite</span>
            </Link>
            <p className="text-primary-fixed-dim max-w-sm">Engineering the future of education with passion, precision, and personalized care for every student.</p>
            <div className="rounded-2xl overflow-hidden h-48 border border-white/10 grayscale opacity-60 hover:grayscale-0 transition-all">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234!2d77.1234!3d28.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjIiTiA3N8KwMDcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-20">
            <h4 className="text-white font-bold mb-8 text-xl">Navigation</h4>
            <ul className="space-y-4">
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#programs">Our Programs</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#about">About the Academy</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#faculty">Expert Faculty</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#results">Hall of Fame</a></li>
              <li><Link className="text-primary-fixed-dim hover:text-white transition-colors" to="/inquire">Book a Demo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xl">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">location_on</span>
                <span className="text-primary-fixed-dim">123 Academic Blvd, Suite 500, Education City, EC 54321</span>
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

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim/40 text-sm text-center md:text-left">
            © 2024 Academy Elite. Engineering the future of education.
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
