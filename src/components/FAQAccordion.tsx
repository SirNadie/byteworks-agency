import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    q: string;
    a: React.ReactNode;
}

interface FAQAccordionProps {
    faqs: readonly FAQItem[];
    lang?: 'en' | 'es';
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs = [], lang = 'en' }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const regionLabel = lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions';

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="faq-accordion space-y-3" aria-label={regionLabel}>
            {faqs.map((item, i) => (
                <div key={i} className="faq-item border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark/50 backdrop-blur">
                    <button
                        id={`faq-btn-${i}`}
                        type="button"
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                        aria-expanded={openIndex === i}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => toggle(i)}
                    >
                        <span className="font-medium text-gray-900 dark:text-text-primary">
                            {item.q}
                        </span>
                        <svg
                            className={`chev h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                id={`faq-panel-${i}`}
                                role="region"
                                aria-labelledby={`faq-btn-${i}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 pb-3 text-sm text-gray-700 dark:text-gray-300">
                                    {item.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
