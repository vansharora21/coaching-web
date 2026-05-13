import React from 'react';

const Achievements = () => {
  return (
    <section className="py-section-gap bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-1 border-r border-white"></div>
          <div className="col-span-1 border-r border-white"></div>
          <div className="col-span-1 border-r border-white"></div>
          <div className="col-span-1 border-r border-white"></div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-label-caps text-primary-fixed uppercase">Celebrating Results</h2>
            <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-on-primary">Our Track Record Speaks for Itself.</h3>
            <p className="text-body-lg text-primary-fixed-dim">Over the last decade, our students have consistently outperformed city averages in board exams and competitive Olympiads.</p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">workspace_premium</span>
              </div>
              <div>
                <div className="text-white font-bold">100+ Toppers</div>
                <div className="text-primary-fixed-dim text-sm">In Last Year's Board Exams</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
              <div className="text-headline-md text-white font-bold mb-1">98%</div>
              <p className="text-primary-fixed-dim text-[10px] uppercase font-bold tracking-widest">Pass Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
              <div className="text-headline-md text-white font-bold mb-1">450+</div>
              <p className="text-primary-fixed-dim text-[10px] uppercase font-bold tracking-widest">A+ Grades</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
              <div className="text-headline-md text-white font-bold mb-1">25+</div>
              <p className="text-primary-fixed-dim text-[10px] uppercase font-bold tracking-widest">Awards</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
              <div className="text-headline-md text-white font-bold mb-1">100%</div>
              <p className="text-primary-fixed-dim text-[10px] uppercase font-bold tracking-widest">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
