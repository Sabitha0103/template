import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Departments', href: '/departments' },
    { label: 'Research', href: '/#research' },
    { label: 'Placements', href: '/#placements' },
    { label: 'Admissions', href: '/#admissions' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Always solid on non-home pages
    const isSolid = scrolled || location.pathname !== '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial check
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
                ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
                : 'bg-transparent'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-sm">
                            <span className="text-white font-serif font-bold text-xs tracking-wider">SR</span>
                        </div>
                        <span className={`font-serif text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-500 ${isSolid ? 'text-neutral-dark' : 'text-white'
                            }`}>
                            SRIT
                        </span>
                    </a>

                    {/* Desktop links — with animated underline */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`nav-link-underline text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-primary ${isSolid ? 'text-neutral-600' : 'text-white/80'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Apply button */}
                    <a
                        href="/#admissions"
                        className={`hidden lg:inline-flex items-center px-6 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${isSolid
                            ? 'bg-primary text-white hover:bg-primary-dark'
                            : 'border border-white/25 text-white hover:bg-white/10'
                            }`}
                    >
                        Apply Now
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-6 h-5"
                        aria-label="Toggle menu"
                    >
                        <span className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${isSolid ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] transition-all duration-300 ${isSolid ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${isSolid ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-4 pb-6 pt-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-lg font-semibold ${isSolid ? 'text-neutral-700' : 'text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="/#admissions"
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-semibold text-primary"
                                >
                                    Apply Now →
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
