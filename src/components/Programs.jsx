const Programs = () => {
  const courses = [
    {
      title: 'Class 1-3',
      label: 'FOUNDATIONS',
      desc: 'Reading, numeracy, handwriting, and curiosity-led practice for strong basics.',
      icon: 'toys',
      color: 'bg-secondary-container'
    },
    {
      title: 'Class 4-5',
      label: 'SKILL BUILDING',
      desc: 'Concept fluency, problem solving, and disciplined homework routines.',
      icon: 'psychology',
      color: 'bg-tertiary-fixed'
    },
    {
      title: 'Class 6-8',
      label: 'ACADEMIC GROWTH',
      desc: 'Sharper math, science fundamentals, Olympiad exposure, and regular tests.',
      icon: 'trending_up',
      color: 'bg-primary-fixed'
    },
    {
      title: 'Class 9-10',
      label: 'BOARD PREP',
      desc: 'Board-focused plans, answer-writing practice, and doubt support before exams.',
      icon: 'assignment',
      color: 'bg-on-primary-container'
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="programs">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-label-caps text-on-primary-container uppercase">Tailored Programs</h2>
            <h3 className="text-headline-md font-display-lg text-primary">One academic system for every school stage</h3>
          </div>
          <p className="text-on-surface-variant max-w-md">Each batch follows a clear monthly plan: concept class, guided practice, test, and correction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {courses.map((course) => (
            <div key={course.title} className="group p-7 bg-white rounded-xl card-shadow border border-outline-variant/30 hover:border-primary-fixed-dim transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{course.icon}</span>
              </div>
              <h4 className="text-headline-sm text-primary mb-3">{course.title}</h4>
              <div className="inline-block px-3 py-1 bg-surface-container-low text-secondary text-[12px] font-bold rounded-full mb-4">{course.label}</div>
              <p className="text-on-surface-variant mb-6">{course.desc}</p>
              <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="/inquire">
                Ask for schedule <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
