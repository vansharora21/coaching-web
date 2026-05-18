import poster from './images/5.jpeg';

const Achievements = () => {
  return (
    <section className="py-section-gap bg-primary overflow-hidden relative" id="cta">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:96px_96px]"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h2 className="text-label-caps text-primary-fixed uppercase">Admissions Open</h2>
            <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-on-primary">Give Your Child the Right Guidance</h3>
            <p className="text-body-lg text-primary-fixed-dim">Join Lakshya Coaching Classes today and help your child build a strong academic future.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/inquire" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-4 rounded-full font-bold hover:bg-primary-fixed transition-colors">
                Inquire Now <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
              <a href="tel:+919950803030" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-4 rounded-full font-bold hover:bg-white/15 transition-colors">
                Call Now <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/20 bg-white/10 max-w-md lg:ml-auto">
            <img src={poster} alt="Lakshya Coaching Classes inquiry poster" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
