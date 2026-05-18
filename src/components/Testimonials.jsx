const Testimonials = () => {
  const reviews = [
    {
      name: 'Mrs. Sharma',
      role: 'Parent of Class 10 Student',
      text: 'The weekly tests and correction classes changed the way my daughter prepared. We always knew what needed work next.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=240&auto=format&fit=crop'
    },
    {
      name: 'Aryan Mehta',
      role: 'Class 8 Student',
      text: 'Math feels easier now because every topic is explained from the basics and then practiced in class.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=240&auto=format&fit=crop'
    },
    {
      name: 'Mr. Rajesh',
      role: 'Parent of Class 5 Student',
      text: 'The batch size is small and the teachers are approachable. The parent updates are practical, not just formal.',
      img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=240&auto=format&fit=crop'
    },
    {
      name: 'Nisha Kapoor',
      role: 'Parent of Class 7 Student',
      text: 'The teachers identified exactly where my son was losing marks and gave him a clear weekly practice plan.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop'
    },
    {
      name: 'Kabir S.',
      role: 'Class 9 Student',
      text: 'The revision sheets before tests are very useful. I feel more organized and less nervous before exams.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop'
    }
  ];

  const rollingReviews = [...reviews, ...reviews];

  return (
    <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Testimonials</h2>
            <h3 className="text-headline-md font-display-lg text-primary">What families notice after joining</h3>
          </div>
          <div className="flex items-center gap-2 text-tertiary-fixed-dim">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
            <span className="ml-2 text-primary font-bold">4.9 parent rating</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-surface-container-lowest to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-surface-container-lowest to-transparent z-10"></div>

        <div className="testimonial-track flex gap-6 w-max">
          {rollingReviews.map((review, idx) => (
            <article
              key={`${review.name}-${idx}`}
              className="w-[320px] md:w-[420px] bg-white p-7 rounded-xl card-shadow border border-outline-variant/30 relative"
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
                  <img alt={review.name} className="w-full h-full object-cover" src={review.img} />
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
