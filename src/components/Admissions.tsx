import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Admissions: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="admissions" ref={ref} className="relative py-28 lg:py-36 overflow-hidden bg-warm-50">

            <div className="relative section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-6">
                        Admissions 2026
                    </p>

                    <h2 className="heading-lg text-neutral-dark mb-6">
                        Join the Next Generation
                        <br />
                        of Engineers
                    </h2>

                    <p className="text-neutral-500 text-base leading-relaxed mb-10">
                        Admissions through AP EAPCET (Category-A) and management quota
                        (Category-B) following APSCHE guidelines. B.Tech programs across
                        7 engineering disciplines.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://www.srit.ac.in/admission-procedure/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-primary text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-primary-dark transition-colors duration-300"
                        >
                            Apply Now
                        </a>
                        <a
                            href="https://www.srit.ac.in/courses-offered/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border border-neutral-300 text-neutral-dark text-[13px] font-semibold tracking-[0.08em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            Download Brochure
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Admissions;
