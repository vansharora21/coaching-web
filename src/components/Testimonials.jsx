const Testimonials = () => {
  const reviews = [
    {
      name: 'Mrs. Sharma',
      role: 'Parent',
      text: 'My child\'s basics have improved a lot. Teachers give personal attention and explain concepts very clearly.',
      initials: 'MS'
    },
    {
      name: 'Mr. Verma',
      role: 'Parent',
      text: 'Very disciplined environment. Regular tests helped my son score better in exams.',
      initials: 'MV'
    },
    {
      name: 'Mrs. Gupta',
      role: 'Parent',
      text: 'Best coaching in the area for school students. Highly recommended.',
      initials: 'MG'
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest overflow-hidden" id="testimonials">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-label-caps text-on-primary-container uppercase mb-4">What Parents Say</h2>
            <h3 className="text-headline-md font-display-lg text-primary">Realistic parent feedback from school-focused coaching</h3>
          </div>
          <div className="flex items-center gap-2 text-tertiary-fixed-dim">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
            <span className="ml-2 text-primary font-bold">Trusted by parents</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-white p-7 rounded-xl card-shadow border border-outline-variant/30 relative"
            >
              <span className="material-symbols-outlined absolute top-5 right-6 text-5xl text-primary/5">format_quote</span>
              <div className="flex gap-1 text-tertiary-fixed-dim mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-7 min-h-[108px]">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-primary text-white flex items-center justify-center text-sm font-bold">{review.initials}</div>
                </div>
                <div>
                  <div className="font-bold text-primary">{review.name}</div>
                  <div className="text-secondary text-sm">{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
