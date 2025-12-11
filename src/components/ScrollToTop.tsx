import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                keyboard_arrow_up
            </span>
        </button>
    );
};
