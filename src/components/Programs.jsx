import React from 'react';

const Programs = () => {
  const courses = [
    {
      title: "Class 1–3",
      label: "FOUNDATIONS",
      desc: "Building curiosity and strengthening the basics through play-way learning.",
      icon: "toys",
      color: "bg-secondary-container"
    },
    {
      title: "Class 4–5",
      label: "SKILL BUILDING",
      desc: "Developing logical reasoning and deep-diving into core subjects.",
      icon: "psychology",
      color: "bg-tertiary-fixed"
    },
    {
      title: "Class 6–8",
      label: "ACADEMIC GROWTH",
      desc: "Competitive exam prep and conceptual clarity for advanced science.",
      icon: "trending_up",
      color: "bg-primary-fixed"
    },
    {
      title: "Class 9–10",
      label: "BOARD PREP",
      desc: "Strategic study plans, rigorous testing, and round-the-clock doubt support.",
      icon: "assignment",
      color: "bg-on-primary-container"
    }
  ];

  return (
    <section className="py-section-gap" id="programs">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-label-caps text-on-primary-container uppercase">Tailored Programs</h2>
          <h3 className="text-headline-md md:text-headline-md font-display-lg text-primary">Curriculum Designed for Every Stage</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {courses.map((course, idx) => (
            <div key={idx} className="group p-8 bg-white rounded-3xl card-shadow border border-transparent hover:border-primary-fixed-dim transition-all hover:-translate-y-2 cursor-pointer">
              <div className={`w-12 h-12 ${course.color} rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{course.icon}</span>
              </div>
              <h4 className="text-headline-sm text-primary mb-3">{course.title}</h4>
              <div className="inline-block px-3 py-1 bg-surface-container-low text-secondary text-[12px] font-bold rounded-full mb-4">{course.label}</div>
              <p className="text-on-surface-variant mb-6">{course.desc}</p>
              <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                Learn More <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
