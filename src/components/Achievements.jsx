const Achievements = () => {
  const stats = [
    ['98%', 'Pass Rate'],
    ['450+', 'A+ Grades'],
    ['25+', 'Awards'],
    ['100+', 'Toppers']
  ];

  return (
    <section className="py-section-gap bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:96px_96px]"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h2 className="text-label-caps text-primary-fixed uppercase">Celebrating Results</h2>
            <h3 className="text-headline-md md:text-display-lg-mobile font-display-lg text-on-primary">A track record built through consistent practice.</h3>
            <p className="text-body-lg text-primary-fixed-dim">Our students improve because the system is consistent: planned syllabus coverage, weekly testing, correction sessions, and parent-visible progress.</p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">workspace_premium</span>
              </div>
              <div>
                <div className="text-white font-bold">Exam-ready confidence</div>
                <div className="text-primary-fixed-dim text-sm">Built one assessed week at a time</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-white/10 backdrop-blur-md p-7 rounded-xl border border-white/20 text-center">
                <div className="text-headline-md text-white font-bold mb-1">{value}</div>
                <p className="text-primary-fixed-dim text-[10px] uppercase font-bold tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
