import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartmentBySlug, departments } from '../data/departments';
import DepartmentAbout from '../components/department/DepartmentAbout';
import DepartmentFaculty from '../components/department/DepartmentFaculty';
import DepartmentStudents from '../components/department/DepartmentStudents';
import DepartmentGallery from '../components/department/DepartmentGallery';
import DepartmentCourseStructure from '../components/department/DepartmentCourseStructure';

const sidebarItems = [
    { key: 'about', label: 'About Us', icon: '' },
    { key: 'course', label: 'Course Structure', icon: '' },
    { key: 'program', label: 'Program', icon: '' },
    { key: 'faculty', label: 'Faculty', icon: '' },
    { key: 'students', label: 'Students', icon: '' },
    { key: 'gallery', label: 'Gallery', icon: '' },
];

const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dept = getDepartmentBySlug(slug || '');
    const [activeTab, setActiveTab] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#FFFAF3' }}>
                <div className="text-center">
                    <h1 className="font-serif text-4xl font-semibold mb-4" style={{ color: '#0A0903' }}>
                        Department Not Found
                    </h1>
                    <Link
                        to="/"
                        className="font-semibold transition-colors duration-300"
                        style={{ color: '#F85E00' }}
                    >
                        ← Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <DepartmentAbout dept={dept} />;
            case 'faculty':
                return <DepartmentFaculty dept={dept} />;
            case 'course':
                return <DepartmentCourseStructure dept={dept} />;
            case 'program':
            case 'students':
                return <DepartmentStudents dept={dept} />;
            case 'gallery':
                return <DepartmentGallery dept={dept} />;
            default:
                return <DepartmentAbout dept={dept} />;
        }
    };

    return (
        <div className="min-h-screen" style={{ background: '#FFFAF3' }}>
            {/* Top Navigation Bar */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
                style={{
                    background: 'rgba(255, 250, 243, 0.92)',
                    borderColor: 'rgba(248, 94, 0, 0.08)',
                }}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-[68px]">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/"
                                className="font-serif text-xl font-bold tracking-wide"
                                style={{ color: '#F85E00' }}
                            >
                                SRIT
                            </Link>
                            <span className="hidden sm:block w-px h-6" style={{ background: 'rgba(10, 9, 3, 0.12)' }} />
                            <span
                                className="hidden sm:block text-xs font-medium tracking-wider uppercase"
                                style={{ color: '#0A0903', opacity: 0.5 }}
                            >
                                {dept.code} Department
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                to="/departments"
                                className="hidden sm:flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                                style={{ color: '#F85E00' }}
                            >
                                <span>←</span>
                                <span>All Departments</span>
                            </Link>
                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
                                style={{ background: mobileMenuOpen ? '#FFD29D' : 'rgba(248, 94, 0, 0.08)' }}
                            >
                                <span className="text-lg">{mobileMenuOpen ? '✕' : '☰'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    <div
                        className="absolute top-[68px] left-0 bottom-0 w-72 overflow-y-auto dept-sidebar-scroll"
                        style={{ background: '#0A0903' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-5">
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(255, 210, 157, 0.4)' }}>
                                Navigation
                            </p>
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => {
                                        setActiveTab(item.key);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="dept-sidebar-item w-full text-left flex items-center gap-3.5 px-4 py-3.5 rounded-xl mb-1.5 transition-all duration-300"
                                    style={{
                                        background: activeTab === item.key ? '#FFD29D' : 'transparent',
                                        color: activeTab === item.key ? '#0A0903' : 'rgba(255, 255, 255, 0.55)',
                                        fontWeight: activeTab === item.key ? 600 : 400,
                                    }}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                    {activeTab === item.key && (
                                        <span className="ml-auto text-[10px]" style={{ color: '#F85E00' }}>●</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="pt-[68px] flex">
                {/* Desktop Sidebar */}
                <aside
                    className="hidden lg:flex flex-col fixed top-[68px] left-0 bottom-0 w-[270px] z-30 overflow-y-auto dept-sidebar-scroll"
                    style={{
                        background: '#0A0903',
                    }}
                >
                    {/* Department badge */}
                    <div className="px-6 pt-8 pb-6">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
                            style={{ background: 'rgba(248, 94, 0, 0.15)', color: '#FFB563' }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F85E00' }} />
                            {dept.code}
                        </div>
                        <h2 className="font-serif text-lg font-semibold text-white mt-4 leading-snug">
                            {dept.name}
                        </h2>
                    </div>

                    {/* Divider */}
                    <div className="mx-6 mb-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }} />

                    {/* Nav items */}
                    <nav className="px-4 flex-1">
                        <p className="px-3 text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255, 210, 157, 0.35)' }}>
                            Menu
                        </p>
                        {sidebarItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setActiveTab(item.key)}
                                className="dept-sidebar-item w-full text-left flex items-center gap-3.5 px-4 py-3 rounded-xl mb-1 transition-all duration-300 group"
                                style={{
                                    background: activeTab === item.key
                                        ? '#FFD29D'
                                        : 'transparent',
                                    color: activeTab === item.key ? '#0A0903' : 'rgba(255, 255, 255, 0.5)',
                                    fontWeight: activeTab === item.key ? 600 : 400,
                                    boxShadow: activeTab === item.key
                                        ? '0 2px 12px rgba(255, 210, 157, 0.25)'
                                        : 'none',
                                }}
                            >
                                <span
                                    className="flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden transition-all duration-300"
                                    style={{
                                        background: activeTab === item.key
                                            ? 'rgba(248, 94, 0, 0.12)'
                                            : 'rgba(255, 255, 255, 0.04)',
                                    }}
                                >
                                    <img src="/srit.jpg" alt="SRIT" className="w-6 h-6 object-contain rounded" />
                                </span>
                                <span className="text-[13px]">{item.label}</span>
                                {activeTab === item.key && (
                                    <span className="ml-auto">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                                            <path d="M1 1L5 5L1 9" stroke="#F85E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Bottom info */}
                    <div className="px-6 py-6 mt-auto" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg p-3" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>Faculty</p>
                                <p className="text-sm font-semibold" style={{ color: '#FFB563' }}>{dept.stats.faculty}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>Labs</p>
                                <p className="text-sm font-semibold" style={{ color: '#FFB563' }}>{dept.stats.labs}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>Students</p>
                                <p className="text-sm font-semibold" style={{ color: '#FFB563' }}>{dept.stats.students}</p>
                            </div>
                            <div className="rounded-lg p-3" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>Placement</p>
                                <p className="text-sm font-semibold" style={{ color: '#FFB563' }}>{dept.stats.placement}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 lg:ml-[270px] min-h-screen">
                    {/* Hero Banner */}
                    <section className="relative overflow-hidden" style={{ minHeight: '260px' }}>
                        <div className="absolute inset-0">
                            <img
                                src={dept.image}
                                alt={dept.fullName}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(10, 9, 3, 0.7) 0%, rgba(10, 9, 3, 0.5) 100%)',
                                }}
                            />
                        </div>
                        <div className="relative z-10 px-8 lg:px-14 py-16 lg:py-20">
                            <div className="flex items-center gap-3 mb-5">
                                <span
                                    className="inline-block w-10 h-[3px] rounded-full"
                                    style={{ background: '#FFD29D' }}
                                />
                                <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#FFD29D' }}>
                                    {dept.code} &middot; Department
                                </span>
                            </div>
                            <h1 className="font-serif text-3xl lg:text-[2.75rem] font-bold text-white leading-[1.15] max-w-2xl">
                                {dept.fullName}
                            </h1>
                            <p className="text-white/60 text-sm mt-4 max-w-xl leading-relaxed">
                                {dept.tagline}
                            </p>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="px-6 lg:px-14 py-10 lg:py-14">
                        {renderContent()}
                    </div>

                    {/* Other Departments Footer */}
                    <section
                        className="border-t mx-6 lg:mx-14"
                        style={{ borderColor: 'rgba(248, 94, 0, 0.08)' }}
                    >
                        <div className="py-14">
                            <p
                                className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
                                style={{ color: 'rgba(10, 9, 3, 0.3)' }}
                            >
                                Other Departments
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {departments
                                    .filter((d) => d.slug !== slug)
                                    .map((d) => (
                                        <Link
                                            key={d.slug}
                                            to={`/department/${d.slug}`}
                                            className="group flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300"
                                            style={{
                                                background: 'white',
                                                border: '1px solid rgba(248, 94, 0, 0.06)',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#FFD29D';
                                                e.currentTarget.style.borderColor = '#FFB563';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 181, 99, 0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'white';
                                                e.currentTarget.style.borderColor = 'rgba(248, 94, 0, 0.06)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <span
                                                className="flex items-center justify-center w-9 h-9 rounded-lg text-[10px] font-bold tracking-wider"
                                                style={{ background: 'rgba(248, 94, 0, 0.06)', color: '#F85E00' }}
                                            >
                                                {d.code}
                                            </span>
                                            <span className="text-sm font-medium" style={{ color: '#0A0903' }}>
                                                {d.name}
                                            </span>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-10 px-6 lg:px-14" style={{ background: '#0A0903' }}>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link to="/" className="font-serif text-lg font-semibold text-white tracking-wide">
                                SRIT
                            </Link>
                            <p className="text-white/20 text-xs">
                                © 2007–{new Date().getFullYear()} Srinivasa Ramanujan Institute of Technology
                            </p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default DepartmentPage;
