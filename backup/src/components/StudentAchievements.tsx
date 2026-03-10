import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { studentAchievements } from '../data/achievements';

const typeColors: Record<string, string> = {
    hackathon: 'bg-blue-50 text-blue-600 border-blue-200',
    research: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    competition: 'bg-purple-50 text-purple-600 border-purple-200',
    startup: 'bg-amber-50 text-amber-600 border-amber-200',
};

const StudentAchievements: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="achievements" ref={ref} className="section-y-lg bg-white relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Student Success
                    </p>
                    <h2 className="heading-lg text-neutral-dark mb-6">
                        Excellence Beyond the Classroom
                    </h2>
                    <p className="text-neutral-500 text-base leading-relaxed">
                        Our students consistently demonstrate their technical prowess
                        and innovation in national hackathons, research publications,
                        and entrepreneurial ventures.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {studentAchievements.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group relative flex gap-6 lg:gap-10 pb-12 last:pb-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full border-[3px] border-primary bg-white z-10 
                                              group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
                                {i !== studentAchievements.length - 1 && (
                                    <div className="w-[2px] h-full bg-neutral-200 -mt-2" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-6 lg:p-8 
                                          hover:shadow-lg hover:border-primary/30 transition-all duration-400 group-hover:-translate-y-1">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${typeColors[item.type]}`}>
                                        {item.type}
                                    </span>
                                    <span className="font-serif italic text-neutral-400 text-sm">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-neutral-dark mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentAchievements;
