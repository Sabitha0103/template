import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-28 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — text */}
                    <div>
                        <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
                            About SRIT
                        </p>
                        <h2 className="font-serif text-3xl lg:text-[2.5rem] font-bold text-neutral-dark leading-tight mb-8">
                            Inspired by the Legacy of<br />
                            Srinivasa Ramanujan
                        </h2>
                        <div className="space-y-5 text-neutral-700 leading-[1.8] text-[15px]">
                            <p>
                                Srinivasa Ramanujan Institute of Technology was established in 2007 by
                                Founder-cum-Secretary Sri Aluru Sambasiva Reddy under the
                                Smt. Aluru Narayanamma Memorial Educational Society — to give
                                shape to his firm belief that "Education is a Key Enabler for Progress."
                            </p>
                            <p>
                                Located in Ananthapuramu, Andhra Pradesh, SRIT is committed to
                                creating engineers who are industry-ready, socially responsible,
                                and equipped with the knowledge and skills to make a meaningful
                                impact on the world. Our faculty, infrastructure, and academic
                                programs are designed to nurture the next generation of innovators.
                            </p>
                        </div>
                        <a
                            href="#departments"
                            className="inline-flex items-center gap-2 mt-8 text-primary text-sm font-semibold hover:text-primary-dark transition-colors duration-300 group"
                        >
                            Explore Departments
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </div>

                    {/* Right — image */}
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="SRIT campus"
                            className="w-full h-[460px] object-cover hover:scale-[1.03] transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
