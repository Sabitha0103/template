import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="section-y-lg bg-white relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                <span className="font-sans font-bold text-[12vw] leading-none text-neutral-900/[0.02] whitespace-nowrap">
                    ESTD. 2008
                </span>
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Accent bar */}
                        <div className="w-20 h-[3px] bg-primary mb-5" />

                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            About SRIT
                        </p>

                        <h2 className="heading-lg text-neutral-dark mb-8">
                            Inspired by the Legacy of
                            <br />
                            Srinivasa Ramanujan
                        </h2>

                        <div className="space-y-5 text-neutral-600 leading-[1.8] text-[15px] max-w-lg">
                            <p>
                                Srinivasa Ramanujan Institute of Technology was established in 2008
                                under the Smt. Aluru Narayanamma Memorial Educational Society,
                                founded by Sri Aluru Sambasiva Reddy — driven by the belief that
                            </p>
                            <blockquote className="border-l-2 border-primary/30 pl-5 italic text-neutral-700">
                                "Education is a Key Enabler for Progress."
                            </blockquote>
                            <p>
                                Located in Ananthapuramu, Andhra Pradesh, SRIT is permanently
                                affiliated to JNTU Ananthapuramu and approved by AICTE New Delhi.
                                The institute offers 7 undergraduate engineering programs and has
                                built an enviable record of producing industry-ready graduates
                                within 15 years of establishment.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <a
                                href="#departments"
                                className="inline-flex items-center gap-2 text-primary text-sm font-semibold group"
                            >
                                <span>Explore Departments</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                            <span className="w-px h-4 bg-neutral-300" />
                            <a
                                href="https://www.srit.ac.in/overview/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 text-sm font-medium hover:text-primary transition-colors duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="overflow-hidden rounded-lg"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="SRIT campus"
                            className="w-full h-[420px] lg:h-[520px] object-cover img-zoom"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
