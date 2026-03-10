import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartmentBySlug, departments } from '../data/departments';

const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dept = getDepartmentBySlug(slug || '');

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="font-serif text-4xl font-semibold text-neutral-dark mb-4">
                        Department Not Found
                    </h1>
                    <Link
                        to="/"
                        className="label-caps text-primary hover:text-primary-dark transition-colors duration-300"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Top Nav Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
                    <div className="flex items-center justify-between h-[72px]">
                        <Link to="/" className="font-serif text-xl font-semibold tracking-wide text-neutral-dark">
                            SRIT
                        </Link>
                        <Link
                            to="/#departments"
                            className="label-caps text-neutral-500 hover:text-primary transition-colors duration-300"
                        >
                            ← All Departments
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero image */}
            <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden mt-[72px]">
                <div className="absolute inset-0">
                    <img
                        src={dept.image}
                        alt={dept.fullName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12 pb-16 lg:pb-20">
                    <p className="label-caps text-white/50 mb-4 tracking-[0.25em]">
                        {dept.code} &nbsp;·&nbsp; Department
                    </p>
                    <h1 className="font-serif text-4xl lg:text-[3.5rem] font-bold text-white leading-[1.1] max-w-3xl">
                        {dept.fullName}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20 lg:py-28">
                <div className="grid lg:grid-cols-[60%_1fr] gap-16 lg:gap-24">
                    {/* Left — description */}
                    <div>
                        <p className="font-serif text-xl lg:text-2xl italic text-neutral-700 mb-12 leading-relaxed max-w-xl">
                            {dept.tagline}
                        </p>

                        <div className="space-y-6 text-neutral-700 leading-[1.8] text-[0.9375rem] reading-column">
                            {dept.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right — highlights */}
                    <div className="lg:pt-2">
                        <p className="label-caps text-neutral-400 mb-8 tracking-[0.25em]">
                            Program Highlights
                        </p>
                        <ul className="space-y-0">
                            {dept.highlights.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-neutral-700 text-[0.9375rem] py-5 border-b border-neutral-200 first:border-t first:border-neutral-200"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="label-caps text-neutral-400 mb-6 tracking-[0.25em]">
                                Affiliation
                            </p>
                            <p className="text-neutral-700 text-[0.9375rem] leading-relaxed">
                                Affiliated to Jawaharlal Nehru Technological University,
                                Ananthapuramu (JNTUA). Approved by AICTE, New Delhi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other departments */}
            <section className="border-t border-neutral-200">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20 lg:py-24">
                    <p className="label-caps text-neutral-400 mb-10 tracking-[0.25em]">
                        Other Departments
                    </p>
                    <div className="border-t border-neutral-200">
                        {departments
                            .filter((d) => d.slug !== slug)
                            .map((d) => (
                                <Link
                                    key={d.slug}
                                    to={`/department/${d.slug}`}
                                    className="group flex items-center justify-between border-b border-neutral-200 py-5"
                                >
                                    <span className="font-serif text-lg font-medium text-neutral-dark group-hover:text-primary transition-colors duration-300">
                                        {d.name}
                                    </span>
                                    <span className="label-caps text-neutral-400 text-[0.625rem] tracking-[0.25em]">
                                        {d.code}
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-dark py-12">
                <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link to="/" className="font-serif text-lg font-semibold text-white tracking-wide">
                        SRIT
                    </Link>
                    <p className="text-white/25 text-xs">
                        © 2007–{new Date().getFullYear()} Srinivasa Ramanujan Institute of Technology
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default DepartmentPage;
