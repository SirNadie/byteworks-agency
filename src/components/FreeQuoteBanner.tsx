'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FreeQuoteBannerProps {
    lang: 'en' | 'es';
}

export const FreeQuoteBanner: React.FC<FreeQuoteBannerProps> = ({ lang }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const isEN = lang === 'en';

    // Check if dismissed in session
    useEffect(() => {
        const dismissed = sessionStorage.getItem('freeQuoteBannerDismissed');
        if (dismissed) setIsVisible(false);
    }, []);

    // Track scroll for subtle animation
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('freeQuoteBannerDismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-[52px] left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
                }`}
        >
            <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white">
                <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm md:text-base">
                    {/* Icon with pulse */}
                    <span className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-white/20 animate-pulse">
                        <span className="material-symbols-outlined text-sm">verified</span>
                    </span>

                    {/* Message */}
                    <span className="font-medium">
                        {isEN ? (
                            <>
                                <span className="font-bold">FREE QUOTE</span>
                                <span className="hidden sm:inline"> — Get a custom proposal for your project, no obligation!</span>
                                <span className="sm:hidden"> — No obligation!</span>
                            </>
                        ) : (
                            <>
                                <span className="font-bold">COTIZACIÓN GRATIS</span>
                                <span className="hidden sm:inline"> — Obtén una propuesta personalizada, ¡sin compromiso!</span>
                                <span className="sm:hidden"> — ¡Sin compromiso!</span>
                            </>
                        )}
                    </span>

                    {/* CTA Button */}
                    <Link
                        to={isEN ? "/en/contact" : "/es/contact"}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-green-600 font-bold text-xs hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap"
                    >
                        {isEN ? "Get Quote" : "Cotizar"}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>

                    {/* Close button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Dismiss"
                    >
                        <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
