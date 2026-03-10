import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const companies = [
    'Accenture', 'Deloitte', 'Cognizant', 'Zoho', 'TCS',
    'Infosys', 'Wipro', 'Mobileum', 'Amazon',
];

const placementStats = [
    { value: '₹9 LPA', label: 'Highest Package' },
    { value: '85%', label: 'Placement Rate' },
    { value: '100+', label: 'Recruiting Companies' },
];

const Placements: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="placements" ref={ref} className="section-y-lg bg-warm-50">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Career Outcomes
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Placements &amp; Industry Partners
                    </h2>
                </motion.div>

                {/* Stats row — larger numbers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid grid-cols-3 gap-6 lg:gap-0 mb-16 lg:mb-20"
                >
                    {placementStats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`text-center ${i > 0 ? 'lg:border-l lg:border-neutral-300' : ''
                                }`}
                        >
                            <div
                                className="font-serif text-4xl lg:text-6xl font-bold text-neutral-dark"
                                style={{ fontVariantNumeric: 'tabular-nums' }}
                            >
                                {stat.value}
                            </div>
                            <div className="label-caps text-neutral-400 mt-4">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Company pill badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="label-caps text-neutral-400 tracking-[0.25em] mb-8">
                        Our Recruiters
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {companies.map((name) => (
                            <span
                                key={name}
                                className="px-5 py-2.5 border border-neutral-200 rounded-full text-neutral-600 text-sm font-medium hover:border-primary/40 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Placements;
