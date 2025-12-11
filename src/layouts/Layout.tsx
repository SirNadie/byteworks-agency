import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/ScrollToTop';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children?: React.ReactNode;
    lang?: 'en' | 'es';
    title?: string;
    description?: string;
    image?: string;
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    lang = 'en',
    title = 'ByteWorks | Modern web design & hosting',
    description = 'Websites that work for you, not against you. Bilingual, fast, and affordable.',
    image = '/og-image.png'
}) => {
    const { pathname } = useLocation();
    const siteUrl = 'https://byteworksagency.com'; // Base URL for production
    const currentUrl = `${siteUrl}${pathname}`;

    return (
        <div className="min-h-screen flex flex-col font-body bg-background-light text-gray-900 dark:bg-background-dark dark:text-text-secondary">
            <Helmet>
                <html lang={lang} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={currentUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content={image} />
                <meta name="theme-color" content="#00BCD4" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="color-scheme" content="light dark" />
                {/* Fonts are loaded in index.html for performance, but we rely on them here */}
            </Helmet>

            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1000] bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded">
                Skip to content
            </a>

            <SiteHeader lang={lang} />

            <main
                id="main"
                className="flex-1 px-4 lg:px-40 pb-10 flex justify-center pt-20 md:pt-24"
            >
                <div className="w-full">
                    {children}
                </div>
            </main>

            <Footer lang={lang} />
            <WhatsAppButton lang={lang} />
            <ScrollToTop />
        </div>
    );
};
