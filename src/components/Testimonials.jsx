import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Mrs. Sharma",
      role: "Parent of Class 10 Student",
      text: "The personalized attention my daughter received for her Class 10 boards was exceptional. The weekly tests helped her identify and fix her weak areas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjL4kkX1z85LZqBKXIdwZ9PpFuYTKK4cifGkOpIiqscAxK7rn5m7Yi_QrDtpIX1Qxnjs8hCpndjLlVW7hAQwYbLi9MvNABt7O7MARRoH5t2fdy2lXHVZVfPmzj3AdrFBDBQmVVtg3oOgfQisd3uIR2syJGB-23EFiL6DaBAa6jLaivNbx8RZCeumI84rrXKR-Cl_VVcejkUcMLO1UGaKhbdnTq6WgNEkde-AcfgBqANgo4HnI3j9aU86T9mqrcg2dP_XH0NfFWFnO2"
    },
    {
      name: "Aryan Mehta",
      role: "Class 8 Student",
      text: "I love the science experiments we do in class. Academy Elite made subjects like Physics and Math actually fun for me.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGjjp4j2dR_eBtUn5As71a-cY68649C6Y73MspMRAT_bakpe-mZ1AB_0Q8s4XbZEgCtoNMGrq6w-dG4S1LZbSH8fikAIsTO8tcrdjnBMJIfro2gW0qZuCqEO0aPnRYtJcz2v1m9GcznaIQUtLq_h3eVvAH2JhN7gIF1-yvKAUBx0OaUtq9xdLAtRLdYFiQoZ76RAnokgdt46gssd5odWmAk9FQQJMyQeGHdKz9i0rggANjq0EZjqdO5cYKcdctEf8EtR_XNWmxah30"
    },
    {
      name: "Mr. Rajesh",
      role: "Parent of Class 5 Student",
      text: "The mentors are approachable and the small batch size ensures no student is left behind. Best coaching institute in the city.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGcUKb4IJI2LRklVvQTHvxD30GE52VONEIawQT_8K0SousnckOS-IJLmZ4jwGCPfN13ZC_3PWagAYYNbXV-PiJd2bzPEHoLt_uRjh9feyx7G4pR1sY3FEFNSXxNYz0iY8ZJLc9I7wRsAobTgdOH1rA8GJGgm1OeYuyn55lBFNfKliDhWwMz0znG20cksWcFK407bZ4OJKa3S-oAu0pNWmd3JCfNCTLBRKXWg4jRGSQoUx5MvQozU-OPFvljBtyp3wcI5f1R0PtcTDk"
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="text-label-caps text-on-primary-container uppercase mb-4">Testimonials</h2>
          <h3 className="text-headline-md font-display-lg text-primary">What Parents & Students Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl card-shadow relative">
              <span className="material-symbols-outlined absolute top-6 right-8 text-6xl text-primary/5">format_quote</span>
              <div className="flex gap-1 text-tertiary-fixed-dim mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt={review.name} className="w-full h-full object-cover" src={review.img} />
                </div>
                <div>
                  <div className="font-bold text-primary">{review.name}</div>
                  <div className="text-secondary text-sm">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
