import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface SiteHeaderProps {
    lang?: 'en' | 'es';
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ lang = 'en' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isEN = lang === 'en';
    const pathname = location.pathname;

    const isActive = (href: string) => {
        const home = isEN ? '/en' : '/es';
        // Remove trailing slash for comparison
        const path = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
        const link = href.endsWith('/') && href.length > 1 ? href.slice(0, -1) : href;

        if (link === home) {
            return path === home;
        }
        return path === link || path.startsWith(`${link}/`);
    };



    const navLinks = isEN
        ? [
            { href: '/en/about', label: 'About' },
            { href: '/en/pricing', label: 'Pricing' },
            { href: '/en/how-it-works', label: 'How It Works' },
            { href: '/en/faq', label: 'FAQ' },
        ]
        : [
            { href: '/es/about', label: 'Nosotros' },
            { href: '/es/pricing', label: 'Precios' },
            { href: '/es/how-it-works', label: 'Cómo funciona' },
            { href: '/es/faq', label: 'Preguntas' },
        ];

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    }, [location]);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className="animate-slide-down fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="w-full max-w-[960px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
                    <Link
                        to={isEN ? '/en' : '/es'}
                        className="flex items-center gap-2 text-gray-900 dark:text-text-primary hover:opacity-80 transition-opacity"
                    >
                        <img
                            src={logo}
                            alt="ByteWorks logo"
                            width="28"
                            height="28"
                            className="block"
                        />
                        <span className="font-display text-xl">ByteWorks</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${isActive(link.href)
                                    ? 'text-gray-900 dark:text-white underline decoration-2 underline-offset-4 decoration-primary'
                                    : 'text-gray-700 dark:text-gray-300'
                                    }`}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <Link
                        to={isEN ? '/en/contact' : '/es/contacto'}
                        className="hidden md:inline-flex min-w-[84px] h-10 px-4 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"
                    >
                        {isEN ? 'Get Started' : 'Comenzar'}
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        id="hamburger"
                        className={`md:hidden relative h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary ${isMenuOpen ? 'open' : ''
                            }`}
                        aria-label={isEN ? 'Open menu' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                    >
                        <span
                            className={`absolute w-[22px] h-[2px] bg-currentColor rounded transition-all duration-200 ${isMenuOpen ? 'top-[18px] rotate-45' : 'top-[12px]'
                                }`}
                        ></span>
                        <span
                            className={`absolute w-[22px] h-[2px] bg-currentColor rounded transition-all duration-200 top-[18px] ${isMenuOpen ? 'opacity-0 -translate-x-[6px]' : ''
                                }`}
                        ></span>
                        <span
                            className={`absolute w-[22px] h-[2px] bg-currentColor rounded transition-all duration-200 ${isMenuOpen ? 'top-[18px] -rotate-45' : 'top-[24px]'
                                }`}
                        ></span>
                    </button>
                </div>
            </header>

            {/* Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/30 transition-opacity duration-200 ease-in-out z-[40] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <nav
                className={`md:hidden fixed left-4 right-4 top-16 origin-top border border-gray-200 dark:border-gray-700 rounded-lg bg-white/95 dark:bg-background-dark/90 text-gray-800 dark:text-text-secondary shadow-lg z-[60] max-h-[75vh] overflow-auto transition-all duration-200 ease-in-out ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <div className="flex flex-col gap-2 p-4">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`py-2 border-b last:border-b-0 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary ${isActive(link.href) ? 'text-gray-900 dark:text-white font-semibold' : ''
                                }`}
                            style={{ transitionDelay: `${i * 30}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to={isEN ? '/en/contact' : '/es/contacto'}
                        className="py-2 mt-2 text-center rounded-lg bg-primary text-white font-bold"
                    >
                        {isEN ? 'Get Started' : 'Comenzar'}
                    </Link>
                </div>
            </nav>
        </>
    );
};
