import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/ScrollToTop';
import { FreeQuoteBanner } from '../components/FreeQuoteBanner';
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

    // Map of routes for translation
    const routeMap: Record<string, { en: string; es: string }> = {
        'home': { en: '/en', es: '/es' },
        'about': { en: '/en/about', es: '/es/about' },
        'pricing': { en: '/en/pricing', es: '/es/pricing' },
        'contact': { en: '/en/contact', es: '/es/contacto' },
        'faq': { en: '/en/faq', es: '/es/faq' },
        'how-it-works': { en: '/en/how-it-works', es: '/es/how-it-works' },
        'privacy': { en: '/en/privacy', es: '/es/privacidad' },
        'terms': { en: '/en/terms', es: '/es/terminos' },
    };

    const getAlternateLink = (currentPath: string, targetLang: 'en' | 'es'): string => {
        // 1. Identify current key
        let currentKey = 'home';
        // Remove trailing slash for consistency
        const cleanPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

        for (const [key, paths] of Object.entries(routeMap)) {
            if (paths.en === cleanPath || paths.es === cleanPath) {
                currentKey = key;
                break;
            }
        }
        return `${siteUrl}${routeMap[currentKey][targetLang]}`;
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background-light text-gray-900 dark:bg-background-dark dark:text-text-secondary">
            <Helmet>
                <html lang={lang} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={currentUrl} />

                {/* Hreflang Tags for SEO */}
                {/* @ts-ignore */}
                <link rel="alternate" hreflang="en" href={getAlternateLink(pathname, 'en')} />
                {/* @ts-ignore */}
                <link rel="alternate" hreflang="es" href={getAlternateLink(pathname, 'es')} />
                {/* @ts-ignore */}
                <link rel="alternate" hreflang="x-default" href={getAlternateLink(pathname, 'en')} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:image" content={image} />
                <meta name="theme-color" content="#00BCD4" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="color-scheme" content="light dark" />

                {/* Organization Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ByteWorks Agency",
                        "url": "https://byteworksagency.com",
                        "logo": "https://byteworksagency.com/android-chrome-512x512.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "sales",
                            "url": "https://byteworksagency.com/en/contact"
                        },
                        "sameAs": [
                            "https://instagram.com/byteworksagency"
                        ]
                    })}
                </script>
            </Helmet>

            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1000] bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded">
                Skip to content
            </a>

            <FreeQuoteBanner lang={lang} />

            <SiteHeader lang={lang} />

            <main
                id="main"
                className="flex-1 px-4 lg:px-40 pb-10 flex justify-center pt-24 md:pt-28"
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
