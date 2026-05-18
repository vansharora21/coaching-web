const Programs = () => {
  const courses = [
    {
      title: 'Primary Classes (1-5)',
      label: 'FOUNDATIONAL LEARNING',
      desc: 'Focus on foundational learning, reading, writing, and basic numeracy skills.',
      icon: 'menu_book',
      color: 'bg-secondary-container'
    },
    {
      title: 'Middle School (6-8)',
      label: 'CONCEPT STRENGTHENING',
      desc: 'Strengthening concepts in Maths, Science, English, and Social Studies.',
      icon: 'psychology',
      color: 'bg-tertiary-fixed'
    },
    {
      title: 'Secondary Classes (9-10)',
      label: 'EXAM PREPARATION',
      desc: 'Exam-focused preparation with deep concept clarity and regular testing.',
      icon: 'assignment',
      color: 'bg-primary-fixed'
    }
  ];

  const subjects = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science', 'French'];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="programs">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-label-caps text-on-primary-container uppercase">Our Programs</h2>
            <h3 className="text-headline-md font-display-lg text-primary">Coaching programs for every school stage</h3>
          </div>
          <p className="text-on-surface-variant max-w-md">Each batch follows concept teaching, guided practice, homework support, testing, and correction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {courses.map((course) => (
            <div key={course.title} className="group p-7 bg-white rounded-xl card-shadow border border-outline-variant/30 hover:border-primary-fixed-dim transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{course.icon}</span>
              </div>
              <h4 className="text-headline-sm text-primary mb-3">{course.title}</h4>
              <div className="inline-block px-3 py-1 bg-surface-container-low text-secondary text-[12px] font-bold rounded-full mb-4">{course.label}</div>
              <p className="text-on-surface-variant">{course.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-surface-container-low border border-outline-variant/30 p-6 md:p-8">
          <h4 className="text-xl font-bold text-primary mb-5">Subjects Covered</h4>
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <span key={subject} className="px-4 py-2 rounded-full bg-white border border-outline-variant/40 text-secondary font-bold text-sm">
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
