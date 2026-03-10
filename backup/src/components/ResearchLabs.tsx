import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { researchLabs } from '../data/labs';

const ResearchLabs: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="research-labs" ref={ref} className="section-y-lg bg-warm-50 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-60">
                <span className="font-sans font-bold text-[14vw] leading-none text-neutral-900/[0.03] whitespace-nowrap">
                    INNOVATION
                </span>
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Research Infrastructure
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Advanced Laboratories
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {researchLabs.map((lab, i) => (
                        <motion.div
                            key={lab.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group flex flex-col lg:flex-row bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-500"
                        >
                            {/* Image Half */}
                            <div className="lg:w-2/5 h-48 lg:h-auto relative overflow-hidden">
                                <img
                                    src={lab.image}
                                    alt={lab.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Half */}
                            <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                                <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-3">
                                    {lab.name}
                                </h3>
                                <p className="text-neutral-500 text-[14px] leading-relaxed mb-6">
                                    {lab.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-primary text-[13px] font-semibold">
                                        View Equipment <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchLabs;
