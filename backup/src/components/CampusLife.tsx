import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const campusItems = [
    {
        title: 'Innovation Labs',
        subtitle: 'State-of-the-art research facilities',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        span: 'md:col-span-2',
    },
    {
        title: 'Student Clubs',
        subtitle: 'Collaborative learning communities',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        span: '',
    },
    {
        title: 'Sports Facilities',
        subtitle: 'Outdoor and indoor athletics',
        image: 'https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        span: '',
    },
    {
        title: 'Cultural Events',
        subtitle: 'Annual fests and celebrations',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        span: 'md:col-span-2',
    },
];

const CampusLife: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="section-y-lg bg-white relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0">
                <span className="font-sans font-black text-[18vw] leading-[0.8] text-neutral-900/[0.02] tracking-tighter">
                    CULTURE
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
                        Beyond the Classroom
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Campus Life
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4">
                    {campusItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group relative h-[280px] lg:h-[340px] overflow-hidden rounded-lg cursor-pointer ${item.span}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Default overlay — lighter */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 group-hover:backdrop-blur-[2px] transition-all duration-500" />

                            {/* Label — enlarges on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/0 group-hover:text-white/60 text-sm transition-colors duration-500">
                                    {item.subtitle}
                                </p>
                                <span className="block mt-3 text-white/0 group-hover:text-primary text-[13px] font-medium transition-colors duration-500">
                                    Learn More →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusLife;
