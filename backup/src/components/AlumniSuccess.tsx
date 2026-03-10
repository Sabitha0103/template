import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { alumniStories } from '../data/alumni';

const AlumniSuccess: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="alumni" ref={ref} className="section-y-lg bg-warm-50 border-t border-neutral-200">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            Global Impact
                        </p>
                        <h2 className="heading-lg text-neutral-dark">
                            Alumni Success Stories
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="text-neutral-500 max-w-md text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
                            Our graduates go on to lead engineering teams and innovate at some of the world's most prestigious technology companies.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alumniStories.map((alumni, i) => (
                        <motion.div
                            key={alumni.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 text-center group"
                        >
                            <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-[3px] border-warm-50 group-hover:border-primary/20 transition-colors duration-400">
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <h3 className="font-serif text-lg font-bold text-neutral-dark mb-1">
                                {alumni.name}
                            </h3>
                            <p className="text-neutral-400 text-xs tracking-wider uppercase mb-4">
                                Class of {alumni.batch}
                            </p>

                            <div className="pt-4 border-t border-neutral-100">
                                <p className="text-primary font-semibold text-sm mb-1">
                                    {alumni.company}
                                </p>
                                <p className="text-neutral-500 text-[13px]">
                                    {alumni.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AlumniSuccess;
