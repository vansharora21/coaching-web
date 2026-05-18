import { Link } from 'react-router-dom';
import logo from './images/3.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 overflow-hidden text-on-primary" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-7">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Lakshya Coaching Classes logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-primary-fixed-dim max-w-sm">Designed for better learning outcomes.</p>
          </div>

          <div className="lg:pl-20">
            <h4 className="text-white font-bold mb-7 text-xl">Navigation</h4>
            <ul className="space-y-4">
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#about">About Lakshya</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#why-us">Why Parents Trust Us</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#programs">Our Programs</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#facilities">Facilities</a></li>
              <li><a className="text-primary-fixed-dim hover:text-white transition-colors" href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-7 text-xl">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">location_on</span>
                <span className="text-primary-fixed-dim">2/524, In front of Chitrakoot Stadium, Jaipur</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">call</span>
                <span className="text-primary-fixed-dim">+91 9950803030</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary-fixed group-hover:scale-110 transition-transform">schedule</span>
                <span className="text-primary-fixed-dim">Monday - Saturday | 4 PM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim/60 text-sm text-center md:text-left">
            2026 Lakshya Coaching Classes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed text-sm">school</span>
            <span className="text-primary-fixed text-sm font-bold">Designed for better learning outcomes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
