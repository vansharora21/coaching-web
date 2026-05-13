import React from 'react';
import { motion } from 'framer-motion';

const Inquire = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-container-lowest min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-display-lg font-display-lg text-primary mb-4">Join Academy Elite</h1>
          <p className="text-body-lg text-secondary max-w-2xl mx-auto">Take the first step towards academic excellence. Fill out the form below and our counselor will get in touch with you shortly.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl card-shadow border border-outline-variant/30"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-label-caps text-secondary uppercase font-bold">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-secondary uppercase font-bold">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-secondary uppercase font-bold">Current Class</label>
                <select className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>Class 1–3</option>
                  <option>Class 4–5</option>
                  <option>Class 6–8</option>
                  <option>Class 9–10</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-secondary uppercase font-bold">Message / Queries</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="How can we help your child?"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden card-shadow h-[400px] border border-outline-variant/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234!2d77.1234!3d28.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjIiTiA3N8KwMDcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="bg-primary p-8 rounded-3xl text-on-primary shadow-xl">
              <h4 className="text-headline-sm mb-6">Visit Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed">location_on</span>
                  <p className="text-primary-fixed-dim">123 Academic Blvd, Suite 500, Education City, EC 54321</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed">call</span>
                  <p className="text-primary-fixed-dim">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed">mail</span>
                  <p className="text-primary-fixed-dim">hello@academyelite.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Inquire;
