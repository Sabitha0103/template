import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const companies = [
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Zoho', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Zoho_Logo.svg' },
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
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
                                className="font-serif text-4xl lg:text-6xl font-bold text-primary"
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

                {/* Marquee Companies */}
                <div className="text-center overflow-hidden">
                    <p className="label-caps text-neutral-400 tracking-[0.25em] mb-12">
                        Our Recruiters
                    </p>
                    <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-warm-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-warm-50 after:to-transparent">
                        <div className="flex w-max animate-marquee items-center gap-8 lg:gap-12">
                            {[...companies, ...companies].map((company, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-40 h-20 lg:w-48 lg:h-24 flex items-center justify-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placements;
